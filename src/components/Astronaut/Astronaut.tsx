import { motion } from 'framer-motion'
import { useRepulsionEffect } from '../../hooks/useRepulsionEffect'
import { asset } from '../../data/content'
import styles from './Astronaut.module.css'

export function Astronaut() {
  const { ref, x, y } = useRepulsionEffect()

  return (
    <motion.div ref={ref} className={styles.wrapper} style={{ x, y }}>
      <motion.img
        src={asset('4SC13C3XcBANtkONRYcfz8v6fzg.svg')}
        alt="Astronauta GreenPill"
        className={styles.image}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.div>
  )
}
