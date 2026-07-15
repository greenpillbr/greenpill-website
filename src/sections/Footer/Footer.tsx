import { LINKS } from '../../data/content'
import styles from './Footer.module.css'

const socialLinks = [
  { label: 'LinkedIn', href: LINKS.linkedin },
  { label: 'X', href: LINKS.twitter },
  { label: 'Instagram', href: LINKS.instagram },
  { label: 'YouTube', href: LINKS.youtube },
]

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>
        <div className={styles.brand}>
          <div className={styles.logo} aria-label="GreenPill Brasil">
            GREENPILL BRASIL
          </div>
          <p>A revolução será regenerativa</p>
          <div className={styles.social}>
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer noopener">
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className={styles.columns}>
          <div>
            <h3>Home</h3>
            <ul>
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#projetos">Projetos</a>
              </li>
              <li>
                <a href="#servicos">Serviços</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>recursos</h3>
            <ul>
              <li>
                <a href="#faq">FAQ</a>
              </li>
              <li>
                <a href={LINKS.charmverse} target="_blank" rel="noreferrer noopener">
                  Comunidade
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Contato</h3>
            <ul>
              <li>
                <a href={LINKS.calendly} target="_blank" rel="noreferrer noopener">
                  Agendar acolhimento
                </a>
              </li>
              <li>
                <a href={LINKS.telegram} target="_blank" rel="noreferrer noopener">
                  Telegram
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3>LEGAL</h3>
            <ul>
              <li>
                <a href="#hero">Termos</a>
              </li>
              <li>
                <a href="#hero">Privacidade</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.powered}>
          <span>Designed by Mainnet.</span>
          <span>GreenPill Brasil - 2026</span>
          <span>
            Desenvolvido por{' '}
            <a href="https://raduke.tech" target="_blank" rel="noreferrer noopener">
              raduke.tech
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
