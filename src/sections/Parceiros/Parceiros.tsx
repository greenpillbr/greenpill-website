import { Ticker } from '../../components/Ticker/Ticker'
import { PARTNER_LOGOS, asset } from '../../data/content'
import styles from './Parceiros.module.css'

export function Parceiros() {
  const logos = PARTNER_LOGOS.map(asset)

  return (
    <section className={styles.section}>
      <div className={`${styles.container} container`}>
        <div className={styles.header}>
          <h2 className="h1">parceiros</h2>
          <p className="p-lg">
            Nossos projetos incentivam a inovação e a colaboração para um futuro mais equilibrado e
            justo.
          </p>
        </div>
        <Ticker
          items={logos}
          direction="left"
          speed={100}
          itemHeight={58}
          gap={40}
          renderItem={(src) => <img src={src} alt="" className={styles.logo} loading="lazy" />}
        />
      </div>
    </section>
  )
}
