import { Button } from '../../components/Button/Button'
import { FloatingLeaves } from '../../components/FloatingLeaves/FloatingLeaves'
import { LINKS, PROJECT_CARDS, asset } from '../../data/content'
import styles from './Projetos.module.css'

export function Projetos() {
  return (
    <section id="projetos" className={styles.section}>
      <FloatingLeaves />
      <div className={`${styles.container} container`}>
        <div className={styles.header}>
          <h2 className="h1">ENERGIZE Projetos Regenerativos</h2>
          <p className="p-lg">
            Na Greenpill Brasil, usamos tecnologia, colaboração e inovação para criar impacto social
            e ambiental positivo.
          </p>
          <Button href={LINKS.calendly}>AGENDE UM ACOLHIMENTO</Button>
        </div>
        <div className={styles.grid}>
          {PROJECT_CARDS.map((card) => (
            <article key={card.title} className={styles.card}>
              <img src={asset(card.image)} alt="" className={styles.image} loading="lazy" />
              <p className="p-lg">{card.title}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
