import { AggregateProduct } from '@/types/AggregateProduct';
import { client } from '../utils/fetchClient';
import { Product } from '@/types/Product';
import { ProductsCategory } from '@/types/ProductsCategory';

export const getProducts = (type: ProductsCategory) => {
  return client.get<Product[]>(`api/${type}.json`);
};

export const getProduct = (productId: string, type: ProductsCategory) => {
  return getProducts(type).then((products: Product[]) =>
    products.find(({ id }) => id === productId),
  );
};

export const getAllProducts = () => {
  return client.get<AggregateProduct[]>(`api/products.json`);
};
