import React from 'react';
import styles from './SortAndPagination.module.scss';
import { Product } from '@/types/Product';
import cn from 'classnames';
import { SortSelector } from './SortSelector/SortSelector';
import { SingleValue } from 'react-select';
import { SelectedOption } from '@/types/SelectedOption';
import { useSearchParams } from 'react-router-dom';
import { SearchParamsType } from '@/types/SearchParamsType';

interface SortAndPaginationPanelProps {
  products: Product[];
}

export const SortAndPaginationPanel: React.FC<
  SortAndPaginationPanelProps
> = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const handleSortChange = (selectedOption: SingleValue<SelectedOption>) => {
    if (selectedOption) {
      console.log('Sort selected:', selectedOption.value);
      searchParams.append(SearchParamsType.sort, selectedOption.value);
      setSearchParams(searchParams);
    } else {
      console.log('Sort selection cleared');
    }
  };

  const handleItemsPerPageChange = (
    selectedOption: SingleValue<SelectedOption>,
  ) => {
    if (selectedOption) {
      console.log('Items per page selected:', selectedOption.value);
      searchParams.append(SearchParamsType.perPage, selectedOption.value);
      setSearchParams(searchParams);
    } else {
      console.log('Items per page selection cleared');
    }
  };
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
        onChange={handleSortChange}
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
        onChange={handleItemsPerPageChange}
      />
    </div>
  );
};
