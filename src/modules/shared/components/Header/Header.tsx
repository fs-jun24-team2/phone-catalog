import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Header.module.scss';
import { Logo } from './Logo';
import { NavMenu } from './NavMenu';
import { Icons } from './Icons';

import original_burger_close from '/images/original/icons/original_burger_close.svg';
import original_burger_open from '/images/original/icons/original_burger_open.svg';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [favouritesCount, setFavouritesCount] = useState(0);

  const { i18n } = useTranslation();

  const setTheme = (darkMode: boolean) => {
    setIsDarkTheme(darkMode);
    document.body.classList.toggle(styles.dark_theme, darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const savedCartCount = localStorage.getItem('cartCount');
    const savedFavouritesCount = localStorage.getItem('favouritesCount');

    if (savedTheme) setTheme(savedTheme === 'dark');
    if (savedCartCount) setCartCount(Number(savedCartCount));
    if (savedFavouritesCount) setFavouritesCount(Number(savedFavouritesCount));
  }, []);

  const changeLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'ua' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  const toggleTheme = () => setTheme(!isDarkTheme);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Logo isDarkTheme={isDarkTheme} />
        <NavMenu
          language={i18n.language}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
        <Icons
          cartCount={cartCount}
          favouritesCount={favouritesCount}
          language={i18n.language}
          isDarkTheme={isDarkTheme}
          changeLanguage={changeLanguage}
          toggleTheme={toggleTheme}
        />
        <div className={styles.burger_icon} onClick={toggleMenu}>
          <img
            src={isMenuOpen ? original_burger_open : original_burger_close}
            alt="Burger icon"
          />
        </div>
      </div>
    </header>
  );
};
