import { Path } from '@/types/Path';
import { ProductsCategory } from '@/types/ProductsCategory';
import { useTranslation } from 'react-i18next';

interface CategoriesDataProps {
  phoneAmount: number;
  tabletsAmount: number;
  accessoriesAmount: number;
}
export const useCategoriesData = ({
  phoneAmount,
  tabletsAmount,
  accessoriesAmount,
}: CategoriesDataProps) => {
  const { t } = useTranslation('translation', { keyPrefix: 'category' });
  return [
    {
      img: 'img/category-phones.png',
      title: t(ProductsCategory.phones),
      amount: phoneAmount,
      styleBg: 'mobiles',
      path: Path.phones,
    },
    {
      img: 'img/category-tablets.png',
      title: t(ProductsCategory.tablets),
      amount: tabletsAmount,
      styleBg: 'tablets',
      path: Path.tablets,
    },
    {
      img: 'img/category-accessories.png',
      title: t(ProductsCategory.accessories),
      amount: accessoriesAmount,
      styleBg: 'accessories',
      path: Path.accessories,
    },
  ];
};
