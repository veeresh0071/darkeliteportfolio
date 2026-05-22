import { Suspense, lazy, useEffect, useState, Component, type ReactNode, type ErrorInfo } from 'react'

// Lazy-load the heavy Spline runtime — only in the browser
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

function SplineLoader() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <span className="spline-loader" />
    </div>
  )
}

function SplineFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center opacity-40">
      <div className="text-center">
        <div
          className="w-32 h-32 mx-auto rounded-full border border-primary/30 animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(220,38,38,0.15) 0%, transparent 70%)',
          }}
        />
      </div>
    </div>
  )
}

// Error boundary to catch Spline's internal throw-on-error pattern
interface ErrorBoundaryState { hasError: boolean }
class SplineErrorBoundary extends Component<{ children: ReactNode; fallback: ReactNode }, ErrorBoundaryState> {
  constructor(props: { children: ReactNode; fallback: ReactNode }) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }
  componentDidCatch(error: Error, info: ErrorInfo) {
    // Silently swallow Spline load errors so the page doesn't crash
    console.warn('[SplineScene] 3D scene failed to load:', error.message, info)
  }
  render() {
    if (this.state.hasError) return this.props.fallback
    return this.props.children
  }
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  // Guard: do not render Spline at all until the component has mounted in the browser.
  // This prevents any WebGL / window access during SSR or hydration.
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <SplineLoader />

  return (
    <SplineErrorBoundary fallback={<SplineFallback />}>
      <Suspense fallback={<SplineLoader />}>
        <Spline scene={scene} className={className} />
      </Suspense>
    </SplineErrorBoundary>
  )
}
