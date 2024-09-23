import React from 'react';
import styles from './AboutText.module.scss';

interface AboutTextProps {
  text: string[];
}

export const AboutText: React.FC<AboutTextProps> = ({ text }) => {
  return (
    <>
      {text.map((paragraph, idx) => (
        <div key={idx}>
          <p className={styles.text}>{paragraph}</p>
          <br />
        </div>
      ))}
    </>
  );
};
