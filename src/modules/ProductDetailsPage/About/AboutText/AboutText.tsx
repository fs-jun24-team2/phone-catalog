import React, { useEffect, useState } from 'react';
import styles from './AboutText.module.scss';

interface AboutTextProps {
  text: string[];
}

export const AboutText: React.FC<AboutTextProps> = ({ text }) => {
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
    <>
      {text.map((paragraph, idx) => (
        <div key={idx}>
          <p
            className={`${styles['text']} ${isDarkTheme ? styles['text-dark'] : ''}`}
          >
            {paragraph}
          </p>
          <br />
        </div>
      ))}
    </>
  );
};
