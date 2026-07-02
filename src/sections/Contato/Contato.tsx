import { Button } from '../../components/Button/Button'
import { Astronaut } from '../../components/Astronaut/Astronaut'
import { LINKS, asset } from '../../data/content'
import styles from './Contato.module.css'

export function Contato() {
  return (
    <section id="contato" className={styles.section}>
      <div className={`${styles.container} container`}>
        <div className={styles.visual}>
          <Astronaut />
          <img
            src={asset('qNgNaYpuyAcE2k3pX7rDJdS0Oo.svg')}
            alt=""
            className={`${styles.decor} ${styles.decorTop}`}
            aria-hidden="true"
          />
        </div>
        <div className={styles.content}>
          <h2 className="h1">Conecte-se com a comunidade</h2>
          <p className="p-lg">
            Participe dos nossos grupos e canais oficiais para trocar ideias, tirar dúvidas e
            acompanhar as novidades em tempo real. Nossa comunidade está sempre aberta para receber
            novos membros e valoriza a diversidade de perspectivas.
          </p>
          <div className={styles.actions}>
            <Button href={LINKS.calendly}>AGENDE UM ACOLHIMENTO</Button>
            <Button href={LINKS.telegram}>telegram</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
