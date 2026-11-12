export const team = {
  luiz: { name: 'Dr. Luiz Miguel', path: '/dr-luiz-miguel', cro: 'CRO/AL 6549', instagram: 'https://www.instagram.com/dr.luizmigueltorres/' },
  camila: { name: 'Dra. Camila Matos', path: '/dra-camila-matos', cro: 'CRO/AL 6082', instagram: 'https://www.instagram.com/dra.camilamatoss/' },
}

export type TeamKey = keyof typeof team

export type Treatment = {
  slug: string
  name: string
  keyword: string
  intro: string
  dentists: TeamKey[]
  ready?: boolean // true = texto aprovado pelos dentistas, entra no Google
  forWhom?: string
  steps?: string[]
  faq?: { q: string; a: string }[]
}

export const treatments: Treatment[] = [
  {
    slug: 'urgencia-odontologica-24h',
    name: 'Urgência odontológica',
    keyword: 'urgência odontológica 24h em Maceió',
    dentists: ['luiz', 'camila'],
    ready: true,
    intro: 'Dor de dente, dente quebrado ou inchaço no rosto? A Lumi Odontologia faz atendimento de urgência em Maceió para avaliar o seu caso, aliviar a dor e indicar o tratamento adequado. Chame no WhatsApp e conte o que está acontecendo.',
    forWhom: 'Quem está com dor de dente intensa ou persistente, dente fraturado, inchaço na gengiva ou no rosto, sangramento que não para depois de uma extração, restaurações ou prótese que quebraram ou se soltaram, Aparelho ortodôntico causando dor, machucados ou desconforto, Traumas e acidentes envolvendo dentes ou a estrutura da boca.',
    steps: [
      'Você chama no WhatsApp e explica o que está sentindo.',
      'Combinamos o melhor momento para o atendimento.',
      'O dentista avalia, alivia a dor e explica o que precisa ser feito.',
      'Se for necessário um tratamento complementar, você recebe o plano de tratamento com as etapas explicadas.',
    ],
    faq: [
      { q: 'Preciso marcar antes?', a: 'Basta chamar no WhatsApp. Respondemos a qualquer horário, inclusive aos finais de semana.' },
      { q: 'Como funciona o atendimento de urgência?', a: 'Atendemos urgências em qualquer horário. Chame no WhatsApp, conte o que está sentindo e combinamos o atendimento.' },
      { q: 'Quando devo procurar um hospital em vez do consultório?', a: 'Se o inchaço dificultar a respiração ou a deglutição, ou se houver febre alta, procure um pronto-atendimento hospitalar imediatamente.' },
    ],
  },
  {
    slug: 'limpeza-dental',
    name: 'Limpeza dental',
    keyword: 'limpeza dental em Maceió',
    dentists: ['luiz', 'camila'],
    ready: true,
    intro: 'A limpeza dental remove placa bacteriana e tártaro que a escovação sozinha não alcança, ajudando a prevenir cáries e inflamações na gengiva. É um cuidado simples e importante para a saúde da boca.',
    forWhom: 'Qualquer pessoa, como parte da rotina de cuidados. É especialmente importante para quem percebe tártaro, mau hálito ou gengiva que sangra.',
    steps: [
      'Avaliação da saúde da boca e da gengiva.',
      'Remoção de placa e tártaro.',
      'Polimento dos dentes.',
      'Orientações de higiene e definição do intervalo de retorno.',
    ],
    faq: [
      { q: 'Com que frequência devo fazer limpeza?', a: 'O intervalo é definido pelo dentista conforme a necessidade de cada pessoa, e costuma ser em torno de seis meses.' },
      { q: 'A gengiva pode sangrar durante a limpeza?', a: 'Se houver inflamação, pode ocorrer algum sangramento. O dentista avalia e orienta os cuidados.' },
    ],
  },
  {
    slug: 'restauracao-dental',
    name: 'Restauração dental',
    keyword: 'restauração dental em Maceió',
    dentists: ['luiz', 'camila'],
    ready: true,
    intro: 'A restauração repara dentes afetados por cárie, fraturas ou desgaste, devolvendo forma e função à mordida. Na Lumi Odontologia, o dentista avalia o seu caso e explica o que será feito antes de começar.',
    forWhom: 'Quem tem um dente com cárie, quebrado, lascado ou com restauração antiga danificada.',
    steps: [
      'Avaliação clínica, com exame de imagem quando necessário.',
      'Anestesia local, se indicada, e remoção do tecido afetado.',
      'Restauração do dente com material adequado ao caso.',
      'Ajuste da mordida e polimento.',
    ],
    faq: [
      { q: 'A restauração dói?', a: 'Quando necessário, usamos anestesia local para o procedimento ser confortável.' },
      { q: 'Quanto tempo dura uma restauração?', a: 'Depende do caso, da higiene e dos hábitos de cada pessoa. Consultas de revisão ajudam a acompanhar.' },
    ],
  },
  {
    slug: 'extracao-dentaria',
    name: 'Extração dentária',
    keyword: 'extração de dente em Maceió',
    dentists: ['luiz', 'camila'],
    ready: true,
    intro: 'A extração dentária é indicada quando o dente não pode ser recuperado ou quando sua remoção faz parte de um plano de tratamento. Antes de qualquer decisão, o dentista avalia as alternativas e explica cada etapa.',
    forWhom: 'Quem tem dente com cárie muito extensa, fratura que não permite restauração, infecção ou mobilidade, ou um dente que precisa ser removido para outro tratamento. A indicação é definida na avaliação.',
    steps: [
      'Avaliação clínica e exame de imagem.',
      'Explicação das opções e do procedimento.',
      'Extração com anestesia local.',
      'Orientações de cuidados e acompanhamento.',
    ],
    faq: [
      { q: 'A extração dói?', a: 'O procedimento é feito com anestesia local. Depois, pode haver algum desconforto, e o dentista orienta como lidar com ele.' },
      { q: 'Preciso repor o dente depois?', a: 'Em muitos casos vale avaliar a reposição, e o dentista apresenta as opções possíveis.' },
    ],
  },
  {
    slug: 'extracao-de-siso',
    name: 'Extração de siso',
    keyword: 'extração de siso em Maceió',
    dentists: ['luiz'],
    ready: true,
    intro: 'Os sisos, ou terceiros molares, nem sempre têm espaço para nascer. Quando causam dor, infecção ou problemas nos dentes vizinhos, a extração pode ser indicada. Na Lumi Odontologia, o dentista avalia o seu caso e explica cada etapa antes de começar.',
    forWhom: 'Quem sente dor ou inchaço na região do fundo da boca, tem siso parcialmente nascido, cáries ou infecções recorrentes na região, ou apresenta pressão sobre os dentes vizinhos. A indicação é sempre definida na avaliação.',
    steps: [
      'Avaliação clínica, com exame de imagem quando necessário.',
      'Explicação da técnica e das orientações para antes e depois.',
      'Extração com anestesia local.',
      'Orientações de cuidados e acompanhamento.',
    ],
    faq: [
      { q: 'A extração de siso dói?', a: 'O procedimento é feito com anestesia local. Depois, pode haver algum desconforto e inchaço, e o dentista orienta como lidar com eles.' },
      { q: 'Todo siso precisa ser removido?', a: 'Não. A indicação depende da posição do dente, do espaço disponível e de sintomas, e é definida na avaliação.' },
    ],
  },
  {
    slug: 'clareamento-dental',
    name: 'Clareamento dental',
    keyword: 'clareamento dental em Maceió',
    dentists: ['luiz', 'camila'],
    ready: true,
    intro: 'O clareamento dental é um procedimento estético que busca clarear a cor dos dentes. Antes de começar, o dentista avalia a saúde da boca e indica a técnica mais adequada para o seu caso.',
    forWhom: 'Quem deseja dentes mais claros e está com a saúde bucal em dia. Cáries e gengivite devem ser tratadas antes, e a indicação é definida na avaliação.',
    steps: [
      'Avaliação da saúde bucal e da cor dos dentes.',
      'Tratamento de problemas existentes, se houver.',
      'Aplicação da técnica indicada, com orientações.',
      'Acompanhamento e cuidados para manter o resultado.',
    ],
    faq: [
      { q: 'O clareamento causa sensibilidade?', a: 'Pode ocorrer sensibilidade temporária. O dentista avalia e orienta como reduzi-la.' },
      { q: 'Restaurações também clareiam?', a: 'Não. Materiais de restauração não mudam de cor com o clareamento, e isso é considerado no planejamento.' },
    ],
  },
  {
    slug: 'protese-fixa',
    name: 'Prótese fixa',
    keyword: 'prótese fixa em Maceió',
    dentists: ['luiz', 'camila'],
    ready: true,
    intro: 'A prótese fixa repõe ou recompõe dentes com peças cimentadas, que não são removidas pelo paciente. Pode incluir coroas e pontes, conforme o planejamento de cada caso.',
    forWhom: 'Quem perdeu um ou mais dentes, ou tem dentes muito danificados, e busca uma solução fixa. A indicação depende da avaliação da boca e dos dentes de apoio.',
    steps: [
      'Avaliação clínica e exames de imagem.',
      'Planejamento e explicação das opções.',
      'Preparo dos dentes e moldagem.',
      'Prova, ajustes e cimentação da prótese.',
    ],
    faq: [
      { q: 'Qual a diferença entre prótese fixa e removível?', a: 'A fixa fica cimentada e só o dentista a retira. A removível pode ser retirada pelo paciente para higienização.' },
      { q: 'Os dentes vizinhos precisam ser preparados?', a: 'Em alguns tipos de prótese, sim. Isso é definido e explicado no planejamento.' },
    ],
  },
  {
    slug: 'proteses-totais-e-parciais',
    name: 'Próteses totais e parciais',
    keyword: 'prótese dentária em Maceió',
    dentists: ['luiz'],
    ready: true,
    intro: 'As próteses totais e parciais repõem dentes ausentes para ajudar na mastigação, na fala e na aparência do sorriso. Na Lumi Odontologia, cada prótese é planejada para o seu caso e ajustada com acompanhamento.',
    forWhom: 'Quem perdeu todos os dentes de uma arcada (prótese total) ou apenas alguns dentes (prótese parcial removível) e busca repor essas ausências.',
    steps: [
      'Avaliação da saúde da boca e conversa sobre as opções.',
      'Moldagem e registro das medidas.',
      'Prova da prótese e ajustes.',
      'Instalação e orientações de higiene e uso.',
      'Retornos para ajustes, quando necessários.',
    ],
    faq: [
      { q: 'Preciso de um tempo para me adaptar à prótese?', a: 'Sim, é comum haver um período de adaptação. Os retornos servem para ajustar o conforto e o encaixe.' },
      { q: 'Qual a diferença entre prótese total e parcial?', a: 'A total substitui todos os dentes de uma arcada. A parcial substitui apenas alguns dentes, apoiando-se nos que permanecem.' },
    ],
  },
  {
    slug: 'coroa-em-resina-e-porcelana',
    name: 'Coroa em resina e porcelana',
    keyword: 'coroa dentária em Maceió',
    dentists: ['luiz'],
    ready: true,
    intro: 'A coroa dentária é uma cobertura que recompõe a forma, a função e a proteção de um dente muito danificado ou que já passou por tratamento de canal. Pode ser feita em resina ou em porcelana, conforme cada caso.',
    forWhom: 'Quem tem dente muito destruído por cárie, fraturado ou enfraquecido, e precisa de proteção e reforço.',
    steps: [
      'Avaliação clínica e exame de imagem.',
      'Preparo do dente e moldagem.',
      'Coroa provisória, quando necessária.',
      'Prova, ajustes e instalação da coroa definitiva.',
    ],
    faq: [
      { q: 'Resina ou porcelana?', a: 'A escolha depende da posição do dente, da mordida, da estética desejada e do planejamento definido na avaliação.' },
      { q: 'A coroa dura para sempre?', a: 'Não. A durabilidade varia com os cuidados de higiene, os hábitos e as condições de cada boca.' },
    ],
  },
  {
    slug: 'facetas-em-resina',
    name: 'Facetas em resina',
    keyword: 'facetas em resina em Maceió',
    dentists: ['camila'],
    ready: true,
    intro: 'As facetas em resina são camadas finas de resina composta aplicadas na frente do dente para melhorar a forma, a cor ou pequenas imperfeições. A indicação depende de uma avaliação individual.',
    forWhom: 'Quem deseja corrigir pequenos espaços, lascas ou alterações de cor e formato, com a saúde bucal em dia.',
    steps: [
      'Avaliação e conversa sobre o que você deseja.',
      'Planejamento da forma e da cor.',
      'Aplicação da resina diretamente nos dentes.',
      'Ajustes e polimento, com orientações de cuidado.',
    ],
    faq: [
      { q: 'A faceta em resina desgasta o dente?', a: 'Em muitos casos, o desgaste é pequeno ou inexistente. Isso é definido na avaliação.' },
      { q: 'A resina pode manchar?', a: 'Com o tempo, pode haver alteração de cor. Higiene e hábitos influenciam, e o dentista orienta os cuidados.' },
    ],
  },
  {
    slug: 'facetas-em-porcelana',
    name: 'Facetas em porcelana',
    keyword: 'facetas em porcelana em Maceió',
    dentists: ['luiz', 'camila'],
    ready: true,
    intro: 'As facetas em porcelana são lâminas finas, produzidas em laboratório e coladas na frente dos dentes para melhorar a forma, a cor e o aspecto do sorriso. A indicação depende de planejamento cuidadoso.',
    forWhom: 'Quem deseja alterar forma, tamanho ou cor dos dentes da frente e tem saúde bucal adequada. Nem todos os casos são indicados, e isso é definido na avaliação.',
    steps: [
      'Avaliação e conversa sobre o resultado desejado.',
      'Planejamento da forma e da cor.',
      'Preparo dos dentes, quando necessário, e moldagem.',
      'Prova e colagem das facetas, com orientações de cuidado.',
    ],
    faq: [
      { q: 'Faceta em porcelana ou em resina?', a: 'Depende do caso, do que você busca e da condição dos seus dentes. Explicamos as diferenças na avaliação.' },
      { q: 'Precisa desgastar o dente?', a: 'Pode ser necessário um preparo, em maior ou menor grau. Isso é definido e explicado no planejamento.' },
    ],
  },
  {
    slug: 'harmonizacao-orofacial-e-botox',
    name: 'Harmonização orofacial e botox',
    keyword: 'harmonização orofacial e botox em Maceió',
    dentists: ['camila'],
    ready: true,
    intro: 'A harmonização orofacial reúne procedimentos realizados por dentistas habilitados — incluindo a aplicação de toxina botulínica (botox) — para equilibrar aspectos estéticos e funcionais do rosto e da boca. Cada plano é individual e começa por uma avaliação.',
    forWhom: 'Pessoas adultas que desejam conhecer opções estéticas ou funcionais para o rosto e a boca, com acompanhamento profissional. A avaliação considera histórico de saúde, expectativas e segurança.',
    steps: [
      'Avaliação do rosto, da boca e do histórico de saúde.',
      'Conversa sobre indicações, expectativas e riscos.',
      'Planejamento individual e execução pelo profissional habilitado.',
      'Orientações pós-procedimento e retorno, quando necessário.',
    ],
    faq: [
      { q: 'Harmonização facial e harmonização orofacial são a mesma coisa?', a: 'O termo orofacial é o usado na odontologia e inclui a boca e a região ao redor, abrangendo procedimentos como a aplicação de botox. Explicamos o que faz sentido para o seu caso na avaliação.' },
      { q: 'Quanto tempo dura o efeito do botox?', a: 'A duração varia de pessoa para pessoa conforme o organismo e a área aplicada, e é explicada na avaliação.' },
      { q: 'Quem realiza os procedimentos?', a: 'A avaliação e a execução são feitas pela Dra. Camila Matos, cirurgiã-dentista.' },
    ],
  },
  {
    slug: 'aparelho-ortodontico',
    name: 'Aparelho ortodôntico',
    keyword: 'aparelho ortodôntico em Maceió',
    dentists: ['camila'],
    ready: true,
    intro: 'O aparelho ortodôntico ajuda a alinhar os dentes e a corrigir a mordida. Na Lumi Odontologia, o plano é definido depois de uma avaliação completa, com acompanhamento ao longo de todo o tratamento.',
    forWhom: 'Crianças, adolescentes e adultos com dentes desalinhados, espaços entre os dentes ou problemas de mordida. A indicação depende de avaliação.',
    steps: [
      'Avaliação e documentação ortodôntica (fotos e exames de imagem).',
      'Explicação do plano e do tempo estimado.',
      'Instalação do aparelho.',
      'Consultas periódicas de manutenção.',
      'Fase de contenção ao final do tratamento.',
    ],
    faq: [
      { q: 'Quanto tempo dura o tratamento?', a: 'Depende do caso. O tempo estimado é explicado após a avaliação.' },
      { q: 'Adultos podem usar aparelho?', a: 'Sim. A indicação é avaliada individualmente.' },
    ],
  },
  {
    slug: 'alinhador-dental',
    name: 'Alinhador dental',
    keyword: 'alinhador dental em Maceió',
    dentists: ['camila'],
    ready: true,
    intro: 'O alinhador dental é uma alternativa ao aparelho fixo, feito com placas transparentes e parciais trocadas em sequência. A indicação depende de uma avaliação ortodôntica.',
    forWhom: 'Quem busca alinhar os dentes de forma discreta e consegue seguir a rotina de uso orientada pelo dentista. Nem todos os casos são indicados para alinhador.',
    steps: [
      'Avaliação e documentação do caso.',
      'Planejamento e explicação do tratamento.',
      'Entrega das placas e orientações de uso e higiene.',
      'Acompanhamento com consultas periódicas.',
    ],
    faq: [
      { q: 'Posso retirar o alinhador?', a: 'Sim, ele é removível, mas deve ser usado pelo tempo diário que o dentista orientar para o tratamento funcionar.' },
      { q: 'Qualquer pessoa pode usar alinhador?', a: 'Não. A indicação depende da complexidade do caso e é definida na avaliação.' },
    ],
  },
  {
    slug: 'odontopediatria',
    name: 'Odontopediatria',
    keyword: 'dentista infantil em Maceió',
    dentists: ['camila'],
    ready: true,
    intro: 'A odontopediatria cuida da saúde bucal de bebês, crianças e adolescentes, com uma abordagem acolhedora e adaptada a cada idade. O objetivo é prevenir problemas e criar uma relação tranquila com o dentista.',
    forWhom: 'Crianças e adolescentes, desde os primeiros dentes, para prevenção, acompanhamento e tratamento. Também para crianças com medo ou ansiedade.',
    steps: [
      'Conversa com os responsáveis e acolhimento da criança.',
      'Avaliação da saúde bucal.',
      'Orientações de higiene e alimentação.',
      'Tratamento, quando necessário, com calma e explicação adequada à idade.',
    ],
    faq: [
      { q: 'Com que idade levar meu filho ao dentista?', a: 'Quanto antes, melhor. Muitos profissionais recomendam a primeira visita por volta do primeiro ano de vida.' },
      { q: 'Meu filho tem medo. E agora?', a: 'O atendimento é feito com calma, conversa e sem pressa, respeitando o tempo da criança.' },
    ],
  },
]