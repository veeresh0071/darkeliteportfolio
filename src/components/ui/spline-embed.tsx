import { useState } from 'react'
import { motion } from 'framer-motion'

interface SplineEmbedProps {
  sceneId: string        // Just the ID part, e.g. "kZDDjO5HuC9GUETO"
  className?: string
}

function SplineLoader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <motion.div
          className="w-16 h-16 rounded-full border-2 border-primary/30 border-t-primary"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
        <span className="font-mono text-[10px] uppercase tracking-widest text-primary/50">
          Loading 3D Scene…
        </span>
      </div>
    </div>
  )
}

export function SplineEmbed({ sceneId, className = '' }: SplineEmbedProps) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Loading spinner shown until iframe fires onLoad */}
      {!loaded && <SplineLoader />}

      <motion.iframe
        src={`https://my.spline.design/${sceneId}/`}
        frameBorder="0"
        width="100%"
        height="100%"
        title="Interactive 3D Robot"
        onLoad={() => setLoaded(true)}
        style={{
          border: 'none',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.6s ease',
          background: 'transparent',
        }}
        // Allow full pointer interactivity inside the iframe
        allow="autoplay; fullscreen"
        className="w-full h-full"
      />
    </div>
  )
}
