import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from '../Breadcrumbs/Breadcrumbs.module.scss';

export const BreadcrumbsSkeleton = () => {
  return (
    <div className={styles['breadcrumbs']}>
      <Skeleton circle height={16} width={16} style={{ marginRight: '13px' }} />
      <Skeleton width={80} height={16} style={{ marginRight: '13px' }} />
      <Skeleton width={60} height={16} />
    </div>
  );
};
