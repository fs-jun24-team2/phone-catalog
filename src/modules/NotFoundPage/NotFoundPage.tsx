import React from 'react';
import { NotFoundSVG } from './NotFoundSVG';
import styles from './NotFoundPage.module.scss';

export const NotFoundPage: React.FC = () => {
  return (
    <div className={styles.notfound}>
      <NotFoundSVG />
      <h1 className={styles.notfound__title}>404 - Page Not Found</h1>
      <p className={styles.notfound__text}>
        The page you're looking for doesn't exist.
      </p>
      <a href="/" className={styles.notfound__link}>
        Go Back to Home
      </a>
    </div>
  );
};

export default NotFoundPage;
