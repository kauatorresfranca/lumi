import { Siren, Sparkles, Crown, Smile, Baby, Stethoscope, ShieldCheck, type LucideIcon } from 'lucide-react'

export const meta: Record<string, { icon: LucideIcon; summary: string }> = {
  'urgencia-odontologica-24h': { icon: Siren, summary: 'Alívio da dor e avaliação rápida, em qualquer horário.' },
  'limpeza-dental': { icon: ShieldCheck, summary: 'Remoção de placa e tártaro para prevenir cáries e inflamações.' },
  'restauracao-dental': { icon: Stethoscope, summary: 'Reparo de dentes com cárie, fraturas ou desgaste.' },
  'extracao-dentaria': { icon: Stethoscope, summary: 'Quando o dente não pode ser recuperado, com anestesia local.' },
  'extracao-de-siso': { icon: Stethoscope, summary: 'Avaliação e remoção dos sisos, quando indicado.' },
  'clareamento-dental': { icon: Sparkles, summary: 'Clareamento com avaliação prévia da saúde da boca.' },
  'protese-fixa': { icon: Crown, summary: 'Dentes repostos com peças cimentadas, como coroas e pontes.' },
  'proteses-totais-e-removiveis': { icon: Crown, summary: 'Reposição de todos ou de alguns dentes com próteses removíveis.' },
  'coroa-em-resina-e-porcelana': { icon: Crown, summary: 'Proteção e reforço para dentes muito danificados.' },
  'facetas-em-resina': { icon: Sparkles, summary: 'Ajuste de forma, cor e pequenas imperfeições com resina.' },
  'facetas-em-porcelana': { icon: Sparkles, summary: 'Lâminas de porcelana para melhorar a forma e a cor dos dentes.' },
  'harmonizacao-orofacial': { icon: Sparkles, summary: 'Avaliação individual para o equilíbrio estético e funcional do rosto.' },
  botox: { icon: Sparkles, summary: 'Toxina botulínica aplicada por profissional habilitado, após avaliação.' },
  'aparelho-ortodontico': { icon: Smile, summary: 'Alinhamento dos dentes e correção da mordida.' },
  'alinhador-dental': { icon: Smile, summary: 'Placas transparentes e removíveis, conforme a indicação.' },
  odontopediatria: { icon: Baby, summary: 'Cuidado acolhedor com a saúde bucal das crianças.' },
}