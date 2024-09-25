import { Product } from '@/types/Product';
import React from 'react';
import styles from './TechSpecs.module.scss';
import { useTranslation } from 'react-i18next';

interface TechSpecsProps {
  specs: Product;
}

export const TechSpecs: React.FC<TechSpecsProps> = ({ specs }) => {
  const { t } = useTranslation();

  const specEntries: [string, string | string[] | undefined][] = [
    [t('specs_screen'), specs.screen],
    [t('specs_resolution'), specs.resolution],
    [t('specs_processor'), specs.processor],
    [t('specs_ram'), specs.ram],
    [t('specs_built_in_memory'), specs.capacity],
    [t('specs_camera'), specs.camera],
    [t('specs_zoom'), specs.zoom],
    [t('specs_cell'), specs.cell?.join(', ')],
  ];

  return (
    <div className={styles.specs}>
      <h2 className={styles.specs__title}>{t('techSpecs')}</h2>
      <ul className={styles.specs__list}>
        {specEntries.map(
          ([label, value]) =>
            value && (
              <li key={label} className={styles.specs__element}>
                <span className={styles.specs__key}>{label}</span>
                <span className={styles.specs__value}>{value}</span>
              </li>
            ),
        )}
      </ul>
    </div>
  );
};

export default TechSpecs;
