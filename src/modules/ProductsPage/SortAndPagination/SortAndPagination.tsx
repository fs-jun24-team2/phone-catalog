import React from 'react';
import styles from './SortAndPagination.module.scss';
import { Product } from '@/types/Product';
import cn from 'classnames';
import { SortSelector } from './SortSelector/SortSelector';

interface SortAndPaginationPanelProps {
  products: Product[];
}

export const SortAndPaginationPanel: React.FC<
  SortAndPaginationPanelProps
> = () => {
  return (
    <div className={cn('grid-container', [styles.selectors])}>
      {/*сортування */}
      <SortSelector
        label="Sort by:"
        options={[
          { value: 'cheapest', label: 'Cheapest' },
          { value: 'alphabetically', label: 'Alphabetically' },
          { value: 'age', label: 'Newest' },
        ]}
        className={styles.selectors__sort}
      />

      {/*елементи на сторінці*/}
      <SortSelector
        label="Items per page:"
        options={[
          { value: '4', label: '4' },
          { value: '8', label: '8' },
          { value: '16', label: '16' },
          { value: 'all', label: 'All' },
        ]}
        className={styles.selectors__pagination}
      />
    </div>
  );
};
