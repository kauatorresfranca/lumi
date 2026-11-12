import { Link } from 'react-router-dom'
import { MapPin, Clock, HeartHandshake, ClipboardCheck, Siren, Sparkles, Crown, Smile, Baby, Stethoscope, ArrowRight } from 'lucide-react'
import Seo from '../../components/seo/Seo'
import JsonLd from '../../components/seo/JsonLd'
import SectionTitle from '../../components/ui/SectionTitle'
import WhatsAppButton from '../../components/ui/WhatsAppButton'
import ReviewsSection from '../../components/ui/ReviewsSection'
import { site, whatsappLink } from '../../data/site'
import { reviews } from '../../data/reviews'
import { team, treatments } from '../../data/treatments'
import { track } from '../../lib/analytics'
import styles from './Home.module.css'
import duplaImg from '../../assets/images/dupla.webp'
import luizImg from '../../assets/images/luiz.webp'
import camilaImg from '../../assets/images/camila.webp'

const MAP_EMBED_SRC = site.mapsEmbed

const CTA_TEXT = 'Olá! Vim pelo site e quero agendar uma avaliação.'
const PAIN_TEXT = 'Olá! Estou com dor de dente e preciso de atendimento de urgência.'

const groups = [
  { title: 'Urgência e dor', icon: Siren, slugs: ['urgencia-odontologica-24h', 'extracao-dentaria', 'extracao-de-siso'] },
  { title: 'Clínico geral', icon: Stethoscope, slugs: ['limpeza-completa', 'tratamento-periodontal', 'restauracao-dental', 'placas-de-bruxismo'] },
  { title: 'Estética do sorriso e da face', icon: Sparkles, slugs: ['clareamento-dental', 'facetas-em-resina', 'facetas-em-porcelana', 'harmonizacao-orofacial'] },
  { title: 'Próteses e reabilitação', icon: Crown, slugs: ['coroa-em-resina-e-porcelana', 'proteses-totais-e-parciais'] },
  { title: 'Ortodontia', icon: Smile, slugs: ['aparelho-ortodontico', 'alinhador-dental', 'ortopedia-facial'] },
  { title: 'Infantil e prevenção', icon: Baby, slugs: ['odontopediatria'] },
]

const benefits = [
  { icon: Clock, title: 'Urgência 24 horas', text: 'Dor, dente quebrado ou inchaço? Chame no WhatsApp a qualquer hora, inclusive à noite e aos finais de semana.' },
  { icon: HeartHandshake, title: 'Atendimento humanizado', text: 'Calma, conforto e explicação em cada etapa, especialmente para quem tem medo ou ansiedade de ir ao dentista.' },
  { icon: ClipboardCheck, title: 'Plano de tratamento personalizado', text: 'Você entende suas necessidades, as etapas do tratamento e as possibilidades disponíveis para cuidar do seu sorriso com segurança.' },
]

const doctors = [
  {
    key: 'luiz' as const,
    initials: 'LM',
    photo: luizImg as string | undefined,
    focus: 'Cirurgião-dentista, pós-graduando em prótese dentária',
    tags: ['Próteses', 'Coroas', 'Clareamento', 'Facetas'],
  },
  {
    key: 'camila' as const,
    initials: 'CM',
    photo: camilaImg as string | undefined,
    focus: 'Cirurgiã-dentista, pós-graduanda em ortodontia e ortopedia facial',
    tags: ['Ortodontia', 'Harmonização orofacial', 'Facetas', 'Odontopediatria'],
  },
]

const steps = [
  { title: 'Chame no WhatsApp', text: 'Conte o que você precisa. Em caso de urgência, respondemos a qualquer horário.' },
  { title: 'Faça sua avaliação', text: 'O dentista examina, ouve você e explica tudo com clareza.' },
  { title: 'Siga com seu plano de tratamento', text: 'Você sai sabendo o tratamento indicado, as etapas e o que esperar de cada uma.' },
]

const faq = [
  { q: 'Vocês atendem urgência?', a: 'Sim. Atendemos urgências em qualquer horário. Basta chamar no WhatsApp e explicar o que está acontecendo.' },
  { q: 'Como funciona a primeira consulta?', a: 'Fazemos uma avaliação, conversamos sobre o que você precisa e explicamos as opções de tratamento. O valor da avaliação é informado no atendimento, pelo WhatsApp.' },
  { q: 'Quais as formas de pagamento?', a: 'As condições de pagamento são informadas no atendimento, pelo WhatsApp.' },
  { q: 'Vocês atendem convênio?', a: 'Nosso atendimento é particular.' },
  { q: 'Onde fica a clínica?', a: 'Na Rua Antenor Marinho de Melo, 36, Gruta de Lourdes, Maceió. Recebemos pacientes de toda a cidade e região.' },
]

