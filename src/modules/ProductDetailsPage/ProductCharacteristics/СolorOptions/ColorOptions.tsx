import styles from './ColorOptions.module.scss';

import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { ProductId } from '../ProductId';
import { useEffect, useState } from 'react';

type Props = {
  colors: string[];
  // eslint-disable-next-line no-unused-vars
  onSetColor: (color: string) => void;
  currentColor: string;
  id?: string;
};

export const ColorOptions = ({
  colors,
  onSetColor,
  currentColor,
  id,
}: Props) => {
  const { t } = useTranslation();
  const handleColorClick = (color: string) => {
    onSetColor(color);
  };
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
    <div
      className={`${styles['color-options']} ${isDarkTheme ? styles['color-options-dark'] : ''}`}
    >
      <div className={styles['color-options__header']}>
        <div className={cn('style-small-text', styles['color-options__title'])}>
          {t('available_colors')}
        </div>

        {id && <ProductId id={id} />}
      </div>

      <div className={styles['color-options__colors']}>
        {colors.map((color, index) => {
          const isActive = currentColor === color;
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
