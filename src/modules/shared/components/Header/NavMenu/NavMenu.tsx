import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavMenu.module.scss';
import { Path } from '@/types/Path';

type NavMenuProps = {
  language: string;
  isMenuOpen: boolean;
  // eslint-disable-next-line no-unused-vars
  setIsMenuOpen: (value: boolean) => void;
};

export const NavMenu: React.FC<NavMenuProps> = ({
  language,
  isMenuOpen,
  setIsMenuOpen,
}) => {
  return (
    <nav className={`${styles.menu} ${isMenuOpen ? styles.menu__open : ''}`}>
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
            {language === 'en' ? 'Home' : 'Головна'}
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
            {language === 'en' ? 'Phones' : 'Телефони'}
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
            {language === 'en' ? 'Tablets' : 'Планшети'}
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
            {language === 'en' ? 'Accessories' : 'Аксесуари'}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
