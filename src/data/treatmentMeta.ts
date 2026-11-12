import { Siren, Sparkles, Crown, Smile, Baby, Stethoscope, ShieldCheck, type LucideIcon } from 'lucide-react'

export const meta: Record<string, { icon: LucideIcon; summary: string }> = {
  'urgencia-odontologica-24h': { icon: Siren, summary: 'Alívio da dor e avaliação rápida, em qualquer horário.' },
  'limpeza-dental': { icon: ShieldCheck, summary: 'Remoção de placa e tártaro para prevenir cáries e inflamações.' },
  'restauracao-dental': { icon: Stethoscope, summary: 'Reparo de dentes com cárie, fraturas ou desgaste.' },
  'extracao-dentaria': { icon: Stethoscope, summary: 'Quando o dente não pode ser recuperado, com anestesia local.' },
  'extracao-de-siso': { icon: Stethoscope, summary: 'Avaliação e remoção dos sisos, quando indicado.' },
  'clareamento-dental': { icon: Sparkles, summary: 'Clareamento com avaliação prévia da saúde da boca.' },
  'protese-fixa-e-coroa': { icon: Crown, summary: 'Reposição e proteção de dentes com peças cimentadas em resina ou porcelana.' },
  'proteses-totais-e-parciais': { icon: Crown, summary: 'Reposição de todos ou de alguns dentes com próteses removíveis.' },
  'facetas-em-resina': { icon: Sparkles, summary: 'Ajuste de forma, cor e pequenas imperfeições com resina.' },
  'facetas-em-porcelana': { icon: Sparkles, summary: 'Lâminas de porcelana para melhorar a forma e a cor dos dentes.' },
  'harmonizacao-orofacial-e-botox': { icon: Sparkles, summary: 'Avaliação individual para o equilíbrio estético e funcional do rosto.' },
  'aparelho-ortodontico': { icon: Smile, summary: 'Alinhamento dos dentes e correção da mordida.' },
  'alinhador-dental': { icon: Smile, summary: 'Placas transparentes e removíveis, conforme a indicação.' },
  'ortopedia-facial': { icon: Smile, summary: 'Equilíbrio no desenvolvimento dos ossos e músculos da face.' },
  odontopediatria: { icon: Baby, summary: 'Cuidado acolhedor com a saúde bucal das crianças.' },
}