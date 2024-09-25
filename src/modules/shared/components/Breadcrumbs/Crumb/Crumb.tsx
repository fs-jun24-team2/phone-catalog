import { Link } from 'react-router-dom';
import styles from './Crumb.module.scss';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface CrumbListProps {
  crumbs: string[];
}

export const Crumb: React.FC<CrumbListProps> = ({ crumbs }) => {
  const { t } = useTranslation();
  let currentLink = '';

  const upFirstLetterOfTheWord = (word: string) => {
    const category = `category.${word}`;
    let newWord = t(category);

    if (newWord === category) {
      newWord = t(word);
    }

    return newWord.charAt(0).toUpperCase() + newWord.slice(1);
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
