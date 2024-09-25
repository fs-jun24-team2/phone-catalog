import Skeleton from 'react-loading-skeleton';

export const TitleSkeleton = () => (
  <div style={{ marginBottom: '16px' }}>
    <Skeleton height={36} width="25%" style={{ marginTop: '16px' }} />
    <Skeleton height={16} width="15%" style={{ marginTop: '16px' }} />
  </div>
);
