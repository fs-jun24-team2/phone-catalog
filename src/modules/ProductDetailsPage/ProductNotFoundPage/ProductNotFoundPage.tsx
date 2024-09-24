import styles from './ProductNotFoundPage.module.scss';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const ProductNotFoundPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.not_found_product}>
      <div className={styles.not_found_product__button_container}>
        <h1>{t('productNotFound')}</h1>
        <button
          className={styles.not_found_product__button}
          onClick={handleBack}
        >
          {t('back')}
        </button>
      </div>
    </div>
  );
};
