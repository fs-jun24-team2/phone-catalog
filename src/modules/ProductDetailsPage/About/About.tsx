import React from 'react';
import styles from './About.module.scss';
import { PhoneDescription } from '@/types/Product';

interface AboutProps {
  description: PhoneDescription[];
}

export const About: React.FC<AboutProps> = ({ description }) => {
  return (
    <section className={styles.about}>
      <h2 className={styles.about__title}>About</h2>
      {description.map((item, index) => (
        <div key={index} className={styles.about__text_container}>
          <h3 className={styles.about__text_title}>{item.title}</h3>
          {item.text.map((paragraph, idx) => (
            <div>
              <p key={idx} className={styles.about__text}>
                {paragraph}
              </p>
              <br />
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};
