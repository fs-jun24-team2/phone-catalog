import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from '../../../ProductsPage/SortAndPagination/SortAndPagination.module.scss';
import cn from 'classnames';

export const SortPanelSkeleton = () => {
  return (
    <div className={cn('grid-container', [styles.selectors])}>
      <div className={styles.selectors__sort}>
        <Skeleton height={40} width="100%" />
      </div>

      <div className={styles.selectors__pagination}>
        <Skeleton height={40} width="100%" />
      </div>
    </div>
  );
};
