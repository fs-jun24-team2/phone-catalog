import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
export const TitleSkeleton = () => (
  <SkeletonTheme
    baseColor="rgba(128, 128, 128, 0.1)"
    highlightColor="rgba(135, 206, 250, 0.25)"
  >
    <div style={{ marginBottom: '16px' }}>
      <Skeleton height={30} width="25%" />
      <Skeleton height={16} width="15%" style={{ marginTop: '16px' }} />
    </div>
  </SkeletonTheme>
);
