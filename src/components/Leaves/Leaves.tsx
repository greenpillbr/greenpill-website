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
  flip?: boolean
}

const LEAVES: LeafDef[] = [
  // Left edge, top to bottom
  { shape: 'cluster', className: styles.leftCluster, width: 296, rotate: 0, sway: -4, duration: 8.5 },
  { shape: 'fan', className: styles.leftFan, width: 176, rotate: 119, sway: 3, duration: 9 },
  { shape: 'wide', className: styles.leftWide, width: 328, rotate: 0, sway: 5, duration: 7 },
  { shape: 'tall', className: styles.leftTall, width: 130, rotate: 5, sway: -3, duration: 8 },
  { shape: 'branchLeft', className: styles.leftBranch, width: 117, rotate: 0, sway: 4, duration: 7.5 },
  { shape: 'pinwheelLeft', className: styles.leftPinwheel, width: 210, rotate: 0, sway: -3, duration: 9.5 },

  // Right edge, top to bottom
  { shape: 'fan', className: styles.rightFan, width: 176, rotate: 180, sway: -4, duration: 7.5, flip: true },
  { shape: 'cluster', className: styles.rightCluster, width: 296, rotate: 0, sway: 4, duration: 7, flip: true },
  { shape: 'wide', className: styles.rightWide, width: 328, rotate: 14, sway: -5, duration: 8 },
  { shape: 'tall', className: styles.rightTall, width: 130, rotate: -13, sway: 3, duration: 9 },
  { shape: 'branchRight', className: styles.rightBranch, width: 121, rotate: 180, sway: -4, duration: 8 },
  { shape: 'pinwheelRight', className: styles.rightPinwheel, width: 218, rotate: 180, sway: 3, duration: 9 },
]

export function Leaves() {
  return (
    <div className={styles.container} aria-hidden="true">
      {LEAVES.map((leaf, index) => (
        <motion.div
          key={index}
          className={`${styles.leaf} ${leaf.className}`}
          style={{ width: leaf.width, scaleX: leaf.flip ? -1 : 1 }}
          animate={{
            y: [0, leaf.sway * -2, 0],
            rotate: [leaf.rotate, leaf.rotate + leaf.sway, leaf.rotate],
          }}
          transition={{ duration: leaf.duration, repeat: Infinity, ease: 'easeInOut' }}
          dangerouslySetInnerHTML={{ __html: LEAF_SHAPES[leaf.shape] }}
        />
      ))}
    </div>
  )
}
