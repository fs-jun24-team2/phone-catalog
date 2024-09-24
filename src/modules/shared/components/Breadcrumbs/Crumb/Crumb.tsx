import { Link } from 'react-router-dom';
import styles from './Crumb.module.scss';
import React from 'react';

interface CrumbListProps {
  crumbs: string[];
}

export const Crumb: React.FC<CrumbListProps> = ({ crumbs }) => {
  let currentLink = '';

  const upFirstLetterOfTheWord = (word: string) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  return (
    <>
      {crumbs.map((crumb, index, array) => {
        currentLink += `/${crumb}`;
        return (
          <div
            className={
              index === array.length - 1
                ? styles['crumb-active']
                : styles['crumb']
            }
            key={crumb}
          >
            <Link to={currentLink}>{upFirstLetterOfTheWord(crumb)}</Link>
            {index < array.length - 1 && (
              <span className={styles['separator']}></span>
            )}
          </div>
        );
      })}
    </>
  );
};
