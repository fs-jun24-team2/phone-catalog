import styles from './AddToFavourites.module.scss';

import { useState } from 'react';
import cn from 'classnames';

type Props = {
  className?: string;
};

export const AddToFavourites = ({ className }: Props) => {
  const [isAddedToFavourites, setIsAddedToFavourites] = useState(false);

  return (
    <button
      className={cn(styles['btn-favourites'], `${className}`, {
        [styles['btn-favourites--added']]: isAddedToFavourites,
      })}
      onClick={() => setIsAddedToFavourites(prev => !prev)}
    ></button>
  );
};
