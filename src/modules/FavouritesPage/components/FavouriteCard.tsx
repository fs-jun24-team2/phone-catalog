import React from 'react';
import { Product } from '@/types/Product';
import { isAggregateProduct } from '@/modules/shared/helpers/isAggregateProduct';
import { AggregateProduct } from '@/types/AggregateProduct';
import { FavouriteProduct } from '@/types/FavouriteProduct';
import { ProductCard } from '@/modules/shared/components/ProductCard';

type Props = {
  item: FavouriteProduct;
};

export const FavouriteCard: React.FC<Props> = ({ item }) => {
  if (isAggregateProduct(item.product)) {
    return (
      <ProductCard<AggregateProduct>
        product={item.product}
        category={item.category}
      />
    );
  }
  return (
    <ProductCard<Product> product={item.product} category={item.category} />
  );
};
