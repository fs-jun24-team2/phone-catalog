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
    ['Screen', specs.screen],
    ['Resolution', specs.resolution],
    ['Processor', specs.processor],
    ['RAM', specs.ram],
    ['Built in memory', specs.capacity],
    ['Camera', specs.camera],
    ['Zoom', specs.zoom],
    ['Cell', specs.cell?.join(', ')],
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
