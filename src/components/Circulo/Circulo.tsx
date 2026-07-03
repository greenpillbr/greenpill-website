import { asset } from '../../data/content'
import styles from './Circulo.module.css'

export function Circulo() {
  return (
    <div className={styles.root} aria-hidden="true">
      <div className={styles.ringOuter} />
      <div className={styles.ringMid} />
      <div className={styles.ringInner} />
      <img
        className={`${styles.layer} ${styles.pontilhado}`}
        src={asset('circulo-pontilhado.svg')}
        alt=""
      />
      <img className={`${styles.layer} ${styles.mundo}`} src={asset('circulo-mundo.svg')} alt="" />
      <img
        className={`${styles.layer} ${styles.labelsPrimary}`}
        src={asset('qTD6HVWX2kKHX7RXKJxyzPQUBNA.svg')}
        alt=""
      />
      <img
        className={`${styles.layer} ${styles.labelsSecondary}`}
        src={asset('eyLX4foZDsM7ZsEBePePR6HPdiQ.svg')}
        alt=""
      />
      <img
        className={`${styles.layer} ${styles.burst}`}
        src={asset('ns8AQym3lp3rqDTsbChEIOdQk8.svg')}
        alt=""
      />
    </div>
  )
}
