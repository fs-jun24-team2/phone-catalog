import { AggregateProduct } from './AggregateProduct';
import { Product } from './Product';
import { ProductsCategory } from './ProductsCategory';

export type FavouriteProduct = {
  id: string;
  category: ProductsCategory;
  product: Product | AggregateProduct;
};
