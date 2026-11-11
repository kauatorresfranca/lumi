import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { treatments, type Treatment, type TeamKey } from '../../data/treatments'
import { meta } from '../../data/treatmentMeta'
import styles from './TreatmentCards.module.css'

type Props = { dentist: TeamKey; featured: string[] }

export default function TreatmentCards({ dentist, featured }: Props) {
  const mine = treatments.filter((t) => t.dentists.includes(dentist))
  const main = featured
    .map((slug) => mine.find((t) => t.slug === slug))
    .filter((t): t is Treatment => Boolean(t))
  const others = mine.filter((t) => !featured.includes(t.slug))

  return (
    <>
      <div className={styles.grid}>
        {main.map((t) => {
          const m = meta[t.slug]
          const Icon = m?.icon
          return (
            <Link key={t.slug} to={`/tratamentos/${t.slug}`} className={styles.card}>
              {Icon && <span className={styles.icon}><Icon size={22} /></span>}
              <h3>{t.name}</h3>
              {m && <p>{m.summary}</p>}
              <span className={styles.more}>Saiba mais <ArrowRight size={16} /></span>
            </Link>
          )
        })}
      </div>

      {others.length > 0 && (
        <>
          <h3 className={styles.othersTitle}>Também realiza</h3>
          <ul className={styles.chips}>
            {others.map((t) => (
              <li key={t.slug}><Link to={`/tratamentos/${t.slug}`}>{t.name}</Link></li>
            ))}
          </ul>
        </>
      )}
    </>
  )
}