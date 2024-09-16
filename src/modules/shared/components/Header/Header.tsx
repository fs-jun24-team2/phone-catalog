import styles from './Header.module.scss';

import original_logo from '/images/original/logo/original_logo.svg';
import original_favorites from '/images/original/icons/original_favorites.svg';
import original_cart from '/images/original/icons/original_cart.svg';
import original_burger_close from '/images/original/icons/original_burger_close.svg';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__logo}>
          <img src={original_logo} alt="Nice Gadgets logo" />
        </div>

        <nav className={styles.menu}>
          <ul className={styles.menu__list}>
            <li className={styles.menu__item}>
              <a className={styles.menu__link}>Home</a>
            </li>
            <li className={styles.menu__item}>
              <a className={styles.menu__link}>Phones</a>
            </li>
            <li className={styles.menu__item}>
              <a className={styles.menu__link}>Tablets</a>
            </li>
            <li className={styles.menu__item}>
              <a className={styles.menu__link}>Accessories</a>
            </li>
          </ul>
        </nav>

        <div className={styles.icons}>
          <div className={styles.icons__favorites}>
            <img src={original_favorites} alt="Favorites logo" />
          </div>

          <div className={styles.icons__cart}>
            <img src={original_cart} alt="Cart logo" />
          </div>

          <div className={styles.icons__burger}>
            <img src={original_burger_close} alt="Burger logo" />
          </div>
        </div>
      </div>
    </header>
  );
};
