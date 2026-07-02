import { Button } from '../../components/Button/Button'
import { FloatingLeaves } from '../../components/FloatingLeaves/FloatingLeaves'
import { LINKS } from '../../data/content'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <FloatingLeaves />
      <div className={`${styles.content} container`}>
        <div className={styles.textBlock}>
          <h1 className="h0">você só tem a pílula verde pra tomar</h1>
          <p className="p-lg">
            Há uma necessidade urgente para ações que busquem regenerar o mundo, faça sua parte e entre
            para nossa comunidade.
          </p>
          <div className={styles.actions}>
            <Button href={LINKS.charmverse} variant="primary">
              Começar jornada
            </Button>
            <Button href={LINKS.calendly}>marcar acolhimento</Button>
          </div>
        </div>
      </div>
      <svg className={styles.underline} viewBox="-1 -1 578 46" fill="none" aria-hidden="true">
        <path
          d="M569.082 8.74524C577.821 8.70058 577.995 23.1433 569.258 23.3098C494.985 24.5778 420.711 25.7693 346.435 26.8914C397.698 29.4508 448.96 32.0439 500.22 34.6729C523.107 35.8467 545.994 37.0274 568.881 38.2151C569.622 38.2537 570.321 38.5811 570.823 39.1298C571.325 39.6784 571.59 40.4028 571.558 41.1444C571.526 41.8861 571.201 42.5858 570.654 43.0897C570.107 43.5936 569.382 43.8602 568.64 43.8353C545.736 43.0639 522.831 42.2857 499.927 41.5004C388.018 37.6634 276.116 33.6608 164.22 29.4925C160.992 29.3542 159.301 26.855 159.121 24.2187C130.178 23.9346 101.235 23.552 72.2912 23.0686C49.3724 22.6858 26.4533 22.24 3.53378 21.7322C2.79795 21.7158 2.09096 21.4211 1.568 20.8983C1.04501 20.3755 0.749244 19.6698 0.745482 18.9342C0.741784 18.1987 1.02977 17.4901 1.54727 16.9621C2.06488 16.4338 2.76932 16.1322 3.50503 16.1082C26.4181 15.366 49.3317 14.6862 72.2454 14.069C163.9 11.6002 255.56 10.1315 347.226 9.6627C421.177 9.28451 495.129 8.9788 569.082 8.74524Z"
          fill="#FFCC00"
        />
      </svg>
    </section>
  )
}
