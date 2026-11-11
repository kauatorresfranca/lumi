// src/data/site.ts
export const site = {
  name: 'Lumi Odontologia',
    domain: 'https://lumiodontomaceio.com.br',
  whatsapp: '5582993985885',
  whatsappDisplay: '(82) 9 9398-5885',
    address: {
    street: 'Rua Antenor Marinho de Melo, 36',
    neighborhood: 'Gruta de Lourdes',
    city: 'Maceió',
    state: 'AL',
    zip: '57052-482',
  },
  hours: 'Agendamentos e urgências pelo WhatsApp', // trocar pelo horário real quando o cliente responder
  instagram: 'https://www.instagram.com/lumiodonto.maceio/',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent('Rua Antenor Marinho de Melo, 36, Gruta de Lourdes, Maceió, AL'),
  areas: [
    'Gruta de Lourdes', 'Serraria', 'São Jorge', 'Barro Duro', 'Jardim Petrópolis',
    'Tabuleiro do Martins', 'Pitanguinha', 'Pinheiro', 'Ouro Preto', 'Antares',
    'Salvador Lyra', 'Benedito Bentes', 'Marechal Deodoro',
  ],
    mapsEmbed:
    'https://www.google.com/maps?q=' +
    encodeURIComponent('Rua Antenor Marinho de Melo, 36, Gruta de Lourdes, Maceió, AL, 57052-482') +
    '&output=embed',
}

export const whatsappLink = (text: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`