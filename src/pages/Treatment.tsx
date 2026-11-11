import { Link } from 'react-router-dom'
import Seo from '../components/seo/Seo'
import JsonLd from '../components/seo/JsonLd'
import SectionTitle from '../components/ui/SectionTitle'
import WhatsAppButton from '../components/ui/WhatsAppButton'
import Breadcrumbs from '../components/ui/Breadcrumbs'
import { team, treatments } from '../data/treatments'
import styles from './dentists/Dentist.module.css'

export default function Treatment({ slug }: { slug: string }) {
  const t = treatments.find((x) => x.slug === slug)!
  const who = t.dentists.map((key) => team[key])
  const related = treatments.filter((x) => x.slug !== t.slug && x.dentists.some((d) => t.dentists.includes(d))).slice(0, 4)
  const cta = `Olá! Quero saber mais sobre ${t.name.toLowerCase()}.`

  return (
    <>
      <Seo
        title={`${t.name} em Maceió | Lumi Odontologia`}
        description={`${t.name} em Maceió com ${who.map((d) => d.name).join(' e ')}. Agende sua avaliação pelo WhatsApp.`}
        path={`/tratamentos/${t.slug}`}
        noindex={!t.ready}
      />
      {t.ready && t.faq && (
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: t.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
          }}
        />
      )}
      <Breadcrumbs items={[{ name: t.name, path: `/tratamentos/${t.slug}` }]} />

      <section className="container">
        <h1>{t.name} em Maceió</h1>
        <p className={styles.lead}>{t.intro}</p>
        <WhatsAppButton text={cta} />
      </section>

      {t.forWhom && (
        <section className={styles.tint}>
          <div className={`container ${styles.about}`}>
            <SectionTitle eyebrow="Indicação" title="Para quem é" />
            <p>{t.forWhom}</p>
          </div>
        </section>
      )}

      {t.steps && (
        <section className="container">
          <SectionTitle eyebrow="Passo a passo" title="Como é feito" />
          <ol>{t.steps.map((s) => <li key={s}>{s}</li>)}</ol>
        </section>
      )}

      {t.faq && (
        <section className={styles.tint}>
          <div className="container">
            <SectionTitle eyebrow="Dúvidas" title="Perguntas frequentes" />
            {t.faq.map((f) => (
              <details key={f.q} className={styles.faq}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      <section className="container">
        <SectionTitle eyebrow="Equipe" title="Quem realiza" />
        <ul className={styles.chips}>
          {who.map((d) => <li key={d.path}><Link to={d.path}>{d.name}</Link></li>)}
        </ul>
        <h2>Tratamentos relacionados</h2>
        <ul className={styles.chips}>
          {related.map((r) => <li key={r.slug}><Link to={`/tratamentos/${r.slug}`}>{r.name}</Link></li>)}
        </ul>
      </section>

      <section className={styles.final}>
        <div className="container">
          <SectionTitle light title={`Quer saber mais sobre ${t.name.toLowerCase()}?`} subtitle="Agende sua avaliação pelo WhatsApp." />
          <WhatsAppButton text={cta} label="Agendar avaliação" variant="light" />
        </div>
      </section>
    </>
  )
}