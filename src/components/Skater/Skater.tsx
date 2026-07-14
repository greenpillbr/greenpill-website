import { asset } from '../../data/content'
import styles from './Skater.module.css'

export function Skater() {

  return (
      <img
        src={asset('skater.svg')}
        alt="Skater GreenPill"
        className={styles.image}
      />
  )
}
