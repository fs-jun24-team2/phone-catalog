import cn from 'classnames';

import { useAppSelector } from '@/app/hooks';
import { Breadcrumbs } from '../shared/components/Breadcrumbs';

import { selectFavourites } from '@/features/favouritesSlice';
import { FavouritesList } from './components/FavouritesList';

import styles from './FavouritesPage.module.scss';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export const FavouritesPage = () => {
  const { t } = useTranslation();
  const items = useAppSelector(selectFavourites);
  const isEmpty = items.length === 0;
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
    <>
      <div className={cn('grid-container')}>
        <div className={styles['favourites-page__breadcrumbs']}>
          <Breadcrumbs />
        </div>

        <div
          className={`${styles['favourites-page__header']} ${isDarkTheme ? styles['favourites-page__header-dark'] : ''}`}
        >
          <h1 className={cn('style-h1', styles['favourites-page__title'])}>
            {t('favourites')}
          </h1>

          <p
            className={cn(
              'style-buttons-text',
              styles['favourites-page__product-amount'],
            )}
          >
            {items.length} {t('models')}
          </p>
        </div>

        <div
          className={cn(styles['favourites-page__products-list'], {
            [styles['favourites-page--empty']]: isEmpty,
          })}
        >
          <FavouritesList items={items} />
        </div>
      </div>
    </>
  );
};
