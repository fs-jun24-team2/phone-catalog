import { useAppSelector } from '@/app/hooks';
import styles from './ShopByCategory.module.scss';
import { selectProducts } from '@/features/productsSlice';
import { useCategoriesData } from '../../../../hooks/useCategoriesData';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export const ShopByCategory = () => {
  const { t } = useTranslation();
  const products = useAppSelector(selectProducts);
  const phoneAmount = Object.keys(products.phones).length;
  const tabletsAmount = Object.values(products.tablets).length;
  const accessoriesAmount = Object.values(products.accessories).length;

  const categories = useCategoriesData({
    phoneAmount,
    tabletsAmount,
    accessoriesAmount,
  });

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      const isDark = document.body.classList.contains('dark_theme');
      setIsDarkTheme(isDark);
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.body, { attributes: true });

    return () => observer.disconnect();
  });

  return (
    <div
      className={`${styles['']} ${isDarkTheme ? styles['category-dark'] : ''}`}
    >
      <h2 className={`${styles['style-h2']} ${styles['category-high-title']} `}>
        {t('shop_by_category')}
      </h2>

      <section className={styles['all-categories']}>
        {categories.map((category, ind) => (
          <div className={styles['category']} key={ind}>
            <Link to={category.path}>
              <img
                src={category.img}
                className={styles['all-categories__picture']}
              />
              <div
                className={`${styles['style-h4']} ${styles['all-categories__title']} `}
              >
                {category.title}
              </div>
            </Link>

            <div
              className={`${styles['body-text']} ${styles['all-categories__amount']} `}
            >
              {category.amount} {t('models')}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
