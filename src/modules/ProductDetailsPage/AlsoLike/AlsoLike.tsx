import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ProductsCategory } from '@/types/ProductsCategory';
import { Product } from '@/types/Product';
import { ProductsSlider } from '@/modules/HomePage/components/ProductsSlider';
import { getProducts } from '@/api/products';
import { getRandomProducts } from './helpers/getRandomProducts';
import { PRODUCT_SLIDER_NUM } from '@/constants';

type Props = {
  category: ProductsCategory;
  currentId: string;
};

export const AlsoLike: React.FC<Props> = ({ category, currentId }) => {
  const { t } = useTranslation();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts(category).then((productsFromServer: Product[]) => {
      const randomProducts = getRandomProducts(
        productsFromServer,
        PRODUCT_SLIDER_NUM,
        currentId,
      );
      setProducts(randomProducts);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentId]);

  return (
    <ProductsSlider<Product>
      title={t('also_like')}
      products={products}
      category={category}
    />
  );
};
