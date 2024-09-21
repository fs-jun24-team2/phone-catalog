import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Header.module.scss';
import { Logo } from './Logo';
import { NavMenu } from './NavMenu';
import { Icons } from './Icons';

import original_burger_close from '/images/original/icons/original_burger_close.svg';
import original_burger_open from '/images/original/icons/original_burger_open.svg';
import dark_burger_close from '/images/dark/icons/dark_burger_close.svg';
import dark_burger_open from '/images/dark/icons/dark_burger_open.svg';
import { getCartAmount } from '@/features/cartSlice';
import { useAppSelector } from '@/app/hooks';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const cartCount = useAppSelector(getCartAmount);
  const [favouritesCount, setFavouritesCount] = useState(0);

  const { i18n } = useTranslation();

  const setTheme = (darkMode: boolean) => {
    setIsDarkTheme(darkMode);
    document.body.classList.toggle(styles.dark_theme, darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme === 'dark');
    } else {
      const prefersDarkScheme = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches;
      setTheme(prefersDarkScheme);
    }

    const savedFavouritesCount = localStorage.getItem('favouritesCount');
    if (savedTheme) setTheme(savedTheme === 'dark');
    if (savedFavouritesCount) {
      setFavouritesCount(Number(savedFavouritesCount));
    }
  }, []);

  const changeLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'ua' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  const toggleTheme = () => {
    setTheme(!isDarkTheme);
  };

  const toggleMenu = () => {
    const newIsMenuOpen = !isMenuOpen;
    setIsMenuOpen(newIsMenuOpen);

    if (newIsMenuOpen) {
      document.body.classList.add('menu_open');
    } else {
      document.body.classList.remove('menu_open');
    }
  };

  const getBurgerIcon = () => {
    return isMenuOpen
      ? isDarkTheme
        ? dark_burger_close
        : original_burger_open
      : isDarkTheme
        ? dark_burger_open
        : original_burger_close;
  };

  return (
    <header
      className={`${styles.header} ${isDarkTheme ? styles.header_dark : ''} ${isMenuOpen ? styles.menu_open : ''
        }`}
    >
      <div className={styles.header__container}>
        <Logo isDarkTheme={isDarkTheme} />
        <NavMenu
          language={i18n.language}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          isDarkTheme={isDarkTheme}
        />
        <Icons
          cartCount={cartCount}
          favouritesCount={favouritesCount}
          language={i18n.language}
          isDarkTheme={isDarkTheme}
          changeLanguage={changeLanguage}
          toggleTheme={toggleTheme}
          setIsMenuOpen={setIsMenuOpen}
        />
        <div className={styles.burger_icon} onClick={toggleMenu}>
          <img src={getBurgerIcon()} alt="Burger icon" />
        </div>
      </div>
    </header>
  );
};
