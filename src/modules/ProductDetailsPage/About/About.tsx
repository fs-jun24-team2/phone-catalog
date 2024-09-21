import React from 'react';
import styles from './About.module.scss';
import { PhoneDescription } from '@/types/Product';
import { AboutItem } from './AboutItem';

interface AboutProps {
  description: PhoneDescription[];
}

export const About: React.FC<AboutProps> = ({ description }) => {
  return (
    <section className={styles.about}>
      <h2 className={styles.about__title}>About</h2>
      {description.map((item, index) => (
        <AboutItem key={index} item={item} />
      ))}
    </section>
  );
};
