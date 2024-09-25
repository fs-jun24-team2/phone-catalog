import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from '../../components/Pagination/Pagination.module.scss';

export const PaginationSkeleton = () => {
  return (
    <div className={styles.pagination}>
      <Skeleton height={40} width={40} className={styles.arrow} />

      {[...Array(4)].map((_, index) => (
        <Skeleton
          key={index}
          height={40}
          width={40}
          style={{ margin: '0 8px' }}
        />
      ))}

      <Skeleton height={40} width={40} className={styles.arrow} />
    </div>
  );
};
