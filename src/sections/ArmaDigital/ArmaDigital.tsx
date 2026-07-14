import { ArmaDigitalTriangles } from '../../components/ArmaDigitalTriangles/ArmaDigitalTriangles'
import { Circulo } from '../../components/Circulo/Circulo'
import styles from './ArmaDigital.module.css'

export function ArmaDigital() {
  return (
    <section className={styles.section}>
      <ArmaDigitalTriangles />
      <div className={`${styles.container} container`}>
        <div className={styles.header}>
          <h2 className="h1">e para combatê-la usaremos uma ferramenta digital</h2>
          <p className="p-lg">
            A Web3 e as cryptos não são só sobre dinheiro — são sobre coordenação, transparência e
            ação coletiva.
          </p>
        </div>
      </div>
      <div className={styles.circuloAnchor}>
        <Circulo />
      </div>
      <div className={styles.bar} />
    </section>
  )
}
