import { motion } from 'framer-motion'
import { asset } from '../../data/content'
import styles from './FloatingLeaves.module.css'

interface FloatingLeavesProps {
  variant?: 'left' | 'right' | 'both'
}

export function FloatingLeaves({ variant = 'both' }: FloatingLeavesProps) {
  return (
    <>
      {(variant === 'left' || variant === 'both') && (
        <motion.img
          src={asset('Bho1L9RlaE9jYDOgWEarnx2QG88.svg')}
          alt=""
          className={`${styles.leaf} ${styles.leafLeft}`}
          animate={{ y: [0, -12, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}
      {(variant === 'right' || variant === 'both') && (
        <motion.img
          src={asset('Ld8uU8jv3q0t5cP9ZRSc709jzo.svg')}
          alt=""
          className={`${styles.leaf} ${styles.leafRight}`}
          animate={{ y: [0, 14, 0], rotate: [0, -4, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}
    </>
  )
}
