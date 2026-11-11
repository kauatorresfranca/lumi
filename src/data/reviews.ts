import type { TeamKey } from './treatments'

export type Review = {
  name: string
  text: string
  photo?: string
  stars?: number
  dentist?: TeamKey // se informado, aparece só na página desse dentista (e na Home)
}

// Interruptor. Confirme com os dentistas (e, se quiserem, com o CRO-AL) antes de publicar.
export const PUBLISH_REVIEWS = true

// Preencha quando tiver: nota, total de avaliações e link do perfil no Google
export const googleSummary: { rating: string; total: number; url: string } | null = null

const real: Review[] = [
  {
    name: 'Laís M.',
    dentist: 'camila',
    text: 'A Dra. Camila é sempre muito competente em tudo o que se propõe a fazer. Sempre tenho ótimos resultados com os tratamentos e saio muito satisfeita. Além de ser uma excelente profissional, é uma pessoa extremamente querida, atenciosa e dedicada. Recomendo de olhos fechados!💗🦷',
  },
  {
    name: 'Antonio R. C.',
    text: 'Minha experiência na Lúmi Odontologia foi excelente!\nDesde o primeiro atendimento, fui recebido com muita atenção, cordialidade e profissionalismo. O cuidado e a dedicação em cada detalhe fazem toda a diferença e transmitem muita segurança durante o tratamento.\nFiquei muito satisfeito com o serviço e com a qualidade do trabalho realizado.\nRecomendo a Lúmi Odontologia para quem precisa de um bom atendimento.',
  },
  {
    name: 'Hortênsia O.',
    text: 'Fui atendida para uma restauração e fiquei impressionada com o cuidado e a dedicação. O dentista foi super atencioso, explicou cada etapa do procedimento e me deixou muito tranquila. Recomendo de olhos fechados!',
  },
]

export const reviews: Review[] = PUBLISH_REVIEWS ? real : []