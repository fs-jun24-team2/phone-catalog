import styles from './Header.module.scss';

import original_logo from '/images/original/logo/original_logo.svg';
import original_favorites from '/images/original/icons/original_favorites.svg';
import original_cart from '/images/original/icons/original_cart.svg';
import original_burger_close from '/images/original/icons/original_burger_close.svg';
import { Path } from '@/types/Path';
import { Link, NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__logo}>
          <Link to={Path.main}>
            <img src={original_logo} alt="Nice Gadgets logo" />
          </Link>
        </div>

        <nav className={styles.menu}>
          <ul className={styles.menu__list}>
            <li className={styles.menu__item}>
              <NavLink to={Path.main} className={styles.menu__link}>
                Home
              </NavLink>
            </li>
            <li className={styles.menu__item}>
              <NavLink to={Path.phones} className={styles.menu__link}>
                Phones
              </NavLink>
            </li>
            <li className={styles.menu__item}>
              <NavLink to={Path.tablets} className={styles.menu__link}>
                Tablets
              </NavLink>
            </li>
            <li className={styles.menu__item}>
              <NavLink to={Path.accessories} className={styles.menu__link}>
                Accessories
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className={styles.icons}>
          <div className={styles.icons__favorites}>
            <Link to={Path.favourites}>
              <img src={original_favorites} alt="Favorites logo" />
            </Link>
          </div>

          <div className={styles.icons__cart}>
            <Link to={Path.cart}>
              <img src={original_cart} alt="Cart logo" />
            </Link>
          </div>

          <div className={styles.icons__burger}>
            <img src={original_burger_close} alt="Burger logo" />
          </div>
        </div>
      </div>
    </header>
  );
};
