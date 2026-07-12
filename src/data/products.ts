import productsData from './products.json';

export type Category = 'ofertas' | 'signature' | 'buques' | 'cestas' | 'aniversario';

export interface Product {
  slug: string;
  name: string;
  category: Category;
  description: string;
  contains?: string[];
  image?: string;
  price: number;
  priceFrom?: boolean;
  priceOld?: number;
}

export const categoryMeta: Record<Category, {
  slug: Category;
  label: string;
  title: string;
  subtitle?: string;
  kicker: string;
  surface: 'cream' | 'forest';
}> = {
  ofertas:     { slug: 'ofertas',     label: 'Ofertas',                 title: 'Ofertas do mês',           kicker: 'Selecionados especiais',      surface: 'cream'  },
  signature:   { slug: 'signature',   label: 'Mimou Signature',         title: 'Mimou Signature',          subtitle: 'Jardim Encantado', kicker: 'Coleção exclusiva',     surface: 'forest' },
  buques:      { slug: 'buques',      label: 'Buquês',                  title: 'Buquês',                   kicker: 'Feitos com carinho',          surface: 'cream'  },
  cestas:      { slug: 'cestas',      label: 'Cestas',                  title: 'Cestas de Presente',       kicker: 'Para adoçar momentos',        surface: 'forest' },
  aniversario: { slug: 'aniversario', label: 'Aniversário',             title: 'Presentes de Aniversário', kicker: 'Datas que merecem afeto',     surface: 'cream'  },
};

export const products: Product[] = productsData.products as Product[];

export function formatPrice(v: number): string {
  return v.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export function productsByCategory(cat: Category): Product[] {
  return products.filter((p) => p.category === cat);
}
