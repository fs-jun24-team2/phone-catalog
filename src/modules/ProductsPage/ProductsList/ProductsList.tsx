import styles from './ProductsList.module.scss';

import { ProductCard } from '../../shared/components/ProductCard';
import { Product } from '@/types/Product';
import React from 'react';
import cn from 'classnames';
import { ProductsCategory } from '@/types/ProductsCategory';

type Props = {
  products: { [id: string]: Product };
  category: ProductsCategory;
};

export const ProductsList: React.FC<Props> = ({ products, category }) => {
  return (
    <div className={cn('grid-container', [styles['products-list']])}>
      {Object.values(products).map(product => (
        <div key={product.id} className={styles['products-list__product']}>
          <ProductCard product={product} category={category} />
        </div>
      ))}
    </div>
  );
};
