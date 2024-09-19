import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Logo.module.scss';
import original_logo from '/images/original/logo/original_logo.svg';
import dark_logo from '/images/dark/logo/dark_logo.svg';
import { Path } from '@/types/Path';

type LogoProps = {
  isDarkTheme: boolean;
};

export const Logo: React.FC<LogoProps> = ({ isDarkTheme }) => {
  return (
    <div className={styles.header__logo}>
      <Link to={Path.main}>
        <img
          src={isDarkTheme ? dark_logo : original_logo}
          alt="Nice Gadgets logo"
        />
      </Link>
    </div>
  );
};
