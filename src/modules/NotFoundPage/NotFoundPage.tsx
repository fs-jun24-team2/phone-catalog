import React from 'react';
import styles from './NotFoundPage.module.scss';
import { Link } from 'react-router-dom';
import { NotFoundSVG } from './NotFoundSVG';
import { Path } from '../../types/Path';

export const NotFoundPage: React.FC = () => {
  return (
    <div className={styles.notfound}>
      <NotFoundSVG />
      <h1 className={styles.notfound__title}>404 - Page Not Found</h1>
      <p className={styles.notfound__text}>
        The page you're looking for doesn't exist.
      </p>
      <Link to={Path.main} className={styles.notfound__link}>
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;
