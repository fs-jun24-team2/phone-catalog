import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from '../../../ProductsPage/SortAndPagination/SortAndPagination.module.scss';
import cn from 'classnames';

export const SortPanelSkeleton = () => {
  return (
    <SkeletonTheme
      baseColor="rgba(128, 128, 128, 0.1)"
      highlightColor="rgba(135, 206, 250, 0.25)"
    >
      <div className={cn('grid-container', [styles.selectors])}>
        {/* Скелетон для сортування */}
        <div className={styles.selectors__sort}>
          <Skeleton width={120} height={20} />
          <Skeleton height={38} width={'100%'} />
        </div>

        {/* Скелетон для кількості елементів на сторінці */}
        <div className={styles.selectors__pagination}>
          <Skeleton width={120} height={20} />
          <Skeleton height={38} width={'100%'} />
        </div>

        {/* Скелетон для пошуку (без бордера та ховера) */}
        <div className={styles.selectors__search}>
          <Skeleton width={120} height={20} />
          <Skeleton height={38} width={'100%'} />
        </div>
      </div>
    </SkeletonTheme>
  );
};
