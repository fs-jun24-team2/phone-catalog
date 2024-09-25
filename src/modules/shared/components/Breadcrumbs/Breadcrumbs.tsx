import { Link, useLocation } from 'react-router-dom';
import styles from './Breadcrumbs.module.scss';
import { Crumb } from './Crumb/Crumb';
import breadcrumbs_home from '/images/original/breadcrumbs/home.svg';
import breadcrumbs_dark_home from '/images/original/breadcrumbs/homedark.svg';
import { useEffect, useState } from 'react';

export const Breadcrumbs = () => {
  const location = useLocation();
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      const isDark = document.body.classList.contains('dark_theme');
      setIsDarkTheme(isDark);
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.body, { attributes: true });

    return () => observer.disconnect();
  });

  const crumbs = location.pathname.split('/').filter(crumb => crumb !== '');

  return (
    <div
      className={`${styles['breadcrumbs']} ${isDarkTheme ? styles['breadcrumbs-dark'] : ''}`}
    >
      <Link to="/">
        <img
          className={styles['breadcrumbs__icon-home']}
          src={isDarkTheme ? breadcrumbs_dark_home : breadcrumbs_home}
          alt="Home"
        />
      </Link>
      <span className={styles['separator']}></span>
      <Crumb crumbs={crumbs} />
    </div>
  );
};
