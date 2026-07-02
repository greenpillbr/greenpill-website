import { Button } from '../../components/Button/Button'
import { Ticker } from '../../components/Ticker/Ticker'
import { LINKS, TICKER_IMAGES, asset } from '../../data/content'
import styles from './FaAParte.module.css'

export function FaAParte() {
  const items = TICKER_IMAGES.map(asset)

  return (
    <section className={styles.section}>
      <div className={`${styles.container} container`}>
        <h2 className="h2">E se seu projeto se encaixa nisso</h2>
        <Ticker items={items} direction="left" itemHeight={320} speed={40} />
        <div className={styles.cta}>
          <h3 className="h2">faça parte da greenpill brasil</h3>
          <Button href={LINKS.charmverse}>Começar jornada</Button>
        </div>
      </div>
    </section>
  )
}
