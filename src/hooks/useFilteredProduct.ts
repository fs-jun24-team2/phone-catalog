import { useAppSelector } from '@/app/hooks';
import { selectAggregateProducts } from '@/features/aggregateSlice';
import { Product } from '@/types/Product';
import { SearchParamsType } from '@/types/SearchParamsType';
import { SortBy } from '@/types/SortBy';
import { useSearchParams } from 'react-router-dom';

type Filter = {
  searchTerm: string;
};

export const useFilteredProducts = (
  productList: Product[],
  { searchTerm }: Filter,
) => {
  let filteredList = productList;
  const [searchParams] = useSearchParams();
  const sort = searchParams.get(SearchParamsType.sort);

  const aggregateProducts = useAppSelector(selectAggregateProducts);
  filteredList = filteredList.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  switch (sort) {
    case SortBy.cheapest:
      filteredList.sort((a, b) => {
        const priceA = a.priceDiscount || a.priceRegular;
        const priceB = b.priceDiscount || b.priceRegular;
        return priceA - priceB;
      });
      break;

    case SortBy.alphabetically:
      filteredList.sort((a, b) => {
        return a.id.localeCompare(b.id);
      });
      break;

    case SortBy.age:
      filteredList.sort((a, b) => {
        const aggregateA = aggregateProducts[a.id];
        const aggregateB = aggregateProducts[b.id];

        if (!aggregateA || !aggregateB) {
          return 0;
        }

        const aYear = aggregateA.year;
        const bYear = aggregateB.year;
        return bYear - aYear;
      });
      break;
  }

  return filteredList;
};
