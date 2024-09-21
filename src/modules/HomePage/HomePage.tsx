import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { useTranslation } from 'react-i18next';
import { PictureSlider } from './components/PictureSlider';
import { ProductsSlider } from './components/ProductsSlider';
import { ShopByCategory } from './components/ShopByCategory';
import { useEffect } from 'react';
import {
  getHotPriceProduct,
  getNewBrandProduct,
  loadAllProductsAsync,
} from '@/features/aggregateSlice';
import { AggregateProduct } from '@/types/AggregateProduct';

export const HomePage = () => {
  const { t } = useTranslation();
  const hotPriceProducts = useAppSelector(getHotPriceProduct);
  const newBrandProduct = useAppSelector(getNewBrandProduct);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadAllProductsAsync());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div style={{ paddingTop: '100px' }}></div>
      {/* hidden */}
      <h1 style={{ paddingTop: '100px' }}>{t('home')}</h1>

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
      <div></div>
    </>
  );
};
