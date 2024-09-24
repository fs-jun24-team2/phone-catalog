import React, { useState } from 'react';
import styles from './VirtualAssistan.module.scss';
import original_assistant from '/images/original/icons/original_assistant.svg';
import { useTranslation } from 'react-i18next';
import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams';
import { SearchParamsType } from '@/types/SearchParamsType';

type VirtualAssistantProps = {
  // eslint-disable-next-line no-unused-vars
  onSearch: (searchTerm: string) => void;
};

export const VirtualAssistant: React.FC<VirtualAssistantProps> = ({
  onSearch,
}) => {
  const { t } = useTranslation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const updateSearchParams = useUpdateSearchParams();

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = e.target.value;
    onSearch(newSearchTerm);
    updateSearchParams({
      [SearchParamsType.query]: newSearchTerm ? newSearchTerm : null,
    });
  };

  return (
    <>
      <div className={styles.virtual_assistant_icon} onClick={toggleSearch}>
        <img src={original_assistant} alt="Virtual Assistant" />
      </div>

      {isSearchOpen && (
        <div className={styles.virtual_assistant_search}>
          <input
            className={styles.virtual_assistant_input}
            type="text"
            placeholder={t('searchPlaceholder')}
            onChange={handleSearchInputChange}
          />
        </div>
      )}
    </>
  );
};
