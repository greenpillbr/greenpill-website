import { useState } from 'react'
import { NAV_ITEMS } from '../../data/content'
import styles from './Navigation.module.css'

export function Navigation() {
  const [open, setOpen] = useState(false)

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`} aria-label="Principal">
        <a href="#hero" className={styles.logo} onClick={() => setOpen(false)}>
          GREENPILL BRASIL
        </a>

        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={open}
          aria-controls="primary-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span className={styles.menuIcon} data-open={open} />
        </button>

        <ul id="primary-menu" className={`${styles.links} ${open ? styles.linksOpen : ''}`}>
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
