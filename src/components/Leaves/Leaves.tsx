import { motion } from 'framer-motion'
import { LEAF_SHAPES, type LeafShape } from '../../data/leafShapes'
import styles from './Leaves.module.css'

interface LeafDef {
  shape: LeafShape
  className: string
  width: number
  rotate: number
  sway: number
  duration: number
}

const LEAVES: LeafDef[] = [
  { shape: 'cluster', className: styles.leafTopRight, width: 296, rotate: 0, sway: 4, duration: 7 },
  { shape: 'wide', className: styles.leafRightMid, width: 328, rotate: 14, sway: -5, duration: 8 },
  { shape: 'tall', className: styles.leafRightLow, width: 130, rotate: -13, sway: 3, duration: 9 },
  { shape: 'small', className: styles.leafRightTop, width: 176, rotate: 8, sway: -4, duration: 7.5 },
  { shape: 'cluster', className: styles.leafLeftMid, width: 296, rotate: 0, sway: -4, duration: 8.5 },
  { shape: 'wide', className: styles.leafLeftLow, width: 328, rotate: 0, sway: 5, duration: 7 },
  { shape: 'small', className: styles.leafLeftTop, width: 176, rotate: 29, sway: 3, duration: 9 },
  { shape: 'tall', className: styles.leafLeftEdge, width: 130, rotate: 5, sway: -3, duration: 8 },
]

export function Leaves() {
  return (
    <div className={styles.container} aria-hidden="true">
      {LEAVES.map((leaf, index) => (
        <motion.div
          key={index}
          className={`${styles.leaf} ${leaf.className}`}
          style={{ width: leaf.width, rotate: leaf.rotate }}
          animate={{ y: [0, leaf.sway * -2, 0], rotate: [leaf.rotate, leaf.rotate + leaf.sway, leaf.rotate] }}
          transition={{ duration: leaf.duration, repeat: Infinity, ease: 'easeInOut' }}
          dangerouslySetInnerHTML={{ __html: LEAF_SHAPES[leaf.shape] }}
        />
      ))}
    </div>
  )
}
