import React, { useEffect, useState } from 'react';
import styles from './About.module.scss';
import { PhoneDescription } from '@/types/Product';
import { AboutItem } from './AboutItem';
import { useTranslation } from 'react-i18next';

interface AboutProps {
  description: PhoneDescription[];
}

export const About: React.FC<AboutProps> = ({ description }) => {
  const { t } = useTranslation();
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
    <section
      className={`${styles['about']} ${isDarkTheme ? styles['about-dark'] : ''}`}
    >
      <h2 className={styles['about__title']}>{t('about')}</h2>
      {description.map((item, index) => (
        <AboutItem key={index} item={item} />
      ))}
    </section>
  );
};
