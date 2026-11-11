import { useState } from 'react'
import { Star } from 'lucide-react'
import GoogleIcon from './GoogleIcon'
import styles from './GoogleReview.module.css'

type Props = { name: string; text: string; photo?: string; when?: string; stars?: number }

const LIMIT = 220

export default function GoogleReview({ name, text, photo, when, stars = 5 }: Props) {
  const [open, setOpen] = useState(false)
  const initial = name.trim().charAt(0).toUpperCase()
  const long = text.length > LIMIT

  return (
    <figure className={styles.card}>
      <div className={styles.head}>
        {photo ? (
          <img className={styles.avatar} src={photo} alt="" width={44} height={44} loading="lazy" decoding="async" />
        ) : (
          <span className={styles.initial} aria-hidden="true">{initial}</span>
        )}
        <div className={styles.who}>
          <figcaption>{name}</figcaption>
          {when && <small>{when}</small>}
        </div>
        <GoogleIcon size={22} />
      </div>
      <div className={styles.stars} role="img" aria-label={`${stars} de 5 estrelas`}>
        {[0, 1, 2, 3, 4].map((i) => (
          <Star key={i} size={16} fill={i < stars ? 'currentColor' : 'none'} />
        ))}
      </div>
      <blockquote className={`${styles.text} ${long && !open ? styles.clamp : ''}`}>{text}</blockquote>
      {long && (
        <button type="button" className={styles.toggle} onClick={() => setOpen(!open)}>
          {open ? 'Ler menos' : 'Ler mais'}
        </button>
      )}
    </figure>
  )
}