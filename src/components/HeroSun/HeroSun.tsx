import { motion } from 'framer-motion'
import type { CSSProperties } from 'react'
import { SUN_SHAPES, type SunLayer } from '../../data/sunShapes'
import styles from './HeroSun.module.css'

interface LayerDef {
  key: SunLayer
  width: string
  rotate?: number
  duration?: number
}

// Back-to-front, matching the Framer group (diamond backing -> disc -> bursts -> capsule).
// Diamond and disc stay static; only the two sunbursts spin (opposite directions).
const LAYERS: LayerDef[] = [
  { key: 'rays', width: '100%' },
  { key: 'ring', width: '45%' },
  { key: 'burst', width: '48.5%', rotate: 360, duration: 46 },
  { key: 'glow', width: '63%', rotate: -360, duration: 68 },
  { key: 'core', width: '21%' },
]

export function HeroSun() {
  return (
    <div className={styles.wrapper} aria-hidden="true">
      {LAYERS.map((layer) => (
        <motion.div
          key={layer.key}
          className={styles.layer}
          style={{ '--layer-width': layer.width } as CSSProperties}
          animate={layer.rotate !== undefined ? { rotate: layer.rotate } : undefined}
          transition={
            layer.rotate !== undefined
              ? { duration: layer.duration, repeat: Infinity, ease: 'linear' }
              : undefined
          }
          dangerouslySetInnerHTML={{ __html: SUN_SHAPES[layer.key] }}
        />
      ))}
    </div>
  )
}
