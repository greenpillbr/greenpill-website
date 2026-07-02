import { LEVEL_CARDS } from '../../data/content'
import styles from './Participe.module.css'

export function Participe() {
  return (
    <section className={styles.section}>
      <div className={`${styles.container} container`}>
        <h2 className="h1">PARTICIPE DO MOVIMENTO</h2>
        <div className={styles.grid}>
          {LEVEL_CARDS.map((card) => (
            <article
              key={card.level}
              className={styles.card}
              style={{ backgroundColor: card.color }}
            >
              <h3 className="h3">{card.level}</h3>
              <ul className={styles.list}>
                {card.items.map((item) => (
                  <li key={item} className="h6">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
