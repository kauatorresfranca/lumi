import { Link } from 'react-router-dom'
import Seo from '../components/seo/Seo'
import WhatsAppButton from '../components/ui/WhatsAppButton'
import { team, treatments } from '../data/treatments'

export default function Treatment({ slug }: { slug: string }) {
  const t = treatments.find((x) => x.slug === slug)!
  const who = t.dentists.map((key) => team[key])

  return (
    <>
      <Seo
        title={`${t.name} em Maceió`}
        description={`${t.name} em Maceió com ${who.map((d) => d.name).join(' e ')}. Agende sua avaliação pelo WhatsApp.`}
        path={`/tratamentos/${t.slug}`}
      />
      <div className="container">
        <h1>{t.name} em Maceió</h1>
        <p>{t.intro}</p>
        <WhatsAppButton text={`Olá! Quero saber mais sobre ${t.name.toLowerCase()}.`} />

        <h2>Quem realiza</h2>
        <ul>
          {who.map((d) => (
            <li key={d.path}><Link to={d.path}>{d.name}</Link></li>
          ))}
        </ul>
      </div>
    </>
  )
}