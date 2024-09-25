import React, { useEffect, useState } from 'react';
import cn from 'classnames';

import styles from './ProductsList.module.scss';

import { Product } from '@/types/Product';
import { ProductsCategory } from '@/types/ProductsCategory';
import { ProductCard } from '@/modules/shared/components/ProductCard';
import { ProductCardSkeleton } from '../../shared/components/Skeletons/ProductCardSkeleton';

type Props = {
  products: Product[];
  category: ProductsCategory;
  isLoading: boolean;
};

export const ProductsList: React.FC<Props> = ({
  products,
  category,
  isLoading,
}) => {
  const [isDelayedLoading, setIsDelayedLoading] = useState(true); // Додаємо стан для затримки

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDelayedLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={cn('grid-container', [styles['products-list']])}>
      {isLoading || isDelayedLoading
        ? Array(8)
            .fill(null)
            .map((_, index) => (
              <div key={index} className={styles['products-list__product']}>
                <ProductCardSkeleton />
              </div>
            ))
        : products.map(product => (
            <div key={product.id} className={styles['products-list__product']}>
              <ProductCard<Product> product={product} category={category} />
            </div>
          ))}
    </div>
  );
};
