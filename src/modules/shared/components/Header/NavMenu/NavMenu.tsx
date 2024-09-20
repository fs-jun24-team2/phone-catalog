import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './NavMenu.module.scss';
import { Path } from '@/types/Path';

type NavMenuProps = {
  language: string;
  isMenuOpen: boolean;
  // eslint-disable-next-line no-unused-vars
  setIsMenuOpen: (value: boolean) => void;
};

// eslint-disable-next-line no-undef
export const NavMenu: React.FC<NavMenuProps> = ({
  isMenuOpen,
  setIsMenuOpen,
}) => {
  const { t } = useTranslation();

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
            {t('home')}
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
            {t('phones')}
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
            {t('tablets')}
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
            {t('accessories')}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
