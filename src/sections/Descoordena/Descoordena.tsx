import { PROBLEM_CARDS, asset } from '../../data/content'
import { FloatingLeaves } from '../../components/FloatingLeaves/FloatingLeaves'
import styles from './Descoordena.module.css'

export function Descoordena() {
  return (
    <section className={styles.section}>
      <FloatingLeaves variant="right" />
      <div className={`${styles.container} container`}>
        <div className={styles.header}>
          <h2 className="h1">descoordenação é a raiz dos males</h2>
          <p className="p-lg">
            Diversos problemas de descoordenação que ainda atingem a maior parte da população sem
            previsão de diminuição das médias globais desses dados tristes.
          </p>
        </div>
        <div className={styles.grid}>
          {PROBLEM_CARDS.map((card) => (
            <article key={card.tag} className={styles.card}>
              <img src={asset(card.image)} alt="" className={styles.image} loading="lazy" />
              <div className={styles.body}>
                <span className={styles.tag}>{card.tag}</span>
                <h3 className="h4">{card.stat}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
