import { Accordion } from '../../components/Accordion/Accordion'
import { FAQ_ITEMS } from '../../data/content'
import styles from './Faq.module.css'

export function Faq() {
  return (
    <section id="faq" className={styles.section}>
      <div className={`${styles.container} container`}>
        <div className={styles.intro}>
          <h2 className="h1">Perguntas Frequentes</h2>
          <p className="p-md">
            Fique por dentro das últimas novidades, insights e reflexões sobre a regeneração
            sustentável, inovação e os projetos que estamos desenvolvendo.
          </p>
        </div>
        <Accordion items={[...FAQ_ITEMS]} />
      </div>
    </section>
  )
}
