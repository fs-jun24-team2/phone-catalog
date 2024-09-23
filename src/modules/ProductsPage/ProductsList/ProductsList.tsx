import React from 'react';
import cn from 'classnames';

import styles from './ProductsList.module.scss';

import { Product } from '@/types/Product';
import { ProductsCategory } from '@/types/ProductsCategory';
import { ProductCard } from '@/modules/shared/components/ProductCard';

type Props = {
  products: Product[];
  category: ProductsCategory;
};

export const ProductsList: React.FC<Props> = ({ products, category }) => {
  return (
    <div className={cn('grid-container', [styles['products-list']])}>
      {products.map(product => (
        <div key={product.id} className={styles['products-list__product']}>
          <ProductCard<Product> product={product} category={category} />
        </div>
      ))}
    </div>
  );
};
