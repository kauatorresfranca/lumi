import { Link } from 'react-router-dom'
import Seo from '../components/seo/Seo'
import JsonLd from '../components/seo/JsonLd'
import WhatsAppButton from '../components/ui/WhatsAppButton'
import { site } from '../data/site'
import styles from './Dentist.module.css'

export default function DrLuizMiguel() {
  return (
    <>
      <Seo
        title="Dr. Luiz Miguel | Dentista em Maceió"
        description="Dr. Luiz Miguel, dentista em Maceió: próteses, coroas, extração de siso e mais. Agende sua avaliação."
        path="/dr-luiz-miguel"
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Dr. Luiz Miguel',
          jobTitle: 'Cirurgião-dentista',
          url: `${site.domain}/dr-luiz-miguel`,
          worksFor: { '@id': `${site.domain}/#clinica` },
        }}
      />

      <section className={`container ${styles.hero}`}>
        <div>
          <h1>Dr. Luiz Miguel</h1>
          <p className={styles.cro}>CRO-AL 0000</p>
          <p>Bio do Dr. Luiz. Formação, experiência, cursos.</p>
          <WhatsAppButton text="Olá! Vim pela página do Dr. Luiz e quero agendar uma avaliação." label="Agendar com o Dr. Luiz" />
        </div>
        <div className={styles.photo}>foto</div>
      </section>

      <section className="container">
        <h2>Tratamentos com o Dr. Luiz</h2>
        <ul className={styles.list}>
          <li><Link to="/tratamentos/proteses-totais-e-removiveis">Próteses totais e removíveis</Link></li>
          <li><Link to="/tratamentos/coroa-em-resina-e-porcelana">Coroa em resina e porcelana</Link></li>
          <li><Link to="/tratamentos/extracao-de-siso">Extração de siso</Link></li>
          <li><Link to="/tratamentos/extracao-dentaria">Extração dentária</Link></li>
          <li><Link to="/tratamentos/restauracao-dental">Restauração</Link></li>
          <li><Link to="/tratamentos/clareamento-dental">Clareamento</Link></li>
          <li><Link to="/tratamentos/limpeza-dental">Limpeza</Link></li>
        </ul>
      </section>
    </>
  )
}