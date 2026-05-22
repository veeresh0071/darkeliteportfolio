"use client"

import React, {
  Suspense,
  useEffect,
  useMemo,
  useRef,
  useState,
  createContext,
  useContext,
} from "react"
import * as THREE from "three"
import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { Download, Heart, X } from "lucide-react"

export type Card = {
  id: string
  imageUrl: string
  alt: string
  title: string
}

type CardContextType = {
  selectedCard: Card | null
  setSelectedCard: (card: Card | null) => void
  cards: Card[]
  enableModal: boolean
}

const CardContext = createContext<CardContextType | undefined>(undefined)

function useCard() {
  const ctx = useContext(CardContext)
  if (!ctx) throw new Error("useCard must be used within CardProvider")
  return ctx
}

const DEFAULT_CARDS: Card[] = [
  { id: "1", imageUrl: "https://i.ibb.co/4ZWcP129/1.png", alt: "Elegant Invitation", title: "Elegant Invitation" },
  { id: "2", imageUrl: "https://i.ibb.co/TMbhBRcL/2.png", alt: "Modern Design", title: "Modern Design" },
  { id: "3", imageUrl: "https://i.ibb.co/spXBFdSm/3.png", alt: "Vintage Style", title: "Vintage Style" },
  { id: "4", imageUrl: "https://i.ibb.co/N2TCN0bC/4.png", alt: "Minimalist", title: "Minimalist" },
  { id: "5", imageUrl: "https://i.ibb.co/jZkh6q1M/5.png", alt: "Floral Design", title: "Floral Design" },
  { id: "6", imageUrl: "https://i.ibb.co/6cc7mksr/6.png", alt: "Geometric", title: "Geometric" },
  { id: "7", imageUrl: "https://i.ibb.co/bjV35jNQ/7.png", alt: "Luxury Gold", title: "Luxury Gold" },
  { id: "8", imageUrl: "https://i.ibb.co/PZ7WLs7g/8.png", alt: "Rustic Style", title: "Rustic Style" },
  { id: "9", imageUrl: "https://i.ibb.co/qLR5bQRM/9.png", alt: "Dark Modern", title: "Dark Modern" },
  { id: "10", imageUrl: "https://i.ibb.co/PdNhw3K/10.png", alt: "Colorful Party", title: "Colorful Party" },
];

function CardProvider({
  children,
  cards = DEFAULT_CARDS,
  enableModal = false,
}: {
  children: React.ReactNode
  cards?: Card[]
  enableModal?: boolean
}) {
  const [selectedCard, setSelectedCard] = useState<Card | null>(null)
  return (
    <CardContext.Provider value={{ selectedCard, setSelectedCard, cards, enableModal }}>
      {children}
    </CardContext.Provider>
  )
}

/* Starfield Background */
function StarfieldBackground() {
  const mountRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      mount.clientWidth / mount.clientHeight,
      0.1,
      2000
    )
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0) // Fully transparent background to blend into the clients section background
    mount.appendChild(renderer.domElement)

    const starsGeometry = new THREE.BufferGeometry()
    const starsCount = 3000
    const positions = new Float32Array(starsCount * 3)
    for (let i = 0; i < starsCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 1000
      positions[i * 3 + 1] = (Math.random() - 0.5) * 1000
      positions[i * 3 + 2] = (Math.random() - 0.5) * 1000
    }
    starsGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.8,
      sizeAttenuation: true,
    })
    const stars = new THREE.Points(starsGeometry, starsMaterial)
    scene.add(stars)
    camera.position.z = 10

    let animationId = 0
    const animate = () => {
      animationId = requestAnimationFrame(animate)
      stars.rotation.y += 0.00015
      stars.rotation.x += 0.00008
      renderer.render(scene, camera)
    }
    animate()

    const handleResize = () => {
      if (!mount) return
      camera.aspect = mount.clientWidth / mount.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mount.clientWidth, mount.clientHeight)
    }
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationId)
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement)
      }
      renderer.dispose()
      starsGeometry.dispose()
      starsMaterial.dispose()
    }
  }, [])

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 -z-10"
      style={{ pointerEvents: "none" }}
    />
  )
}

/* Floating Card */
function FloatingCard({
  card,
  position,
}: {
  card: Card
  position: {
    x: number
    y: number
    z: number
    rotationX: number
    rotationY: number
    rotationZ: number
  }
}) {
  const groupRef = useRef<THREE.Group>(null)
  const [hovered, setHovered] = useState(false)
  const { setSelectedCard, enableModal } = useCard()
  const texture = useLoader(THREE.TextureLoader, card.imageUrl)

  useFrame(({ camera }) => {
    if (groupRef.current) {
      groupRef.current.lookAt(camera.position)
    }
  })

  const handleClick = (e: any) => {
    e.stopPropagation()
    if (enableModal) {
      setSelectedCard(card)
    }
  }
  const handlePointerOver = (e: any) => {
    e.stopPropagation()
    setHovered(true)
    if (enableModal) {
      document.body.style.cursor = "pointer"
    }
  }
  const handlePointerOut = (e: any) => {
    e.stopPropagation()
    setHovered(false)
    if (enableModal) {
      document.body.style.cursor = "auto"
    }
  }

  const scale = hovered ? 1.15 : 1

  return (
    <group
      ref={groupRef}
      position={[position.x, position.y, position.z]}
      scale={[scale, scale, scale]}
    >
      {/* Solid white card backing for maximum logo visibility */}
      <mesh position={[0, 0, 0]}>
        <planeGeometry args={[3.8, 2.4]} />
        <meshStandardMaterial
          color="#ffffff"
          roughness={0.2}
          metalness={0.1}
          emissive={hovered ? new THREE.Color("#ffffff") : new THREE.Color("#f0f0f0")}
          emissiveIntensity={hovered ? 0.35 : 0.15}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Foreground transparent logo mesh rendered at full brightness */}
      <mesh
        onClick={handleClick}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        position={[0, 0, 0.01]}
      >
        <planeGeometry args={[3.4, 2.0]} />
        <meshBasicMaterial
          map={texture}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  )
}

