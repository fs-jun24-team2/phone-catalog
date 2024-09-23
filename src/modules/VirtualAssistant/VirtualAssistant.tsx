import { useState } from 'react';
import styles from './VirtualAssistan.module.scss';
import original_assistant from '/images/original/icons/original_assistant.svg';

type VirtualAssistantProps = {
  // eslint-disable-next-line no-unused-vars
  onSearch: (searchTerm: string) => void;
};

// eslint-disable-next-line no-undef
export const VirtualAssistant: React.FC<VirtualAssistantProps> = ({
  onSearch,
}) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  // eslint-disable-next-line no-undef
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = e.target.value;
    onSearch(newSearchTerm);
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
            placeholder="Search products..."
            onChange={handleSearchInputChange}
          />
        </div>
      )}
    </>
  );
};
