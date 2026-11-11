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
import luiz from '../../assets/images/luiz.jpeg'

const FEATURED = [
  'protese-fixa',
  'proteses-totais-e-removiveis',
  'coroa-em-resina-e-porcelana',
  'extracao-de-siso',
  'facetas-em-porcelana',
  'clareamento-dental',
]

const faq = [
  { q: 'Como agendar uma avaliação com o Dr. Luiz?', a: 'Chame a Lumi no WhatsApp, conte o que você precisa e combinamos o melhor horário.' },
  { q: 'O Dr. Luiz atende urgências?', a: 'A Lumi atende urgências 24 horas, e o Dr. Luiz tem atenção especial a essas situações, buscando aliviar a dor e indicar o tratamento adequado. Chame no WhatsApp a qualquer hora.' },
  { q: 'Quais tratamentos o Dr. Luiz realiza?', a: 'Prótese fixa, total e removível, coroas, facetas em porcelana, clareamento, extrações (inclusive de siso), restauração e limpeza.' },
]

const CTA = 'Olá! Vim pela página do Dr. Luiz e quero agendar uma avaliação.'

export default function DrLuizMiguel() {
  const d = team.luiz

  return (
    <>
      <Seo
        title="Dr. Luiz Miguel | Dentista em Maceió"
        description="Dr. Luiz Miguel, dentista em Maceió: prótese, coroas, extração de siso, clareamento e mais. Agende sua avaliação pelo WhatsApp."
        path="/dr-luiz-miguel"
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: d.name,
          jobTitle: 'Cirurgião-dentista',
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
          <span className="eyebrow">Cirurgião-dentista · {d.cro}</span>
          <h1>Dr. Luiz Miguel, dentista em Maceió</h1>
          <p className={styles.lead}>Prótese, coroas, extrações e clareamento, com atenção e explicação clara de cada etapa.</p>
          <WhatsAppButton text={CTA} label="Agendar com o Dr. Luiz" />
        </div>
        <Photo src={luiz} alt="Dr. Luiz Miguel, dentista da Lumi Odontologia em Maceió" width={1000} height={1250} priority />
      </section>

      <section className={styles.tint}>
        <div className={`container ${styles.about}`}>
          <SectionTitle eyebrow="Sobre" title="Formação e experiência" />
          <p>O Dr. Luiz Miguel é cirurgião-dentista, graduado em Odontologia em 2024 e pós-graduando em prótese dentária. Tem atualização em prótese fixa, clareamento dental e facetas em resina composta e porcelana. Seu atendimento é humanizado, com atenção especial às situações de urgência, em que busca aliviar a dor e indicar o tratamento adequado para cada caso.</p>
        </div>
      </section>

      <section className="container">
        <SectionTitle eyebrow="Tratamentos" title="Tratamentos realizados pelo Dr. Luiz" subtitle="Clique em um tratamento para saber como ele funciona." />
        <TreatmentCards dentist="luiz" featured={FEATURED} />
      </section>

      <ReviewsSection dentist="luiz" />

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
          <SectionTitle light title="Agende sua avaliação com o Dr. Luiz" subtitle="Fale com a gente pelo WhatsApp." />
          <WhatsAppButton text={CTA} label="Agendar avaliação" variant="light" />
        </div>
      </section>
    </>
  )
}