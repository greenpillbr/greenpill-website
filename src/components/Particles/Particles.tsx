import { motion } from 'framer-motion'
import { PARTICLE_IMAGES, asset } from '../../data/content'
import styles from './Particles.module.css'

const particles = [
  { src: PARTICLE_IMAGES[0], top: '12%', left: '8%', size: 24, delay: 0 },
  { src: PARTICLE_IMAGES[1], top: '22%', right: '12%', size: 18, delay: 0.4 },
  { src: PARTICLE_IMAGES[2], top: '55%', left: '6%', size: 40, delay: 0.8 },
  { src: PARTICLE_IMAGES[3], top: '68%', right: '18%', size: 28, delay: 1.2 },
  { src: PARTICLE_IMAGES[0], top: '35%', left: '18%', size: 16, delay: 1.6 },
  { src: PARTICLE_IMAGES[1], top: '78%', left: '22%', size: 20, delay: 2 },
  { src: PARTICLE_IMAGES[2], top: '18%', right: '28%', size: 36, delay: 2.4 },
  { src: PARTICLE_IMAGES[3], top: '48%', right: '6%', size: 22, delay: 2.8 },
]

export function Particles() {
  return (
    <div className={styles.container} aria-hidden="true">
      {particles.map((particle, index) => (
        <motion.img
          key={index}
          src={asset(particle.src)}
          alt=""
          className={styles.particle}
          style={{
            top: particle.top,
            left: particle.left,
            right: particle.right,
            width: particle.size,
          }}
          animate={{ y: [0, -10, 0], opacity: [0.7, 1, 0.7] }}
          transition={{
            duration: 4 + (index % 3),
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
