// src/data/site.ts
export const site = {
  name: 'Lumi Odontologia',
  domain: 'https://lumiodontolomaceio.com.br',
  whatsapp: '5582993985885',
  whatsappDisplay: '(82) 9 9398-5885',
  address: {
    street: 'Rua Antenor Marinho de Melo, 36',
    neighborhood: '[BAIRRO]',
    city: 'Maceió',
    state: 'AL',
    zip: '57052-482',
  },
  hours: 'Seg a Sex, 08h às 18h',
  instagram: 'https://instagram.com/MOCK',
  areas: [
    'Gruta de Lourdes', 'Serraria', 'São Jorge', 'Barro Duro', 'Jardim Petrópolis',
    'Tabuleiro do Martins', 'Pitanguinha', 'Pinheiro', 'Ouro Preto', 'Antares',
    'Salvador Lyra', 'Benedito Bentes', 'Marechal Deodoro',
  ],
}

export const whatsappLink = (text: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`