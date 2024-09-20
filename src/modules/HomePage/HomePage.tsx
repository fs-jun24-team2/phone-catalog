// eslint-disable-next-line no-unused-vars
import styles from './HomePage.module.scss';

import { useAppSelector } from '@/app/hooks';
import { useTranslation } from 'react-i18next';
import { PictureSlider } from './components/PictureSlider';
import { ProductsSlider } from './components/ProductsSlider';
import { ShopByCategory } from './components/ShopByCategory';
import cn from 'classnames';

export const HomePage = () => {
  const products = useAppSelector(state => state.products);
  const phonePlaceholders = Object.values(products.phones).slice(0, 10);
  const { t } = useTranslation();

  return (
    <div>
      {/* </div><div className={cn('grid-container')}> */}
      <div style={{ paddingTop: '100px' }}></div>
      {/* hidden */}
      <h1
        style={{ paddingTop: '100px' }}
        className={cn('style-h1', styles['home-page__title'])}
      >
        {t('home__title')}
      </h1>

      <div className={styles['home-page__content-container']}>
        {/* Banner */}
        <PictureSlider />

        {/* Section brand new models */}
        <ProductsSlider
          title={t('brand_new_models')}
          products={phonePlaceholders}
        />

        {/* Shop by category block with links to /phones, /tablets, and /accessories. */}
        <ShopByCategory />

        {/* Section hot prices */}
        <ProductsSlider title={t('hot_prices')} products={phonePlaceholders} />
      </div>
    </div>
  );
};
