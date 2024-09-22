import { AggregateProduct } from '@/types/AggregateProduct';
import { Product } from '@/types/Product';

export const isAggregateProduct = (
  product: Product | AggregateProduct,
): product is AggregateProduct => {
  return 'itemId' in product && typeof product.itemId === 'string';
};
