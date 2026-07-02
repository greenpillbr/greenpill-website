import { motion } from 'framer-motion'
import styles from './HeroSun.module.css'

const RAY_COUNT = 32

function Rays() {
  const rays = Array.from({ length: RAY_COUNT }, (_, i) => {
    const angle = (360 / RAY_COUNT) * i
    return (
      <rect
        key={i}
        x={248}
        y={18}
        width={4}
        height={70}
        rx={2}
        fill="#FFCC00"
        transform={`rotate(${angle} 250 250)`}
      />
    )
  })
  return <>{rays}</>
}

export function HeroSun() {
  return (
    <div className={styles.wrapper} aria-hidden="true">
      <motion.svg
        className={styles.sun}
        viewBox="0 0 500 500"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      >
        <Rays />
      </motion.svg>

      <div className={styles.disc}>
        <div className={styles.brasil} />
        <div className={styles.pill}>
          <span className={styles.pillGreen} />
          <span className={styles.pillWhite} />
        </div>
      </div>
    </div>
  )
}
