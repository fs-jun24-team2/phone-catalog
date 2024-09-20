import { ProductsCategory } from './ProductsCategory';

export type CartItems = {
  [id: string]: number;
};

export type CartItemType = {
  category: ProductsCategory;
  id: string;
  amount: number;
  price: number;
};
