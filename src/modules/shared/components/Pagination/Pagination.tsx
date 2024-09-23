import styles from './Pagination.module.scss';

import original_arrow_left from '/images/original/icons/original_arrow_left.svg';
import original_arrow_right from '/images/original/icons/original_arrow_right.svg';

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  // eslint-disable-next-line no-unused-vars
  onPageChange: (page: number) => void;
}

// eslint-disable-next-line no-undef
export const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const getDisplayedPages = () => {
    const pages = [];
    const maxPagesToShow = 4;
    let startPage = currentPage - Math.floor(maxPagesToShow / 2);
    if (startPage < 1) startPage = 1;
    let endPage = startPage + maxPagesToShow - 1;
    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  const displayedPages = getDisplayedPages();

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    onPageChange(page);
  };

  return (
    <div className={styles.pagination}>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={styles.arrow}
      >
        <img src={original_arrow_left} alt="Previous" />
      </button>

      {displayedPages.map(page => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={currentPage === page ? styles.activePage : ''}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={styles.arrow}
      >
        <img src={original_arrow_right} alt="Next" />
      </button>
    </div>
  );
};
