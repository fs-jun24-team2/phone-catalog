import { useState, useEffect } from 'react';
import styles from './Header.module.scss';

import original_logo from '/images/original/logo/original_logo.svg';
import dark_logo from '/images/dark/logo/dark_logo.svg';
import original_favorites from '/images/original/icons/original_favorites.svg';
import original_cart from '/images/original/icons/original_cart.svg';
import original_burger_close from '/images/original/icons/original_burger_close.svg';
import original_burger_open from '/images/original/icons/original_burger_open.svg';
import { Path } from '@/types/Path';
import { Link, NavLink } from 'react-router-dom';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [favouritesCount, setFavouritesCount] = useState(0);

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

    const savedCartCount = localStorage.getItem('cartCount');
    const savedFavouritesCount = localStorage.getItem('favouritesCount');

    if (savedCartCount) {
      setCartCount(Number(savedCartCount));
    }

    if (savedFavouritesCount) {
      setFavouritesCount(Number(savedFavouritesCount));
    }
  }, []);

  const addItemToCart = () => {
    const newCartCount = cartCount + 1;
    setCartCount(newCartCount);
    localStorage.setItem('cartCount', String(newCartCount));
  };

  const addItemToFavourites = () => {
    const newFavouritesCount = favouritesCount + 1;
    setFavouritesCount(newFavouritesCount);
    localStorage.setItem('favouritesCount', String(newFavouritesCount));
  };

  const toggleTheme = () => {
    setTheme(!isDarkTheme);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__logo}>
          <Link to={Path.main}>
            <img
              src={isDarkTheme ? dark_logo : original_logo}
              alt="Nice Gadgets logo"
            />
          </Link>
        </div>

        <nav
          className={`${styles.menu} ${isMenuOpen ? styles.menu__open : ''}`}
        >
          <ul className={styles.menu__list}>
            <li className={styles.menu__item}>
              <NavLink
                to={Path.main}
                className={({ isActive }) =>
                  isActive
                    ? `${styles.menu__link} ${styles.is_active}`
                    : styles.menu__link
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li className={styles.menu__item}>
              <NavLink
                to={Path.phones}
                className={({ isActive }) =>
                  isActive
                    ? `${styles.menu__link} ${styles.is_active}`
                    : styles.menu__link
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Phones
              </NavLink>
            </li>
            <li className={styles.menu__item}>
              <NavLink
                to={Path.tablets}
                className={({ isActive }) =>
                  isActive
                    ? `${styles.menu__link} ${styles.is_active}`
                    : styles.menu__link
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Tablets
              </NavLink>
            </li>
            <li className={styles.menu__item}>
              <NavLink
                to={Path.accessories}
                className={({ isActive }) =>
                  isActive
                    ? `${styles.menu__link} ${styles.is_active}`
                    : styles.menu__link
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Accessories
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className={styles.icons}>
          {/* buttons for test only */}
          <button className={styles.theme_toggle} onClick={addItemToFavourites}>
            Favo
          </button>
          <button className={styles.theme_toggle} onClick={addItemToCart}>
            Cart
          </button>
          <button className={styles.theme_toggle} onClick={toggleTheme}>
            {isDarkTheme ? 'Light' : 'Dark'}
          </button>

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
              {cartCount > 0 && (
                <span className={styles.badge}>{cartCount}</span>
              )}
            </Link>
          </div>
        </div>

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
