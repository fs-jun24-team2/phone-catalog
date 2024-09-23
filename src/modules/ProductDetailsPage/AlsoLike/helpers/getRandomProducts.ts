import { Product } from '@/types/Product';

export const getRandomProducts = (
  products: Product[],
  count: number,
  removeId: string,
): Product[] => {
  const shuffled = products.sort(() => 0.5 - Math.random());
  const clearedProducts = shuffled.filter(({ id }) => id !== removeId);
  return clearedProducts.slice(0, count);
};
