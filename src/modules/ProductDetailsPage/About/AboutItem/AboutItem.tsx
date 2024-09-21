import React from 'react';
import styles from './AboutItem.module.scss';
import { PhoneDescription } from '@/types/Product';
import { AboutText } from '../AboutText';

interface AboutItemProps {
  item: PhoneDescription;
}

export const AboutItem: React.FC<AboutItemProps> = ({ item }) => {
  return (
    <div className={styles.text_container}>
      <h3 className={styles.text_title}>{item.title}</h3>
      <AboutText text={item.text} />
    </div>
  );
};
