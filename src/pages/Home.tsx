import { Link } from 'react-router-dom'
import { ShieldCheck, MapPin, Star, Siren, Sparkles, Crown, Smile, Baby, ArrowRight } from 'lucide-react'
import Seo from '../components/seo/Seo'
import JsonLd from '../components/seo/JsonLd'
import SectionTitle from '../components/ui/SectionTitle'
import WhatsAppButton from '../components/ui/WhatsAppButton'
import { site } from '../data/site'
import { team, treatments } from '../data/treatments'
import styles from './Home.module.css'

const groups = [
  { title: 'Urgência e dor', icon: Siren, slugs: ['urgencia-odontologica-24h', 'extracao-dentaria', 'extracao-de-siso', 'restauracao-dental'] },
  { title: 'Estética', icon: Sparkles, slugs: ['clareamento-dental', 'facetas-em-resina', 'botox'] },
  { title: 'Prótese e reabilitação', icon: Crown, slugs: ['proteses-totais-e-removiveis', 'coroa-em-resina-e-porcelana'] },
  { title: 'Ortodontia', icon: Smile, slugs: ['aparelho-ortodontico', 'alinhador-dental'] },
  { title: 'Infantil e prevenção', icon: Baby, slugs: ['odontopediatria', 'limpeza-dental'] },
]

const doctors = [
  { key: 'luiz' as const, focus: 'Próteses, coroas e cirurgias (MOCK)', tags: ['Próteses', 'Coroas', 'Extração de siso'] },
  { key: 'camila' as const, focus: 'Estética, ortodontia e odontopediatria (MOCK)', tags: ['Facetas', 'Alinhadores', 'Odontopediatria'] },
]

const steps = [
  { title: 'Chame no WhatsApp', text: 'Conte o que você precisa e escolha o melhor horário.' },
  { title: 'Faça sua avaliação', text: 'Examinamos e explicamos cada etapa com clareza.' },
  { title: 'Receba seu plano', text: 'Você sai com o tratamento, o prazo e as opções de pagamento.' },
]

// MOCK: trocar pelas respostas reais do cliente antes de publicar
const faq = [
  { q: 'Vocês atendem urgência?', a: 'Resposta a confirmar com o cliente.' },
  { q: 'Quanto custa a primeira consulta?', a: 'Resposta a confirmar com o cliente.' },
  { q: 'Quais formas de pagamento vocês aceitam?', a: 'Resposta a confirmar com o cliente.' },
  { q: 'Vocês atendem convênio?', a: 'Resposta a confirmar com o cliente.' },
]

const CTA_TEXT = 'Olá! Vim pelo site e quero agendar uma avaliação.'

