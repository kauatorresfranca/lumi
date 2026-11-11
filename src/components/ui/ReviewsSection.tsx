import SectionTitle from './SectionTitle'
import GoogleIcon from './GoogleIcon'
import GoogleReview from './GoogleReview'
import { googleSummary, reviews } from '../../data/reviews'
import type { TeamKey } from '../../data/treatments'
import styles from './ReviewsSection.module.css'

export default function ReviewsSection({ dentist }: { dentist?: TeamKey }) {
  const list = reviews.filter((r) => !dentist || !r.dentist || r.dentist === dentist)
  if (list.length === 0) return null

  return (
    <section className="container">
      <SectionTitle eyebrow="Avaliações" title="O que dizem nossos pacientes" />
      {googleSummary && (
        <p className={styles.summary}>
          <GoogleIcon size={22} /> <strong>{googleSummary.rating}</strong> · {googleSummary.total} avaliações no Google ·{' '}
          <a href={googleSummary.url} target="_blank" rel="noopener noreferrer">Ver no Google</a>
        </p>
      )}
      <div className={styles.grid}>
        {list.map((r) => (
          <GoogleReview key={r.name} name={r.name} text={r.text} photo={r.photo} when={r.when} stars={r.stars} />
        ))}
      </div>
    </section>
  )
}