/* Card Modal */
function CardModal() {
  const { selectedCard, setSelectedCard, enableModal } = useCard()
  const [isFavorited, setIsFavorited] = useState(false)
  const cardRef = useRef<HTMLDivElement | null>(null)

  if (!enableModal || !selectedCard) return null

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = (y - centerY) / 15
    const rotateY = (centerX - x) / 15
    cardRef.current.style.transition = "transform 0.1s ease-out"
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transition = "transform 0.5s ease-out"
      cardRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)"
    }
  }

  const toggleFavorite = () => setIsFavorited((v) => !v)
  const handleClose = () => setSelectedCard(null)
  const handleBackdropClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.target === e.currentTarget) handleClose()
  }

  const handleDownload = async () => {
    try {
      const res = await fetch(selectedCard.imageUrl)
      const blob = await res.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = `${selectedCard.title}.png`
      a.click()
      URL.revokeObjectURL(url)
    } catch {
      window.open(selectedCard.imageUrl, "_blank")
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
      onClick={handleBackdropClick}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative max-w-md w-full bg-gradient-to-b from-zinc-900 to-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
        style={{ transformStyle: "preserve-3d" }}
      >
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="aspect-[3/4] w-full overflow-hidden bg-black">
          <img
            src={selectedCard.imageUrl}
            alt={selectedCard.alt}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-5 space-y-4">
          <h3 className="text-xl font-semibold text-white">{selectedCard.title}</h3>
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white text-black font-medium hover:bg-white/90 transition"
            >
              <Download className="w-4 h-4" />
              Download
            </button>
            <button
              onClick={toggleFavorite}
              className={`p-2 rounded-lg border transition ${
                isFavorited
                  ? "bg-rose-500/20 border-rose-500/50 text-rose-400"
                  : "bg-white/5 border-white/10 text-white hover:bg-white/10"
              }`}
              aria-label="Favorite"
            >
              <Heart className={`w-5 h-5 ${isFavorited ? "fill-current" : ""}`} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

/* Card Galaxy */
function CardGalaxy() {
  const { cards } = useCard()

  const cardPositions = useMemo(() => {
    const positions: {
      x: number
      y: number
      z: number
      rotationX: number
      rotationY: number
      rotationZ: number
    }[] = []
    const numCards = cards.length
    const goldenRatio = (1 + Math.sqrt(5)) / 2

    for (let i = 0; i < numCards; i++) {
      const y = 1 - (i / (numCards - 1)) * 2
      const radiusAtY = Math.sqrt(Math.max(0, 1 - y * y))
      const theta = (2 * Math.PI * i) / goldenRatio
      const x = Math.cos(theta) * radiusAtY
      const z = Math.sin(theta) * radiusAtY
      
      // Set dynamic orbital radius to distribute cards beautifully
      const layerRadius = 14 + (i % 4) * 3

      positions.push({
        x: x * layerRadius,
        y: y * layerRadius * 0.75, // slightly compress vertically to look flatter like a galaxy disk
        z: z * layerRadius,
        rotationX: Math.atan2(z, Math.sqrt(x * x + y * y)),
        rotationY: Math.atan2(x, z),
        rotationZ: (Math.random() - 0.5) * 0.1,
      })
    }
    return positions
  }, [cards.length])

  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[10, 10, 10]} intensity={0.9} />
      <pointLight position={[-10, -10, -10]} intensity={0.6} color="#88d8ff" />
      <pointLight position={[0, 5, 15]} intensity={0.5} color="#ff99bb" />
      {cards.map((card, i) => (
        <Suspense key={card.id} fallback={null}>
          <FloatingCard card={card} position={cardPositions[i]} />
        </Suspense>
      ))}
    </>
  )
}

export default function StellarCardGallerySingle({
  cards,
  height = "h-[600px]",
  showTitle = false,
  enableModal = false,
}: {
  cards?: Card[]
  height?: string
  showTitle?: boolean
  enableModal?: boolean
} = {}) {
  return (
    <CardProvider cards={cards} enableModal={enableModal}>
      <div className={`relative w-full ${height} bg-transparent overflow-hidden`}>
        <StarfieldBackground />

        <Canvas
          camera={{ position: [0, 0, 26], fov: 60 }}
          className="absolute inset-0"
          style={{ background: "transparent" }}
        >
          <CardGalaxy />
          <OrbitControls
            enablePan={false}
            enableZoom={true}
            minDistance={15}
            maxDistance={50}
            autoRotate={true}
            autoRotateSpeed={0.5}
          />
        </Canvas>

        {enableModal && <CardModal />}

        {showTitle && (
          <div className="absolute top-6 left-1/2 -translate-x-1/2 text-center pointer-events-none z-10">
            <h1 className="text-2xl md:text-4xl font-bold text-white tracking-tight">
              3D Stellar Card Gallery
            </h1>
            <p className="mt-1 text-sm text-white/60">
              Drag to look around • Scroll to zoom • Click cards to view details
            </p>
          </div>
        )}
      </div>
    </CardProvider>
  )
}
