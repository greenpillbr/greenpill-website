import { Button } from '../../components/Button/Button'
import { Skater } from '../../components/Skater/Skater'
import { LINKS, asset } from '../../data/content'
import styles from './Contato.module.css'

const roses = [
  styles.roseTopLeft,
  styles.roseTopRight,
  styles.roseBottomLeft,
  styles.roseBottomRight,
] as const

export function Contato() {
  return (
    <section id="contato" className={styles.section}>
      <div className={`${styles.container} container`}>
        {roses.map((roseClass) => (
          <img
            key={roseClass}
            src={asset('diamondsRose.svg')}
            alt=""
            className={`${styles.decor} ${roseClass}`}
            aria-hidden="true"
          />
        ))}
        <div className={styles.visual}>
          <Skater />
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
