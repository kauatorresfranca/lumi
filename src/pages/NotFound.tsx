import { Link } from 'react-router-dom'
import Seo from '../components/seo/Seo'
import WhatsAppButton from '../components/ui/WhatsAppButton'

export default function NotFound() {
  return (
    <>
      <Seo title="Página não encontrada | Lumi Odontologia" description="Página não encontrada." path="/404" noindex />
      <div className="container">
        <h1>Página não encontrada</h1>
        <p>O endereço pode ter mudado. Volte para o início ou fale com a gente.</p>
        <p><Link to="/">Voltar para a página inicial</Link></p>
        <WhatsAppButton text="Olá! Vim pelo site e preciso de ajuda." label="Falar com a Lumi" />
      </div>
    </>
  )
}