export default function Home() {
  const byslug = (s: string) => treatments.find((t) => t.slug === s)!

  return (
    <>
      <Seo
        title={`Dentista em Maceió | ${site.name}`}
        description="Dentista em Maceió com atendimento de urgência, clareamento, próteses, aparelhos e odontopediatria. Agende sua avaliação pelo WhatsApp."
        path="/"
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Dentist',
          '@id': `${site.domain}/#clinica`,
          name: site.name,
          url: site.domain,
          telephone: `+${site.whatsapp}`,
          address: {
            '@type': 'PostalAddress',
            streetAddress: site.address.street,
            addressLocality: site.address.city,
            addressRegion: site.address.state,
            postalCode: site.address.zip,
            addressCountry: 'BR',
          },
          sameAs: [site.instagram],
        }}
      />
      {/* Ative o FAQPage só quando as respostas forem reais:
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }} /> */}

      {/* Hero */}
      <section className={styles.hero}>
        <img className={styles.mark} src="/img/lumi-simbolo.png" alt="" width={520} height={520} decoding="async" aria-hidden="true" />
        <div className={`container ${styles.heroInner}`}>
          <div>
            <span className="eyebrow">Lumi Odontologia · Maceió</span>
            <h1>Dentista em Maceió que cuida do seu sorriso com atenção</h1>
            <p className={styles.lead}>
              Urgência, estética, prótese, ortodontia e atendimento infantil. Agende pelo WhatsApp e receba um plano claro, sem enrolação.
            </p>
            <div className={styles.actions}>
              <WhatsAppButton text={CTA_TEXT} />
              <a className={styles.outline} href={`tel:+${site.whatsapp}`}>Ligar agora</a>
            </div>
            <p className={styles.note}>Resposta rápida pelo WhatsApp</p>
            <ul className={styles.badges}>
              <li><ShieldCheck size={18} /> Profissionais com CRO</li>
              <li><MapPin size={18} /> Maceió e região</li>
              <li><Star size={18} /> Avaliações no Google (MOCK)</li>
            </ul>
          </div>
          <div className={styles.photoFrame}>
            <div className={styles.photo}>foto dos dois dentistas</div>
          </div>
        </div>
      </section>

      {/* Urgência (manter só se o atendimento for real) */}
      <section className={styles.urgency}>
        <div className={`container ${styles.urgencyInner}`}>
          <span><strong>Dor de dente?</strong> Atendimento de urgência em Maceió.</span>
          <Link to="/tratamentos/urgencia-odontologica-24h">Saiba como funciona <ArrowRight size={16} /></Link>
        </div>
      </section>

      {/* Dentistas */}
      <section id="equipe" className="container">
        <SectionTitle eyebrow="Equipe" title="Conheça quem vai cuidar de você" subtitle="Dois dentistas, cada um com suas especialidades, no mesmo endereço." />
        <div className={styles.grid2}>
          {doctors.map((d) => (
            <article key={d.key} className={styles.doctor}>
              <div className={styles.avatar}>foto</div>
              <div>
                <h3>{team[d.key].name}</h3>
                <p className={styles.muted}>{d.focus}</p>
                <ul className={styles.chips}>
                  {d.tags.map((t) => <li key={t}>{t}</li>)}
                </ul>
                <Link className={styles.more} to={team[d.key].path}>Ver página <ArrowRight size={16} /></Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Tratamentos */}
      <section id="tratamentos" className={styles.tint}>
        <div className="container">
          <SectionTitle eyebrow="Tratamentos" title="Do primeiro atendimento ao sorriso que você quer" />
          <div className={styles.grid3}>
            {groups.map((g) => (
              <div key={g.title} className={styles.card}>
                <span className={styles.icon}><g.icon size={24} /></span>
                <h3>{g.title}</h3>
                <ul className={styles.list}>
                  {g.slugs.map((s) => (
                    <li key={s}><Link to={`/tratamentos/${s}`}>{byslug(s).name}</Link></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prova social */}
      <section className="container">
        <SectionTitle eyebrow="Pacientes" title="O que dizem sobre a Lumi" />
        <div className={styles.grid3}>
          {[1, 2, 3].map((n) => (
            <figure key={n} className={styles.card}>
              <div className={styles.stars}>{[1, 2, 3, 4, 5].map((s) => <Star key={s} size={16} fill="currentColor" />)}</div>
              <blockquote>Avaliação real do Google (MOCK {n}).</blockquote>
              <figcaption className={styles.muted}>Nome do paciente</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Como funciona */}
      <section className={styles.tint}>
        <div className="container">
          <SectionTitle eyebrow="Passo a passo" title="Como funciona" />
          <ol className={styles.grid3}>
            {steps.map((s, i) => (
              <li key={s.title} className={styles.step}>
                <span className={styles.num}>{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* A clínica */}
      <section className={`container ${styles.split}`}>
        <div className={styles.photo}>fotos do consultório</div>
        <div>
          <SectionTitle eyebrow="A clínica" title="Um espaço pensado para você se sentir bem" />
          <p>Texto sobre estrutura, conforto, higiene e atendimento (MOCK).</p>
        </div>
      </section>

      {/* Onde atendemos */}
      <section id="localizacao" className={styles.tint}>
        <div className="container">
          <SectionTitle eyebrow="Localização" title="Atendemos pacientes de toda Maceió" subtitle={`${site.address.street}, ${site.address.city}/${site.address.state} · CEP ${site.address.zip}`} />
          <ul className={styles.chips}>
            {site.areas.map((a) => <li key={a}>{a}</li>)}
          </ul>
          <p className={styles.muted}>{site.hours}</p>
          <div className={styles.map}>mapa do Google (MOCK)</div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container">
        <SectionTitle eyebrow="Dúvidas" title="Perguntas frequentes" />
        {faq.map((f) => (
          <details key={f.q} className={styles.faq}>
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </section>

      {/* CTA final */}
      <section className={styles.final}>
        <div className="container">
          <SectionTitle light title="Pronto para cuidar do seu sorriso?" subtitle="Fale com a gente pelo WhatsApp e agende sua avaliação." />
          <WhatsAppButton text={CTA_TEXT} label="Agendar avaliação" variant="light" />
        </div>
      </section>
    </>
  )
}