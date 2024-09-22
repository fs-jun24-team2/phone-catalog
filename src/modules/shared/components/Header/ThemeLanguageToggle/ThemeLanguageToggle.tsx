import React from 'react';
import styles from './ThemeLanguageToggle.module.scss';
import original_ua from '/images/original/icons/original_ua.svg';
import original_gb from '/images/original/icons/original_gb.svg';
import dark_sun from '/images/dark/icons/dark_sun.svg';
import original_moon from '/images/original/icons/original_moon.svg';

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
    </div>
  );
};
