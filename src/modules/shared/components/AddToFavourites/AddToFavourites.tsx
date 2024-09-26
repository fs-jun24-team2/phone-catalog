import styles from './AddToFavourites.module.scss';

import { useEffect, useState } from 'react';
import cn from 'classnames';
import { useAppDispatch } from '@/app/hooks';
import { toggleFavourite } from '@/features/favouritesSlice';
import { hasFavouritesProduct } from '@/utils/hasFavouritesProduct';
import { Product } from '@/types/Product';
import { ProductsCategory } from '@/types/ProductsCategory';
import { AggregateProduct } from '@/types/AggregateProduct';

type Props = {
  product: Product | AggregateProduct;
  category: ProductsCategory;
  id: string;
  className?: string;
};

export const AddToFavourites = ({
  className,
  product,
  id,
  category,
}: Props) => {
  const dispatch = useAppDispatch();
  const [isAddedToFavourites, setIsAddedToFavourites] = useState(
    hasFavouritesProduct(id),
  );

  const handleAddFavourites = () => {
    dispatch(toggleFavourite({ product, category }));
    setIsAddedToFavourites(prev => !prev);
  };

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      const isDark = document.body.classList.contains('dark_theme');
      setIsDarkTheme(isDark);
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.body, { attributes: true });

    return () => observer.disconnect();
  });

  return (
    <button
      className={cn(styles['btn-favourites'], className, {
        [styles['btn-favourites--added']]: isAddedToFavourites,
        [styles['btn-favourites-dark']]: isDarkTheme,
      })}
      onClick={handleAddFavourites}
    ></button>
  );
};
