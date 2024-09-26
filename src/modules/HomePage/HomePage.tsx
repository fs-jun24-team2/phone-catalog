import styles from './HomePage.module.scss';
import { useAppSelector } from '@/app/hooks';
import { useTranslation } from 'react-i18next';
import { PictureSlider } from './components/PictureSlider';
import { ProductsSlider } from './components/ProductsSlider';
import { ShopByCategory } from './components/ShopByCategory';
import cn from 'classnames';

import {
  getHotPriceProduct,
  getNewBrandProduct,
} from '@/features/aggregateSlice';
import { AggregateProduct } from '@/types/AggregateProduct';
import { useEffect, useState } from 'react';

export const HomePage = () => {
  const { t } = useTranslation();
  const hotPriceProducts = useAppSelector(getHotPriceProduct);
  const newBrandProduct = useAppSelector(getNewBrandProduct);
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
    <>
      {/* hidden */}
      <h1
        className={cn('style-h1', styles['home-page__title'], {
          [styles['home-page__title-dark']]: isDarkTheme,
        })}
      >
        {t('home__title')}
      </h1>

      <div className={styles['home-page__content-container']}>
        {/* Banner */}
        <PictureSlider />

        {/* Section brand new models */}
        <ProductsSlider<AggregateProduct>
          title={t('brand_new_models')}
          products={newBrandProduct}
        />

        {/* Shop by category block with links to /phones, /tablets, and /accessories. */}
        <ShopByCategory />

        {/* Section hot prices */}
        <ProductsSlider<AggregateProduct>
          title={t('hot_prices')}
          products={hotPriceProducts}
        />
      </div>
    </>
  );
};
