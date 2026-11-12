import { Siren, Sparkles, Crown, Smile, Baby, Stethoscope, ShieldCheck, type LucideIcon } from 'lucide-react'

export const meta: Record<string, { icon: LucideIcon; summary: string }> = {
  'urgencia-odontologica-24h': { icon: Siren, summary: 'Alívio da dor e avaliação rápida, em qualquer horário.' },
  'limpeza-completa': { icon: ShieldCheck, summary: 'Remoção de placa e tártaro para prevenir cáries e inflamações.' },
  'tratamento-periodontal': { icon: ShieldCheck, summary: 'Cuidado especializado da gengiva e dos tecidos de sustentação dos dentes.' },
  'restauracao-dental': { icon: Stethoscope, summary: 'Reparo de dentes com cárie, fraturas ou desgaste.' },
  'placas-de-bruxismo': { icon: ShieldCheck, summary: 'Proteção sob medida contra o desgaste e o apertamento dos dentes.' },
  'extracao-dentaria': { icon: Stethoscope, summary: 'Quando o dente não pode ser recuperado, com anestesia local.' },
  'extracao-de-siso': { icon: Stethoscope, summary: 'Avaliação e remoção dos sisos, quando indicado.' },
  'clareamento-dental': { icon: Sparkles, summary: 'Clareamento com avaliação prévia da saúde da boca.' },
  'coroa-em-resina-e-porcelana': { icon: Crown, summary: 'Proteção e reforço para dentes muito danificados.' },
  'proteses-totais-e-parciais': { icon: Crown, summary: 'Reposição de todos ou de alguns dentes com próteses removíveis.' },
  'facetas-em-resina': { icon: Sparkles, summary: 'Ajuste de forma, cor e pequenas imperfeições com resina.' },
  'facetas-em-porcelana': { icon: Sparkles, summary: 'Lâminas de porcelana para melhorar a forma e a cor dos dentes.' },
  'harmonizacao-orofacial': { icon: Sparkles, summary: 'Avaliação individual para o equilíbrio estético e funcional do rosto.' },
  'aparelho-ortodontico': { icon: Smile, summary: 'Alinhamento dos dentes e correção da mordida.' },
  'alinhador-dental': { icon: Smile, summary: 'Placas transparentes e removíveis, conforme a indicação.' },
  'ortopedia-facial': { icon: Smile, summary: 'Equilíbrio no desenvolvimento dos ossos e músculos da face.' },
  'odontopediatria': { icon: Baby, summary: 'Cuidado acolhedor com a saúde bucal das crianças.' },
}