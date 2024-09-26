import React, { useEffect, useState } from 'react';
import styles from './AboutItem.module.scss';
import { PhoneDescription } from '@/types/Product';
import { AboutText } from '../AboutText';

interface AboutItemProps {
  item: PhoneDescription;
}

export const AboutItem: React.FC<AboutItemProps> = ({ item }) => {
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
  return (
    <div className={styles.text_container}>
      <h3
        className={`${styles['text_title']} ${isDarkTheme ? styles['text_title-dark'] : ''}`}
      >
        {item.title}
      </h3>
      <AboutText text={item.text} />
    </div>
  );
};
