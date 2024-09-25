import styles from './CapacityOptions.module.scss';

import cn from 'classnames';
import { formatValueWithUnit } from '@/utils/formatValueWithUnit';
import { useTranslation } from 'react-i18next';
import { ProductsCategory } from '@/types/ProductsCategory';

type Props = {
  capacities: string[];
  category: ProductsCategory;
  // eslint-disable-next-line no-unused-vars
  onSetCapacity: (capacity: string) => void;
  currentCapacity: string;
};

export const CapacityOptions = ({
  capacities,
  category,
  onSetCapacity,
  currentCapacity,
}: Props) => {
  const { t } = useTranslation();

  const handleCapacityClick = (capacity: string) => {
    onSetCapacity(capacity);
  };

  return (
    <div className={styles['capacity-options']}>
      <div className={cn('style-small-text', styles['capacity-options__text'])}>
        {t('select_capacity')}
      </div>

      <div className={styles['capacity-options__capacities']}>
        {capacities.map((capacity, index) => {
          const formatCurrentCapacity =
            category === ProductsCategory.accessories
              ? currentCapacity
              : currentCapacity.toUpperCase();

          const isActive = formatCurrentCapacity === capacity;
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
