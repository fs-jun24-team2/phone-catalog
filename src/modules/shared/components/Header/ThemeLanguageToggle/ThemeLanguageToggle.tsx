import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import styles from './ThemeLanguageToggle.module.scss';
import original_ua from '/images/original/icons/original_ua.svg';
import original_gb from '/images/original/icons/original_gb.svg';
import dark_sun from '/images/dark/icons/dark_sun.svg';
import original_moon from '/images/original/icons/original_moon.svg';

import original_user from '/images/original/icons/original_user.svg';
import dark_user from '/images/dark/icons/dark_user.svg';
import danylo from '/images/users/Vitalii.jpeg';

type ThemeLanguageToggleProps = {
  language: string;
  isDarkTheme: boolean;
  changeLanguage: () => void;
  toggleTheme: () => void;
};

export const ThemeLanguageToggle: React.FC<ThemeLanguageToggleProps> = ({
  language,
  isDarkTheme,
  changeLanguage,
  toggleTheme,
}) => {
  const location = useLocation();

  const isDashboardPage = location.pathname === '/dashboard';

  return (
    <div
      className={`${styles.theme_language_toggle} ${
        isDarkTheme ? styles.dark : ''
      }`}
    >
      <button className={styles.theme_toggle} onClick={changeLanguage}>
        <img
          className={styles.flags}
          src={language === 'en' ? original_ua : original_gb}
          alt="Switch Language"
        />
      </button>
      <button className={styles.theme_toggle} onClick={toggleTheme}>
        <img
          className={styles.sunMoon}
          src={isDarkTheme ? dark_sun : original_moon}
          alt="Switch Theme"
        />
      </button>
      <Link to="/register" className={styles.theme_toggle}>
        <img
          className={styles.user_logo}
          src={
            isDashboardPage ? danylo : isDarkTheme ? dark_user : original_user
          }
          alt="User"
        />
      </Link>
    </div>
  );
};
