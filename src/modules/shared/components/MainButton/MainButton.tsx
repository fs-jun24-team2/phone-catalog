import React from 'react';
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
  return (
    <button
      className={cn(styles['main-button'], {
        [styles['main-button__added']]: isAdded,
      })}
      onClick={event => handleOnClick(event)}
      disabled={isDisibled}
    >
      {buttonText}
    </button>
  );
};
