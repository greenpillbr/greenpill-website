import { motion } from 'framer-motion'
import { PROBLEM_CARDS, asset } from '../../data/content'
import styles from './Colapso.module.css'

export function Colapso() {
  return (
    <section className={styles.section}>
      <img
        src={asset('root-stroke.svg')}
        alt=""
        aria-hidden="true"
        className={`${styles.root} ${styles.rootTopRight}`}
      />
      <img
        src={asset('root-stroke.svg')}
        alt=""
        aria-hidden="true"
        className={`${styles.root} ${styles.rootBottomLeft}`}
      />
      <img
        src={asset('Bho1L9RlaE9jYDOgWEarnx2QG88.svg')}
        alt=""
        aria-hidden="true"
        className={`${styles.root} ${styles.rootBottomRight}`}
      />

      <div className={`${styles.container} container`}>
        <div className={styles.header}>
          <h2 className="h1">O mundo caminha para o colapso</h2>
          <p className="p-lg">
            O modo de produção mundial não é sustentável e os sinais da degradação social e ambiental são cada vez mais evidentes.
          </p>
        </div>
        <div className={styles.grid}>
          {PROBLEM_CARDS.map((card, index) => (
            <motion.article
              key={card.tag}
              className={styles.card}
              initial={{ scale: 0.7, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false, amount: 0.35 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <img src={asset(card.image)} alt="" className={styles.image} loading="lazy" />
              <div className={styles.body}>
                <span className={styles.tag}>{card.tag}</span>
                <h3 className="h4">{card.stat}</h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
