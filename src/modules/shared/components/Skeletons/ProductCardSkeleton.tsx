import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from '../ProductCard/ProductCard.module.scss';

export const ProductCardSkeleton = () => {
  return (
    <SkeletonTheme
      baseColor="rgba(128, 128, 128, 0.1)"
      highlightColor="rgba(135, 206, 250, 0.25)"
    >
      <article className={styles['product-card']}>
        <div className={styles['product-card__header']}>
          <Skeleton height={196} width="100%" />
          <Skeleton
            height={21}
            width={150}
            style={{ marginTop: '16px' }}
          />{' '}
        </div>
        <div className={styles['product-card__prices-container']}>
          <Skeleton width={100} height={31} />
          <Skeleton width={100} height={28} />
        </div>
        <div className={styles['product-card__devider']} />
        <div className={styles['product-card__specs-container']}>
          <Skeleton height={20} width="100%" />
          <Skeleton height={20} width="100%" />
          <Skeleton height={20} width="100%" />
        </div>
        <div className={styles['product-card__button-container']}>
          <Skeleton height={40} width={150} />
          <Skeleton height={40} width={40} />
        </div>
      </article>
    </SkeletonTheme>
  );
};
