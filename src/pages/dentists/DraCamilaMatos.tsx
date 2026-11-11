import Seo from '../../components/seo/Seo'
import JsonLd from '../../components/seo/JsonLd'
import SectionTitle from '../../components/ui/SectionTitle'
import WhatsAppButton from '../../components/ui/WhatsAppButton'
import Breadcrumbs from '../../components/ui/Breadcrumbs'
import Photo from '../../components/ui/Photo'
import ReviewsSection from '../../components/ui/ReviewsSection'
import TreatmentCards from '../../components/ui/TreatmentCards'
import { site } from '../../data/site'
import { team } from '../../data/treatments'
import styles from './Dentist.module.css'
import camila from '../../assets/images/camila.jpeg'

const FEATURED = [
  'aparelho-ortodontico',
  'alinhador-dental',
  'harmonizacao-orofacial',
  'facetas-em-resina',
  'clareamento-dental',
  'odontopediatria',
]

const faq = [
  { q: 'Como agendar uma avaliação com a Dra. Camila?', a: 'Chame a Lumi no WhatsApp, conte o que você precisa e combinamos o melhor horário.' },
  { q: 'A Dra. Camila atende pacientes com medo ou ansiedade?', a: 'Sim. O atendimento busca ser seguro e confortável, inclusive para quem tem medo ou ansiedade em procedimentos odontológicos.' },
  { q: 'A Dra. Camila atende urgências?', a: 'A Lumi atende urgências 24 horas, e a Dra. Camila realiza esses atendimentos. Chame no WhatsApp a qualquer hora.' },
]

const CTA = 'Olá! Vim pela página da Dra. Camila e quero agendar uma avaliação.'

export default function DraCamilaMatos() {
  const d = team.camila

  return (
    <>
      <Seo
        title="Dra. Camila Matos | Dentista em Maceió"
        description="Dra. Camila Matos, dentista em Maceió: ortodontia, alinhadores, harmonização orofacial, estética e odontopediatria. Agende pelo WhatsApp."
        path="/dra-camila-matos"
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: d.name,
          jobTitle: 'Cirurgiã-dentista',
          url: `${site.domain}${d.path}`,
          worksFor: { '@id': `${site.domain}/#clinica` },
          sameAs: [d.instagram],
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
        }}
      />
      <Breadcrumbs items={[{ name: d.name, path: d.path }]} />

      <section className={`container ${styles.hero}`}>
        <div>
          <span className="eyebrow">Cirurgiã-dentista · {d.cro}</span>
          <h1>Dra. Camila Matos, dentista em Maceió</h1>
          <p className={styles.lead}>Ortodontia, estética e odontopediatria, com atendimento acolhedor e seguro.</p>
          <WhatsAppButton text={CTA} label="Agendar com a Dra. Camila" />
          <p><a href={d.instagram} target="_blank" rel="noopener noreferrer">Instagram da Dra. Camila</a></p>
        </div>
        <Photo src={camila} alt="Dra. Camila Matos, dentista da Lumi Odontologia em Maceió" width={1000} height={1250} priority />
      </section>

      <section className={styles.tint}>
        <div className={`container ${styles.about}`}>
          <SectionTitle eyebrow="Sobre" title="Formação e experiência" />
          <p>A Dra. Camila Matos é cirurgiã-dentista e pós-graduanda em ortodontia e ortopedia facial. Tem atualização em harmonização orofacial, clareamento dental, prótese fixa e facetas em resina composta e porcelana. Atende com técnicas atualizadas e uma abordagem segura e confortável, inclusive para pacientes com medo ou ansiedade em procedimentos odontológicos. Também realiza atendimentos de urgência 24 horas, para aliviar a dor do paciente.</p>
        </div>
      </section>

      <section className="container">
        <SectionTitle eyebrow="Tratamentos" title="Tratamentos realizados pela Dra. Camila" subtitle="Clique em um tratamento para saber como ele funciona." />
        <TreatmentCards dentist="camila" featured={FEATURED} />
      </section>

      <ReviewsSection dentist="camila" />

      <section className={styles.tint}>
        <div className="container">
          <SectionTitle eyebrow="Dúvidas" title="Perguntas frequentes" />
          {faq.map((f) => (
            <details key={f.q} className={styles.faq}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className={styles.final}>
        <div className="container">
          <SectionTitle light title="Agende sua avaliação com a Dra. Camila" subtitle="Fale com a gente pelo WhatsApp." />
          <WhatsAppButton text={CTA} label="Agendar avaliação" variant="light" />
        </div>
      </section>
    </>
  )
}