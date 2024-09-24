import styles from './HomePage.module.scss';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { useTranslation } from 'react-i18next';
import { PictureSlider } from './components/PictureSlider';
import { ProductsSlider } from './components/ProductsSlider';
import { ShopByCategory } from './components/ShopByCategory';
import cn from 'classnames';
import { useEffect } from 'react';
import {
  getHotPriceProduct,
  getNewBrandProduct,
  loadAllProductsAsync,
} from '@/features/aggregateSlice';
import { AggregateProduct } from '@/types/AggregateProduct';
import { loadProductsAsync, selectProducts } from '@/features/productsSlice';
import { ProductsCategory } from '@/types/ProductsCategory';

export const HomePage = () => {
  const { t } = useTranslation();
  const hotPriceProducts = useAppSelector(getHotPriceProduct);
  const newBrandProduct = useAppSelector(getNewBrandProduct);
  const products = useAppSelector(selectProducts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadAllProductsAsync());
    Object.values(ProductsCategory).forEach(category => {
      if (!Object.keys(products[category]).length) {
        dispatch(loadProductsAsync(category));
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div style={{ paddingTop: '100px' }}></div>
      {/* hidden */}
      <h1 className={cn('style-h1', styles['home-page__title'])}>
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
