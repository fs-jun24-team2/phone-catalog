// import styles from './HomePage.module.scss';

import { PictureSlider } from './components/PictureSlider';
import { ProductsSlider } from './components/ProductsSlider';
import { ShopByCategory } from './components/ShopByCategory';

export const HomePage = () => {
  return (
    <>
      {/* hidden */}
      <h1>Product Catalog</h1>

      {/* Banner */}
      <PictureSlider />

      {/* Section brand new models */}
      <ProductsSlider />

      {/* Shop by category block with links to /phones, /tablets, and /accessories. */}
      <ShopByCategory />

      {/* Section hot prices */}
      <ProductsSlider />
    </>
  );
};
