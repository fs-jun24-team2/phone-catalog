import { client } from '../utils/fetchClient';
import { Product } from '@/types/Product';
import { ProductsCategory } from '@/types/ProductsCategory';

export const getProducts = (type: ProductsCategory) => {
  return client.get<Product[]>(`api/${type}.json`);
};

export const getPhone = (type: ProductsCategory, productId: string) => {
  return getProducts(type).then((products: Product[]) =>
    products.find(({ id }) => id === productId),
  );
};
