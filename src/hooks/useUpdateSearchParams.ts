import { useSearchParams } from 'react-router-dom';
import {
  getSearchWith,
  SearchParams,
} from '../modules/shared/helpers/getSearchWith';

export const useUpdateSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const updateSearchParams = (paramsToUpdate: SearchParams) => {
    const newSearchString = getSearchWith(searchParams, paramsToUpdate);
    setSearchParams(newSearchString);
  };

  return updateSearchParams;
};
