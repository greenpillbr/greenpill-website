import type { ReactNode } from 'react'
import styles from './Button.module.css'

type ButtonVariant = 'primary' | 'secondary'

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: ButtonVariant
  onClick?: () => void
  className?: string
}

export function Button({
  children,
  href,
  variant = 'secondary',
  onClick,
  className = '',
}: ButtonProps) {
  const classes = `${styles.button} ${styles[variant]} ${className}`.trim()

  if (href) {
    const external = href.startsWith('http')
    return (
      <a
        className={classes}
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer noopener' : undefined}
      >
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
    </button>
  )
}
