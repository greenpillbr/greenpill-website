import { useEffect, useRef } from 'react'
import { useMotionValue } from 'framer-motion'

interface RepulsionOptions {
  radiusMax?: number
  radiusMin?: number
  strength?: number
  smoothing?: number
  bounce?: number
}

export function useRepulsionEffect(options: RepulsionOptions = {}) {
  const {
    radiusMax = 150,
    radiusMin = 30,
    strength = 100,
    smoothing = 0.12,
    bounce = 0.08,
  } = options

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      if (!ref.current) return

      const rect = ref.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const dx = e.clientX - centerX
      const dy = e.clientY - centerY
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < radiusMax && distance > radiusMin) {
        const angle = Math.atan2(dy, dx)
        const t = 1 - (distance - radiusMin) / (radiusMax - radiusMin)
        const force = t * strength
        const tx = -Math.cos(angle) * force
        const ty = -Math.sin(angle) * force
        x.set(x.get() + (tx - x.get()) * smoothing)
        y.set(y.get() + (ty - y.get()) * smoothing)
      } else {
        x.set(x.get() + (0 - x.get()) * bounce)
        y.set(y.get() + (0 - y.get()) * bounce)
      }
    }

    window.addEventListener('mousemove', handle)
    return () => window.removeEventListener('mousemove', handle)
  }, [bounce, radiusMax, radiusMin, smoothing, strength, x, y])

  return { ref, x, y }
}
