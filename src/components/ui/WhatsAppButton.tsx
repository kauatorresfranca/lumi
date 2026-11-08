import { whatsappLink } from '../../data/site'
import WhatsAppIcon from './WhatsAppIcon'
import styles from './WhatsAppButton.module.css'

type Props = {
  text: string
  label?: string
  variant?: 'primary' | 'light'
  icon?: boolean
}

export default function WhatsAppButton({ text, label = 'Agendar avaliação', variant = 'primary', icon = false }: Props) {
  return (
    <a
      className={`${styles.button} ${variant === 'light' ? styles.light : ''}`}
      href={whatsappLink(text)}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon && <WhatsAppIcon size={20} />}
      {label}
    </a>
  )
}