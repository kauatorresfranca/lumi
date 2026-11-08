import { Outlet, Link } from 'react-router-dom'
import { MapPin, Clock, Phone } from 'lucide-react'
import { site, whatsappLink } from '../../data/site'
import { team } from '../../data/treatments'
import WhatsAppIcon from '../ui/WhatsAppIcon'
import WhatsAppButton from '../ui/WhatsAppButton'
import styles from './Layout.module.css'

export default function Layout() {
  return (
    <>
      <header className={styles.header}>
        <div className={`container ${styles.bar}`}>
          <Link to="/" className={styles.brand}>
            <img src="/img/lumi-simbolo.png" width={44} height={44} alt="" />
            <span className={styles.brandText}>
              <strong>LUMI</strong>
              <small>ODONTOLOGIA</small>
            </span>
          </Link>
          <nav className={styles.nav} aria-label="Principal">
            <a href="/#equipe">Equipe</a>
            <a href="/#tratamentos">Tratamentos</a>
            <a href="/#localizacao">Localização</a>
          </nav>
          <div className={styles.headerCta}>
            <WhatsAppButton text="Olá! Vim pelo site e quero agendar uma avaliação." label="Agendar" />
          </div>
        </div>
      </header>

      <main><Outlet /></main>

      <footer className={styles.footer}>
        <div className={`container ${styles.footerGrid}`}>
          <div>
            <strong className={styles.footerBrand}>LUMI ODONTOLOGIA</strong>
            <p>Cuidado odontológico em Maceió.</p>
            <p><Link to={team.luiz.path}>{team.luiz.name}</Link></p>
            <p><Link to={team.camila.path}>{team.camila.name}</Link></p>
          </div>
          <div>
            <p><MapPin size={16} /> {site.address.street}, {site.address.city}/{site.address.state} · CEP {site.address.zip}</p>
            <p><Clock size={16} /> {site.hours}</p>
            <p><Phone size={16} /> {site.whatsappDisplay}</p>
          </div>
          <p className={styles.copy}>© {new Date().getFullYear()} {site.name}</p>
        </div>
      </footer>

      <a
        className={styles.floating}
        href={whatsappLink('Olá! Vim pelo site e quero agendar uma avaliação.')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar pelo WhatsApp"
      >
        <WhatsAppIcon size={28} />
        <span className={styles.floatingLabel}>WhatsApp</span>
      </a>
    </>
  )
}