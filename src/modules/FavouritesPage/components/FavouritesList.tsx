import React from 'react';
import cn from 'classnames';
import styles from '../../ProductsPage/ProductsList/ProductsList.module.scss';

import { FavouriteCard } from './FavouriteCard';
import { FavouriteProduct } from '@/types/FavouriteProduct';

type Props = {
  items: FavouriteProduct[];
};

export const FavouritesList: React.FC<Props> = ({ items }) => {
  return (
    <div className={cn('grid-container', [styles['products-list']])}>
      {items.map(item => (
        <div key={item.id} className={styles['products-list__product']}>
          <FavouriteCard item={item} />
        </div>
      ))}
    </div>
  );
};
