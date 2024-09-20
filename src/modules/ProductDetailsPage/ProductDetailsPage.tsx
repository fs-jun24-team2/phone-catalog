import { useLocation, useNavigate, useParams } from 'react-router-dom';
import cn from 'classnames';
import { Breadcrumbs } from '../shared/components/Breadcrumbs';
import { About } from './About';
import { TechSpecs } from './TechSpecs';
import { AlsoLike } from './AlsoLike';
import styles from './ProductDetailsPage.module.scss';
//import { Gallery } from './Gallery';
import { ProductCharacteristics } from './ProductCharacteristics';
import { useEffect, useState } from 'react';
import { getProduct } from '@/api/products';
import { Product } from '@/types/Product';
import { ProductsCategory } from '@/types/ProductsCategory';
import { ProductNotFoundPage } from './ProductNotFoundPage';

export const ProductDetailsPage = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [isError, setIsError] = useState(false);
  const { pathname } = useLocation();
  const pathParts = pathname.split('/');
  const category = pathParts[1] as ProductsCategory;
  const { id } = useParams();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    getProduct(id as string, category)
      .then(product => {
        if (product) {
          setProduct(product);
        } else {
          setIsError(true);
        }
      })
      .catch(() => setIsError(true));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (isError) {
    return <ProductNotFoundPage />;
  }

  if (!product) {
    return null;
  }

  return (
    <div style={{ paddingTop: '100px' }}>
      <Breadcrumbs />
      <button onClick={handleBack}>Back</button>
      <h1>{product.name}</h1>
      {/* <Gallery /> */}
      <ProductCharacteristics />
      <div className={cn('grid-container', [styles.about])}>
        <About description={product.description} />
        <TechSpecs specs={product} />
      </div>
      <AlsoLike />
    </div>
  );
};
