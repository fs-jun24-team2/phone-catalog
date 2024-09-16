import styles from './ProductsList.module.scss';

import { ProductCard } from '../ProductCard';
import { Phone } from '../../../../types/Phone';
import React from 'react';
import cn from 'classnames';

type Props = {
  products: Phone[];
};

export const ProductsList: React.FC<Props> = ({ products }) => {
  return (
    <div className={cn('grid-container', [styles['products-list']])}>
      {products.map(product => (
        <div className={styles['products-list__product']}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};
