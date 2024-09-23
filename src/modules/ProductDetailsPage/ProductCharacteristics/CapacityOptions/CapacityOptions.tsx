import styles from './CapacityOptions.module.scss';

import { useState } from 'react';
import cn from 'classnames';
import { formatValueWithUnit } from '@/utils/formatValueWithUnit';
import { useTranslation } from 'react-i18next';

type Props = {
  capacities: string[];
};

export const CapacityOptions = ({ capacities }: Props) => {
  const { t } = useTranslation();
  const [selectedCapacity, setSelectedCapacity] = useState(capacities.at(0));

  const handleCapacityClick = (capacity: string) => {
    setSelectedCapacity(capacity);
  };

  return (
    <div className={styles['capacity-options']}>
      <div className={cn('style-small-text', styles['capacity-options__text'])}>
        {t('select_capacity')}
      </div>

      <div className={styles['capacity-options__capacities']}>
        {capacities.map((capacity, index) => {
          const isActive = selectedCapacity === capacity;
          const text = formatValueWithUnit(capacity);

          return (
            <button
              key={index}
              className={cn(
                'style-buttons-text',
                styles['capacity-options__capacity'],
                {
                  [styles['capacity-options__capacity--active']]: isActive,
                },
              )}
              onClick={() => handleCapacityClick(capacity)}
            >
              {text}
            </button>
          );
        })}
      </div>
    </div>
  );
};
