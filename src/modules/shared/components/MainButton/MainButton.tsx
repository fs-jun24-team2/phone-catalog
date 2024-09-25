import React, { useEffect, useState } from 'react';
import styles from './MainButton.module.scss';
import cn from 'classnames';

type Props = {
  isAdded?: boolean;
  // eslint-disable-next-line no-unused-vars
  handleOnClick: (event: React.MouseEvent<HTMLElement>) => void;
  buttonText: string;
  isDisibled?: boolean;
};

export const MainButton: React.FC<Props> = ({
  isAdded = false,
  handleOnClick,
  buttonText,
  isDisibled = false,
}) => {
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
    <button
      className={cn(styles['main-button'], {
        [styles['main-button__added']]: isAdded,
        [styles['main-button-dark']]: isDarkTheme,
      })}
      onClick={event => handleOnClick(event)}
      disabled={isDisibled}
    >
      {buttonText}
    </button>
  );
};
