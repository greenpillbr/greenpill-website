import { Particles } from '../../components/Particles/Particles'
import styles from './ArmaDigital.module.css'

export function ArmaDigital() {
  return (
    <section className={styles.section}>
      <Particles />
      <div className={`${styles.container} container`}>
        <div className={styles.header}>
          <h2 className="h1">e para combatê-la usaremos uma ferramenta digital</h2>
          <p className="p-lg">
            A Web3 e as cryptos não são só sobre dinheiro — são sobre coordenação, transparência e
            ação coletiva.
          </p>
        </div>
        <div className={styles.circle} aria-hidden="true">
          <div className={styles.ring} />
          <div className={styles.ringInner} />
          <div className={styles.core}>WEB3</div>
        </div>
      </div>
      <div className={styles.bar} />
    </section>
  )
}
