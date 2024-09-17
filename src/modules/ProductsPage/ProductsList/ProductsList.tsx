import styles from './ProductsList.module.scss';

import { ProductCard } from '../../shared/components/ProductCard';
import { Product } from '@/types/Product';
import React from 'react';
import cn from 'classnames';

type Props = {
  products: { [id: string]: Product };
};
export const ProductsList: React.FC<Props> = ({ products }) => {
  return (
    <div className={cn('grid-container', [styles['products-list']])}>
      {Object.values(products).map(product => (
        <div key={product.id} className={styles['products-list__product']}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};
