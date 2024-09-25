import 'react-loading-skeleton/dist/skeleton.css';
import styles from '../../../ProductsPage/ProductsList/ProductsList.module.scss';
import { ProductCardSkeleton } from './ProductCardSkeleton';

export const ProductListSkeleton = () => {
  return Array(8)
    .fill(null)
    .map((_, index) => (
      <div key={index} className={styles['products-list__product']}>
        <ProductCardSkeleton />
      </div>
    ));
};
