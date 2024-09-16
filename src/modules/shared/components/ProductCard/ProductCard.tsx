import React, { useState } from 'react';
import styles from './ProductCard.module.scss';
import { Phone } from '../../../../types/Phone';
import { Specs } from '../../../../types/Specs';
import { formatValueWithUnit } from '../../../../utils/formatValueWithUnit';
import cn from 'classnames';

type Props = {
  product: Phone;
};

export const ProductCard: React.FC<Props> = ({ product }) => {
  const { name, priceRegular, priceDiscount, capacity, screen, ram } = product;
  const image = product.images?.[0];
  const specs = [
    {
      name: Specs.Screen,
      value: screen,
    },
    {
      name: Specs.Capacity,
      value: capacity,
    },
    {
      name: Specs.RAM,
      value: ram,
    },
  ];

  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isAddedToFavourites, setIsAddedToFavourites] = useState(false);

  return (
    <article className={styles['product-card']}>
      <div className={styles['product-card__header']}>
        <a href="#" className={styles['product-card__photo-container']}>
          <img
            src={image}
            alt="Product image"
            className={styles['product-card__photo']}
          />
        </a>

        <p className={styles['product-card__title']}>{name}</p>
      </div>

      <div className={styles['product-card__prices-container']}>
        <p className={styles['product-card__price-discount']}>
          ${priceDiscount}
        </p>
        <p className={styles['product-card__price-regular']}>${priceRegular}</p>
      </div>

      <div className={styles['product-card__devider']}></div>

      <div className={styles['product-card__specs-container']}>
        {specs.map(({ name, value }) => (
          <div className={styles['product-card__spec-container']}>
            <p className={styles['product-card__spec-name']}>{name}</p>
            <p className={styles['product-card__spec-value']}>
              {formatValueWithUnit(value)}
            </p>
          </div>
        ))}
      </div>

      <div className={styles['product-card__button-container']}>
        <button
          className={cn(styles['product-card__btn-cart'], {
            [styles['product-card__btn-cart--added']]: isAddedToCart,
          })}
          onClick={() => setIsAddedToCart(prev => !prev)}
        >
          {!isAddedToCart ? 'Add to cart' : 'Added'}
        </button>

        <button
          className={cn(styles['product-card__btn-favourites'], {
            [styles['product-card__btn-favourites--added']]:
              isAddedToFavourites,
          })}
          onClick={() => setIsAddedToFavourites(prev => !prev)}
        ></button>
      </div>
    </article>
  );
};
