import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from '../Breadcrumbs/Breadcrumbs.module.scss';

export const BreadcrumbsSkeleton = () => {
  return (
    <SkeletonTheme
      baseColor="rgba(128, 128, 128, 0.1)"
      highlightColor="rgba(135, 206, 250, 0.25)"
    >
      <div className={styles['breadcrumbs']}>
        <Skeleton
          circle
          height={16}
          width={16}
          style={{ marginRight: '13px' }}
        />
        <Skeleton width={80} height={16} style={{ marginRight: '13px' }} />
        <Skeleton width={60} height={16} />
      </div>
    </SkeletonTheme>
  );
};
