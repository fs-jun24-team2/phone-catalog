import styles from './ColorOptions.module.scss';

import { useState } from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { ProductId } from '../ProductId';

type Props = {
  colors: string[];
  id?: string;
};

export const ColorOptions = ({ colors, id }: Props) => {
  const { t } = useTranslation();
  const [selectedColor, setSelectedColor] = useState(colors.at(0));

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <div className={styles['color-options']}>
      <div className={styles['color-options__header']}>
        <div className={cn('style-small-text', styles['color-options__title'])}>
          {t('available_colors')}
        </div>

        {id && <ProductId id={id} />}
      </div>

      <div className={styles['color-options__colors']}>
        {colors.map((color, index) => {
          const isActive = selectedColor === color;
          const style = { backgroundColor: color };

          return (
            <button
              key={index}
              className={cn(styles['color-options__color'], {
                [styles['color-options__color--active']]: isActive,
              })}
              style={style}
              onClick={() => handleColorClick(color)}
            />
          );
        })}
      </div>
    </div>
  );
};
