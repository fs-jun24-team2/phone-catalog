import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Icons.module.scss';
import original_favorites from '/images/original/icons/original_favorites.svg';
import original_cart from '/images/original/icons/original_cart.svg';
import dark_favorites from '/images/dark/icons/dark_favorites.svg';
import dark_cart from '/images/dark/icons/dark_cart.svg';
import { Path } from '@/types/Path';
import { ThemeLanguageToggle } from '../ThemeLanguageToggle';
import { useNavigate } from 'react-router-dom';

type IconsProps = {
  cartCount: number;
  favouritesCount: number;
  language: string;
  isDarkTheme: boolean;
  changeLanguage: () => void;
  toggleTheme: () => void;
  // eslint-disable-next-line no-unused-vars
  setIsMenuOpen: (value: boolean) => void;
};

export const Icons: React.FC<IconsProps> = ({
  cartCount,
  favouritesCount,
  language,
  isDarkTheme,
  changeLanguage,
  toggleTheme,
  setIsMenuOpen,
}) => {
  const favoritesIcon = isDarkTheme ? dark_favorites : original_favorites;
  const cartIcon = isDarkTheme ? dark_cart : original_cart;

  const navigate = useNavigate();

  const handleCartClick = () => {
    setIsMenuOpen(false);
    navigate(Path.cart);
  };

  return (
    <div className={styles.icons}>
      <ThemeLanguageToggle
        language={language}
        isDarkTheme={isDarkTheme}
        changeLanguage={changeLanguage}
        toggleTheme={toggleTheme}
      />

      <div className={styles.iconWrapper}>
        <Link to={Path.favourites}>
          <img src={favoritesIcon} alt="Favorites logo" />
          {favouritesCount > 0 && (
            <span className={styles.badge}>{favouritesCount}</span>
          )}
        </Link>
      </div>
      <div className={styles.iconWrapper} onClick={handleCartClick}>
        <Link to={Path.cart}>
          <img src={cartIcon} alt="Cart logo" />
          {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
        </Link>
      </div>
    </div>
  );
};
