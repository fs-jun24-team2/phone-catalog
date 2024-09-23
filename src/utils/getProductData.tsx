import { AggregateProduct } from '@/types/AggregateProduct';
import { Product } from '@/types/Product';

type ReturnProps = {
  id: string;
  name: string;
  capacity: string;
  priceRegular: number;
  priceDiscount: number;
  image: string;
  screen: string;
  ram: string;
};

export const getProductData = <T extends Product | AggregateProduct>(
  product: T,
): ReturnProps => {
  const data = isAggregateProduct(product)
    ? {
        id: product.itemId,
        name: product.name,
        priceRegular: product.fullPrice,
        priceDiscount: product.price,
        capacity: product.capacity,
        screen: product.screen,
        ram: product.ram,
      }
    : (product as Product);

  const image = isAggregateProduct(product)
    ? product.image
    : product.images?.[0];

  return { ...data, image };
};

const isAggregateProduct = (
  product: Product | AggregateProduct,
): product is AggregateProduct => {
  return 'itemId' in product && typeof product.itemId === 'string';
};
