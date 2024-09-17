// import styles from './ProductDetailsPage.module.scss';

import { Breadcrumbs } from '../shared/components/Breadcrumbs';
import { About } from './About';
import { AlsoLike } from './AlsoLike';
import { Gallery } from './Gallery';
import { ProductCharacteristics } from './ProductCharacteristics';

export const ProductDetailsPage = () => {
  // if nothing found display another component
  // if (products.length) {
  //    return <ProductNotFoundPage />;
  // }
  return (
    <>
      <Breadcrumbs />
      <p>Back</p>
      <h1>product name</h1>
      <Gallery />
      <ProductCharacteristics />
      <About />
      <AlsoLike />
    </>
  );
};
