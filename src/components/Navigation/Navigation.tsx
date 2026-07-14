import { useState } from 'react'
import { LINKS, NAV_ITEMS, asset } from '../../data/content'
import styles from './Navigation.module.css'

function ChevronDown() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
      <path
        d="M3 5.5L7 9.5L11 5.5"
        fill="transparent"
        stroke="rgb(0, 0, 0)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M5 12H19M19 12L13 6M19 12L13 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Navigation() {
  const [open, setOpen] = useState(false)

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Principal">
        <a href="#hero" className={styles.logoLink} onClick={() => setOpen(false)}>
          <img
            src={asset('greenpill-logo.svg')}
            alt="GREENPILL™ BRASIL"
            className={styles.logo}
            width={83}
            height={33}
          />
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

        <div id="primary-menu" className={`${styles.menu} ${open ? styles.menuOpen : ''}`}>
          <ul className={styles.links}>
            {NAV_ITEMS.map((item) => {
              const hint = 'hint' in item ? item.hint : undefined
              const hintId = hint ? `nav-hint-${item.label}` : undefined

              return (
                <li
                  key={item.label}
                  className={hint ? styles.linkItem : undefined}
                >
                  <a
                    href={item.href}
                    className={styles.link}
                    onClick={() => setOpen(false)}
                    aria-describedby={hintId}
                    {...(item.href.startsWith('http')
                      ? { target: '_blank', rel: 'noreferrer noopener' }
                      : {})}
                  >
                    <span>{item.label}</span>
                    {item.hasDropdown && (
                      <span className={styles.chevron}>
                        <ChevronDown />
                      </span>
                    )}
                  </a>
                  {hint && (
                    <span id={hintId} role="tooltip" className={styles.hint}>
                      {hint}
                    </span>
                  )}
                </li>
              )
            })}
          </ul>
        </div>

        <a
          href={LINKS.calendly}
          className={styles.cta}
          target="_blank"
          rel="noreferrer noopener"
        >
          <span>Fale conosco</span>
          <ArrowRight />
        </a>
      </nav>
    </header>
  )
}
