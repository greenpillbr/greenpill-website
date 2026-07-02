import { motion } from 'framer-motion'
import styles from './Ticker.module.css'

interface TickerProps {
  items: string[]
  direction?: 'left' | 'right'
  speed?: number
  itemHeight?: number
  gap?: number
  renderItem?: (src: string, index: number) => React.ReactNode
}

export function Ticker({
  items,
  direction = 'left',
  speed = 45,
  itemHeight = 280,
  gap = 16,
  renderItem,
}: TickerProps) {
  const doubled = [...items, ...items]
  const duration = Math.max(items.length * (speed / 10), 20)

  return (
    <div className={styles.wrapper} style={{ height: itemHeight }}>
      <motion.div
        className={styles.track}
        style={{ gap }}
        animate={{ x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={{ duration, repeat: Infinity, ease: 'linear' }}
      >
        {doubled.map((item, index) => (
          <div key={`${item}-${index}`} className={styles.item}>
            {renderItem ? renderItem(item, index) : <img src={item} alt="" loading="lazy" />}
          </div>
        ))}
      </motion.div>
    </div>
  )
}
