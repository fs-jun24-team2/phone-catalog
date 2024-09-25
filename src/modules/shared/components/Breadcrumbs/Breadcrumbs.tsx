import { Link, useLocation } from 'react-router-dom';
import styles from './Breadcrumbs.module.scss';
import { Crumb } from './Crumb/Crumb';

export const Breadcrumbs = () => {
  const location = useLocation();

  const crumbs = location.pathname.split('/').filter(crumb => crumb !== '');

  return (
    <div className={styles['breadcrumbs']}>
      <Link to="/">
        <img
          className={styles['breadcrumbs__icon-home']}
          src="images/original/breadcrumbs/home.svg"
          alt="Home"
        />
      </Link>
      <span className={styles['separator']}></span>
      <Crumb crumbs={crumbs} />
    </div>
  );
};
