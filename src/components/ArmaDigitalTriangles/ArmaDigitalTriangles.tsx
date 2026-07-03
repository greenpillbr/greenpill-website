import { PARTICLE_IMAGES, asset } from '../../data/content'
import styles from './ArmaDigitalTriangles.module.css'

type Triangle = {
  src: (typeof PARTICLE_IMAGES)[number]
  top?: string
  left?: string
  right?: string
  bottom?: string
  width: number
  rotate: number
}

/** Decorative triangles around ArmaDigital — positions aligned with Framer ParticulasContainers. */
const triangles: Triangle[] = [
  /* top-left cluster */
  { src: PARTICLE_IMAGES[2], top: '6%', left: '2%', width: 51, rotate: 44 },
  { src: PARTICLE_IMAGES[3], top: '14%', left: '8%', width: 35, rotate: -61 },
  { src: PARTICLE_IMAGES[0], top: '22%', left: '4%', width: 27, rotate: -11 },
  { src: PARTICLE_IMAGES[1], top: '18%', left: '14%', width: 24, rotate: -60 },
  { src: PARTICLE_IMAGES[2], top: '28%', left: '10%', width: 39, rotate: 126 },
  { src: PARTICLE_IMAGES[0], top: '10%', left: '18%', width: 16, rotate: 51 },
  { src: PARTICLE_IMAGES[3], top: '32%', left: '16%', width: 37, rotate: 56 },
  { src: PARTICLE_IMAGES[0], top: '36%', left: '6%', width: 21, rotate: -11 },
  { src: PARTICLE_IMAGES[1], top: '42%', left: '12%', width: 17, rotate: 150 },
  { src: PARTICLE_IMAGES[2], top: '48%', left: '3%', width: 39, rotate: 82 },
  { src: PARTICLE_IMAGES[3], top: '52%', left: '18%', width: 44, rotate: 4 },
  { src: PARTICLE_IMAGES[1], top: '58%', left: '8%', width: 20, rotate: -55 },
  /* top-right cluster */
  { src: PARTICLE_IMAGES[0], top: '4%', right: '6%', width: 37, rotate: 61 },
  { src: PARTICLE_IMAGES[1], top: '12%', right: '14%', width: 21, rotate: 23 },
  { src: PARTICLE_IMAGES[1], top: '20%', right: '12%', width: 14, rotate: 115 },
  { src: PARTICLE_IMAGES[0], top: '16%', right: '22%', width: 21, rotate: -41 },
  { src: PARTICLE_IMAGES[0], top: '28%', right: '18%', width: 20, rotate: -11 },
  { src: PARTICLE_IMAGES[2], top: '24%', right: '8%', width: 51, rotate: 0 },
  { src: PARTICLE_IMAGES[3], top: '34%', right: '16%', width: 28, rotate: -61 },
  { src: PARTICLE_IMAGES[2], top: '38%', right: '4%', width: 39, rotate: 126 },
  { src: PARTICLE_IMAGES[0], top: '44%', right: '20%', width: 9, rotate: -11 },
  { src: PARTICLE_IMAGES[1], top: '48%', right: '10%', width: 17, rotate: 41 },
  { src: PARTICLE_IMAGES[2], top: '52%', right: '24%', width: 39, rotate: 82 },
  { src: PARTICLE_IMAGES[1], top: '56%', right: '14%', width: 22, rotate: 108 },
  { src: PARTICLE_IMAGES[3], top: '8%', right: '28%', width: 59, rotate: -61 },
]

export function ArmaDigitalTriangles() {
  return (
    <div className={styles.container} aria-hidden="true">
      {triangles.map((tri, index) => (
        <img
          key={index}
          src={asset(tri.src)}
          alt=""
          className={styles.triangle}
          style={{
            top: tri.top,
            left: tri.left,
            right: tri.right,
            bottom: tri.bottom,
            width: tri.width,
            transform: `rotate(${tri.rotate}deg)`,
          }}
        />
      ))}
    </div>
  )
}
