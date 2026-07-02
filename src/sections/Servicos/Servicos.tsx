import { SERVICE_CARDS, asset } from '../../data/content'
import styles from './Servicos.module.css'

export function Servicos() {
  return (
    <section id="servicos" className={styles.section}>
      <div className={`${styles.container} container`}>
        <h2 className="h2">escalar ações climáticas com começo, meio e entrega</h2>
        <div className={styles.grid}>
          {SERVICE_CARDS.map((card) => (
            <article key={card.title} className={styles.card}>
              <img src={asset(card.image)} alt="" className={styles.icon} loading="lazy" />
              <h3 className="h3">{card.title}</h3>
              <p className="p-lg">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
