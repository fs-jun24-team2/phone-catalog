import styles from './Breadcrumbs.module.scss';
import { Link, useLocation } from 'react-router-dom';

export const Breadcrumbs = () => {
  const location = useLocation();
  let currentLink = '';

  const upFirstLetterOfTheWord = (word: string) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  const crumbs = location.pathname
    .split('/')
    .filter(crumb => crumb !== '')
    .map((crumb, index, array) => {
      currentLink += `/${crumb}`;

      return (
        <div
          className={
            index === array.length - 1
              ? styles.breadcrumbs__crumbActive
              : styles.breadcrumbs__crumb
          }
          key={crumb}
        >
          <Link to={currentLink}>{upFirstLetterOfTheWord(crumb)}</Link>
          {index < array.length - 1 && (
            <span className={styles.separator}></span>
          )}
        </div>
      );
    });

  return (
    <div className={styles.breadcrumbs}>
      <Link className={styles.breadcrumbs__crumb} to="/">
        <img className={styles.icon} src="images/breadcrumbs/home.svg" />
      </Link>
      <span className={styles.separator}></span>
      {crumbs}
    </div>
  );
};
