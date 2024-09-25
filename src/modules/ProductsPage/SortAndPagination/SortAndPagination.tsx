import React from 'react';
import styles from './SortAndPagination.module.scss';
import cn from 'classnames';
import { SortSelector } from './SortSelector/SortSelector';
import { SingleValue } from 'react-select';
import { SelectedOption } from '@/types/SelectedOption';
import { SearchParamsType } from '@/types/SearchParamsType';
import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

interface SortAndPaginationPanelProps {
  // eslint-disable-next-line no-unused-vars
  onHandleItemPerPage: (perPage: number) => void;
}

export const SortAndPaginationPanel: React.FC<SortAndPaginationPanelProps> = ({
  onHandleItemPerPage,
}) => {
  const { t } = useTranslation();
  const updateSearchParams = useUpdateSearchParams();
  const query = new URLSearchParams(useLocation().search);
  const searchQuery = query.get(SearchParamsType.query);
  const searchQueryValue = searchQuery ? searchQuery : '';

  const handleSortChange = (selectedOption: SingleValue<SelectedOption>) => {
    updateSearchParams({
      [SearchParamsType.sort]: selectedOption ? selectedOption.value : null,
    });
  };

  const handleItemsPerPageChange = (
    selectedOption: SingleValue<SelectedOption>,
  ) => {
    updateSearchParams({
      [SearchParamsType.perPage]: selectedOption ? selectedOption.value : null,
    });

    if (selectedOption) {
      onHandleItemPerPage(Number(selectedOption.value));
    }
  };

  const handleSearchOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchParam = event.target.value ? event.target.value : null;

    updateSearchParams({
      [SearchParamsType.query]: newSearchParam,
    });
  };

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
        onChange={handleSortChange}
      />

      {/* Елементи на сторінці */}
      <SortSelector
        label={t('itemsPerPage')}
        options={[
          { value: '4', label: '4' },
          { value: '8', label: '8' },
          { value: '16', label: '16' },
          // { value: 'all', label: 'All' },
        ]}
        className={styles.selectors__pagination}
        onChange={handleItemsPerPageChange}
      />

      <div className={styles.selectors__search}>
        <p className={styles['selectors__search-title']}>{t('search')}:</p>

        <input
          type="text"
          value={searchQueryValue}
          onChange={handleSearchOnChange}
          className={styles['selectors__search-input']}
        />
      </div>
    </div>
  );
};
