import React from 'react';
import styles from './NotFoundPage.module.scss';
import { Link } from 'react-router-dom';
import { NotFoundSVG } from './NotFoundSVG';
import { Path } from '../../types/Path';
import { useTranslation } from 'react-i18next';

export const NotFoundPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.notfound}>
      <NotFoundSVG />
      <h1 className={styles.notfound__title}>404 - {t('pageNotFound')}</h1>
      <p className={styles.notfound__text}>{t('pageDontExist')}</p>
      <Link to={Path.main} className={styles.notfound__link}>
        {t('goToHomepage')}
      </Link>
    </div>
  );
};

export default NotFoundPage;
