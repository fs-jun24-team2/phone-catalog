import { Product } from '@/types/Product';

export const getRandomProducts = (
  products: Product[],
  count: number,
): Product[] => {
  const shuffled = products.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
