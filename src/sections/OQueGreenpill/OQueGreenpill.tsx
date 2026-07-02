import { Ticker } from '../../components/Ticker/Ticker'
import { TICKER_IMAGES, asset } from '../../data/content'
import styles from './OQueGreenpill.module.css'

export function OQueGreenpill() {
  const row1 = TICKER_IMAGES.map(asset)
  const row2 = [...TICKER_IMAGES].reverse().map(asset)

  return (
    <section className={styles.section}>
      <div className={`${styles.container} container`}>
        <div className={styles.header}>
          <h2 className="h1">o que é a greenpill brasil?</h2>
          <p className="p-lg">
            Uma comunidade aberta que une inovação, governança coletiva e educação para transformar
            ideias em impacto real.
          </p>
        </div>
      </div>
      <Ticker items={row1} direction="left" itemHeight={280} />
      <Ticker items={row2} direction="right" itemHeight={280} />
    </section>
  )
}
