import { ProductsCategory } from '@/types/ProductsCategory';

export const getProductPageTitle = (productsCategory: ProductsCategory) => {
  switch (productsCategory) {
    case ProductsCategory.phones:
      return 'Mobile phones';
    case ProductsCategory.tablets:
      return 'Tablets';
    case ProductsCategory.accessories:
      return 'Accessories';
    default:
      console.error('There is not such category');
  }
};
