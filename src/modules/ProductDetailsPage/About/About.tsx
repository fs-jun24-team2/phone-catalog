import React from 'react';
import styles from './About.module.scss';
import { PhoneDescription } from '@/types/Product';
import { AboutItem } from './AboutItem';
import { useTranslation } from 'react-i18next';

interface AboutProps {
  description: PhoneDescription[];
}

export const About: React.FC<AboutProps> = ({ description }) => {
  const { t } = useTranslation();

  return (
    <section className={styles.about}>
      <h2 className={styles.about__title}>{t('about')}</h2>
      {description.map((item, index) => (
        <AboutItem key={index} item={item} />
      ))}
    </section>
  );
};
