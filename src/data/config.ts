export const brand = {
  name: 'Mimou',
  fullName: 'Mimou Presentes & Cestas',
  tagline: 'Presentes que falam por você',
  subtagline: 'Cestas, Chocolates e Pelúcias',
  city: 'São Paulo',
  whatsapp: '5511936190231',
  whatsappDisplay: '(11) 93619-0231',
  instagram: 'mimoucestassp',
  email: 'contato@mimoupresentes.com.br',
  hours: 'Seg a Sáb · 9h às 19h',
  neighborhoods: [
    'Vila Mariana', 'Moema', 'Pinheiros', 'Jardins', 'Itaim Bibi',
    'Perdizes', 'Vila Madalena', 'Vila Olímpia', 'Brooklin', 'Consolação',
  ],
} as const;

export function whatsappLink(message: string): string {
  return `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(message)}`;
}
