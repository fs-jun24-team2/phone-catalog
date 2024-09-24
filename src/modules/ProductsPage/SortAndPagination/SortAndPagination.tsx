import React from 'react';
import styles from './SortAndPagination.module.scss';
import { Product } from '@/types/Product';
import cn from 'classnames';
import { SortSelector } from './SortSelector/SortSelector';
import { useTranslation } from 'react-i18next';

interface SortAndPaginationPanelProps {
  products: Product[];
}

export const SortAndPaginationPanel: React.FC<
  SortAndPaginationPanelProps
> = () => {
  const { t } = useTranslation();

  return (
    <div className={cn('grid-container', [styles.selectors])}>
      {/* Сортування */}
      <SortSelector
        label={t('sortBy')}
        options={[
          { value: 'cheapest', label: t('cheapest') },
          { value: 'alphabetically', label: t('alphabetically') },
          { value: 'age', label: t('newest') },
        ]}
        className={styles.selectors__sort}
      />

      {/* Елементи на сторінці */}
      <SortSelector
        label={t('itemsPerPage')}
        options={[
          { value: '4', label: '4' },
          { value: '8', label: '8' },
          { value: '16', label: '16' },
          { value: 'all', label: t('all') },
        ]}
        className={styles.selectors__pagination}
      />
    </div>
  );
};
