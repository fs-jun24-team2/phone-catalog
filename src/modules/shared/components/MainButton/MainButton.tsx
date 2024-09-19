import React from 'react';
import styles from './MainButton.module.scss';
import cn from 'classnames';

type Props = {
  isAdded: boolean;
  // eslint-disable-next-line no-unused-vars
  handleOnClick: (event: React.MouseEvent<HTMLElement>) => void;
  buttonText: string;
};

export const MainButton: React.FC<Props> = ({
  isAdded,
  handleOnClick,
  buttonText,
}) => {
  return (
    <button
      className={cn(styles['main-button'], {
        [styles['main-button__added']]: isAdded,
      })}
      onClick={event => handleOnClick(event)}
    >
      {buttonText}
    </button>
  );
};
