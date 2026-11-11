import styles from './Photo.module.css'

type Props = {
  src?: string
  alt: string
  width: number
  height: number
  priority?: boolean
  className?: string
  label?: string
}

export default function Photo({ src, alt, width, height, priority = false, className = '', label = 'foto' }: Props) {
  if (!src) {
    if (import.meta.env.PROD) return null
    return (
      <div className={`${styles.placeholder} ${className}`} style={{ aspectRatio: `${width} / ${height}` }} role="img" aria-label={alt}>
        {label}
      </div>
    )
  }
  return (
    <img className={`${styles.img} ${className}`} src={src} alt={alt} width={width} height={height} loading={priority ? 'eager' : 'lazy'} decoding="async" />
  )
}