export default function Home() {
  const byslug = (s: string) => treatments.find((t) => t.slug === s)!

  return (
    <>
      <Seo
        title={`Dentista em Maceió 24 horas | ${site.name}`}
        description="Dentista em Maceió com urgência 24 horas, na Gruta de Lourdes. Estética, prótese, ortodontia e odontopediatria. Agende pelo WhatsApp."
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
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
        }}
      />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div>
            <span className="eyebrow">Urgência 24 horas · Maceió</span>
            <h1>Dentista em Maceió: do alívio da dor ao sorriso que você quer</h1>
            <p className={styles.lead}>
              Unimos tecnologia e atendimento humanizado para cuidar do seu sorriso com excelência, conforto e confiança.
            </p>
            <div className={styles.actions}>
              <WhatsAppButton text={CTA_TEXT} label="Agendar avaliação" />
            </div>
            <p className={styles.note}>
              Resposta rápida pelo WhatsApp · <a href={`tel:+${site.whatsapp}`} onClick={() => track('phone_click')}>ou ligue {site.whatsappDisplay}</a>
            </p>
            <ul className={styles.badges}>
              <li><HeartHandshake size={18} /> Atendimento humanizado</li>
              <li><MapPin size={18} /> Gruta de Lourdes, Maceió</li>
            </ul>
          </div>
          <div className={styles.photoFrame}>
            <img
              className={styles.heroImg}
              src={duplaImg}
              alt="Dr. Luiz Miguel e Dra. Camila Matos, dentistas da Lumi Odontologia em Maceió"
              width={1000}
              height={1250}
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      {/* Faixa de urgência */}
      <section className={styles.urgency}>
        <div className={`container ${styles.urgencyInner}`}>
          <span className={styles.live}>
            <i className={styles.dot} aria-hidden="true" />
            <span><strong>Dor de dente agora?</strong> Atendemos urgências 24 horas, todos os dias.</span>
          </span>
          <a
            href={whatsappLink(PAIN_TEXT)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track('whatsapp_click', { cta_label: 'faixa_urgencia' })}
          >
            Chamar agora <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* Por que a Lumi */}
      <section className="container">
        <SectionTitle eyebrow="Por que a Lumi" title="Cuidado de verdade, na hora em que você precisa" />
        <div className={styles.grid3}>
          {benefits.map((b) => (
            <div key={b.title} className={styles.card}>
              <span className={styles.icon}><b.icon size={24} /></span>
              <h3>{b.title}</h3>
              <p>{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tratamentos */}
      <section id="tratamentos" className={styles.tint}>
        <div className="container">
          <SectionTitle eyebrow="Tratamentos" title="Tratamentos para cada necessidade" subtitle="Escolha o que você procura e fale com a gente." />
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

      {/* Equipe */}
      <section id="equipe" className="container">
        <SectionTitle eyebrow="Equipe" title="Quem vai cuidar de você" subtitle="Dois dentistas, cada um com suas áreas de atuação, no mesmo endereço." />
        <div className={styles.grid2}>
          {doctors.map((d) => (
            <article key={d.key} className={styles.doctor}>
              {d.photo ? (
                <img className={styles.avatarImg} src={d.photo} alt={team[d.key].name} width={96} height={96} loading="lazy" decoding="async" />
              ) : (
                <div className={styles.initials} aria-hidden="true">{d.initials}</div>
              )}
              <div>
                <h3>{team[d.key].name}</h3>
                <p className={styles.muted}>{d.focus}</p>
                <ul className={styles.chips}>
                  {d.tags.map((t) => <li key={t}>{t}</li>)}
                </ul>
                <Link className={styles.more} to={team[d.key].path}>Conhecer {team[d.key].name} <ArrowRight size={16} /></Link>
              </div>
            </article>
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
          <div className={styles.locActions}>
            <WhatsAppButton text={CTA_TEXT} label="Agendar avaliação" />
          </div>
        </div>
      </section>

      {/* Avaliações do Google (só aparece com avaliações) */}
      <ReviewsSection />

      {/* Localização */}
      <section id="localizacao" className={reviews.length > 0 ? styles.tint : undefined}>
        <div className="container">
          <SectionTitle
            eyebrow="Localização"
            title="Na Gruta de Lourdes, recebendo pacientes de toda Maceió"
            subtitle={`${site.address.street}, ${site.address.neighborhood}, ${site.address.city}/${site.address.state} · CEP ${site.address.zip}`}
          />
          <p className={styles.muted}>{site.hours}</p>
          {MAP_EMBED_SRC && (
            <iframe className={styles.mapFrame} src={MAP_EMBED_SRC} title="Mapa da Lumi Odontologia" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          )}
          <a className={styles.outline} href={site.mapsUrl} target="_blank" rel="noopener noreferrer" onClick={() => track('map_click')}>
            Como chegar
          </a>
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
          <SectionTitle light title="Pronto para cuidar do seu sorriso?" subtitle="Fale com a gente pelo WhatsApp. Em caso de dor, respondemos a qualquer hora." />
          <div className={styles.ctaRow}>
            <WhatsAppButton text={CTA_TEXT} label="Agendar avaliação" variant="light" />
            <a
              className={styles.outline}
              href={whatsappLink(PAIN_TEXT)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track('whatsapp_click', { cta_label: 'final_urgencia' })}
            >
              Estou com dor
            </a>
          </div>
        </div>
      </section>
    </>
  )
}