import styles from './ProductCharacteristics.module.scss';
import React, { useState } from 'react';

interface ProductOptionsProps {
  colors: string[];
  capacities: string[];
  id: number;
}

export const ProductCharacteristics: React.FC<ProductOptionsProps> = ({
  colors,
  capacities,
  id,
}) => {
  const [selectedColor, setSelectedColor] = useState(colors[0]); // колір
  const [selectedCapacity, setSelectedCapacity] = useState(capacities[0]); // об'єм пам'яті

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
  };

  const handleCapacityClick = (capacity: string) => {
    setSelectedCapacity(capacity);
  };
  return (
    <>
      <div className={styles['main-info']}>
        <div className={styles['main-info__our-component']}>
          <div className={styles['main-attributes']}>
            <div className={`${styles['main-attributes__product-options']}`}>
              <div
                className={styles['main-attributes__product-options__colors']}
              >
                <div
                  className={`${styles['style-small-text']} ${styles['main-attributes__product-options__colors__text']}`}
                >
                  Available colors
                </div>
                <div
                  className={
                    styles[
                      'main-attributes__product-options__colors__color-options'
                    ]
                  }
                >
                  {colors.map((color, index) => (
                    <div
                      key={index}
                      className={`${styles['main-attributes__product-options__colors__color-options__color-circle']} ${selectedColor === color ? styles['active'] : ''}`}
                      style={{ backgroundColor: color }}
                      onClick={() => handleColorClick(color)}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className={styles['main-attributes__line']}></div>

            <div className={styles['main-attributes__capacity-options']}>
              <div
                className={`${styles['style-small-text']} ${styles['main-attributes__capacity-options__text']}`}
              >
                Select capacity
              </div>

              <div
                className={
                  styles['main-attributes__capacity-options__capacity']
                }
              >
                {capacities.map((capacity, index) => (
                  <div
                    key={index}
                    className={`${styles['main-attributes__capacity-options__capacity__size']} ${selectedCapacity === capacity ? styles.active : ''}`}
                    onClick={() => handleCapacityClick(capacity)}
                  >
                    {capacity}
                  </div>
                ))}
              </div>
            </div>

            <div className={styles['main-attributes__line']}></div>
          </div>

          <div className={styles['product-data']}></div>
        </div>
        <div
          className={`${styles['style-small-text']} ${styles['main-info__id']}`}
        >
          id:{id}
        </div>
      </div>
    </>
  );
};
