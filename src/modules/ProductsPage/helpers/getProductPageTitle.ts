import { ProductsCategory } from '@/types/ProductsCategory';

export const getProductPageTitle = (productsCategory: ProductsCategory) => {
  switch (productsCategory) {
    case ProductsCategory.phones:
      return 'category.phones';
    case ProductsCategory.tablets:
      return 'category.tablets';
    case ProductsCategory.accessories:
      return 'category.accessories';
    default:
      console.error('There is not such category');
      return '';
  }
};
