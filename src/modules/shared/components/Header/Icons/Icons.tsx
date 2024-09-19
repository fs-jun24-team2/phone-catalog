import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Icons.module.scss';
import original_favorites from '/images/original/icons/original_favorites.svg';
import original_cart from '/images/original/icons/original_cart.svg';
import { Path } from '@/types/Path';
import { ThemeLanguageToggle } from '../ThemeLanguageToggle';

type IconsProps = {
  cartCount: number;
  favouritesCount: number;
  language: string;
  isDarkTheme: boolean;
  changeLanguage: () => void;
  toggleTheme: () => void;
};

export const Icons: React.FC<IconsProps> = ({
  cartCount,
  favouritesCount,
  language,
  isDarkTheme,
  changeLanguage,
  toggleTheme,
}) => {
  return (
    <div className={styles.icons}>
      <ThemeLanguageToggle
        language={language}
        isDarkTheme={isDarkTheme}
        changeLanguage={changeLanguage}
        toggleTheme={toggleTheme}
      />

      <div className={styles.icons__favorites}>
        <Link to={Path.favourites}>
          <img src={original_favorites} alt="Favorites logo" />
          {favouritesCount > 0 && (
            <span className={styles.badge}>{favouritesCount}</span>
          )}
        </Link>
      </div>
      <div className={styles.icons__cart}>
        <Link to={Path.cart}>
          <img src={original_cart} alt="Cart logo" />
          {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
        </Link>
      </div>
    </div>
  );
};
