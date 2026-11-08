import styles from './SectionTitle.module.css'

type Props = { eyebrow?: string; title: string; subtitle?: string; light?: boolean }

export default function SectionTitle({ eyebrow, title, subtitle, light }: Props) {
  return (
    <header className={`${styles.head} ${light ? styles.light : ''}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </header>
  )
}