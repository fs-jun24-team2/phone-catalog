import styles from './Breadcrumbs.module.scss';
import { Link, useLocation } from 'react-router-dom';

export const Breadcrumbs = () => {
  const location = useLocation();
  let currentLink = '';

  const crumbs = location.pathname.split('/')
  .filter(crumb => crumb !== '')
  .map((crumb, index, array) => {currentLink += `/${crumb}`
  
    return(<div className={styles.crumb} key={crumb}>
      <Link to={currentLink}>{crumb}</Link>
      {index < array.length - 1 && <span className={styles.separator}>›</span>}
    </div>)
  })

return <div className={styles.breadcrumbs}>sxdfghj</div>
};
