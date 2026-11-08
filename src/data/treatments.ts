export const team = {
  luiz: { name: 'Dr. Luiz Miguel', path: '/dr-luiz-miguel' },
  camila: { name: 'Dra. Camila Matos', path: '/dra-camila-matos' },
}

export type TeamKey = keyof typeof team

export type Treatment = {
  slug: string
  name: string
  keyword: string
  intro: string
  dentists: TeamKey[]
}

export const treatments: Treatment[] = [
  { slug: 'urgencia-odontologica-24h', name: 'Urgência odontológica', keyword: 'urgência odontológica 24h em Maceió', intro: 'Texto a escrever.', dentists: ['luiz', 'camila'] },
  { slug: 'limpeza-dental', name: 'Limpeza dental', keyword: 'limpeza dental em Maceió', intro: 'Texto a escrever.', dentists: ['luiz', 'camila'] },
  { slug: 'restauracao-dental', name: 'Restauração dental', keyword: 'restauração dental em Maceió', intro: 'Texto a escrever.', dentists: ['luiz', 'camila'] },
  { slug: 'extracao-dentaria', name: 'Extração dentária', keyword: 'extração de dente em Maceió', intro: 'Texto a escrever.', dentists: ['luiz', 'camila'] },
  { slug: 'extracao-de-siso', name: 'Extração de siso', keyword: 'extração de siso em Maceió', intro: 'Texto a escrever.', dentists: ['luiz'] },
  { slug: 'clareamento-dental', name: 'Clareamento dental', keyword: 'clareamento dental em Maceió', intro: 'Texto a escrever.', dentists: ['luiz', 'camila'] },
  { slug: 'proteses-totais-e-removiveis', name: 'Próteses totais e removíveis', keyword: 'prótese dentária em Maceió', intro: 'Texto a escrever.', dentists: ['luiz'] },
  { slug: 'coroa-em-resina-e-porcelana', name: 'Coroa em resina e porcelana', keyword: 'coroa dentária em Maceió', intro: 'Texto a escrever.', dentists: ['luiz'] },
  { slug: 'facetas-em-resina', name: 'Facetas em resina', keyword: 'facetas em resina em Maceió', intro: 'Texto a escrever.', dentists: ['camila'] },
  { slug: 'botox', name: 'Botox', keyword: 'botox odontológico em Maceió', intro: 'Texto a escrever.', dentists: ['camila'] },
  { slug: 'aparelho-ortodontico', name: 'Aparelho ortodôntico', keyword: 'aparelho ortodôntico em Maceió', intro: 'Texto a escrever.', dentists: ['camila'] },
  { slug: 'alinhador-dental', name: 'Alinhador dental', keyword: 'alinhador dental em Maceió', intro: 'Texto a escrever.', dentists: ['camila'] },
  { slug: 'odontopediatria', name: 'Odontopediatria', keyword: 'dentista infantil em Maceió', intro: 'Texto a escrever.', dentists: ['camila'] },
]