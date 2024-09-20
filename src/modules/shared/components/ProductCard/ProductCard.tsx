// src/modules/ProductCard/ProductCard.tsx
import React, { useState } from 'react';
import cn from 'classnames';
import styles from './ProductCard.module.scss';
import { Product } from '@/types/Product';
import { Specs } from '@/types/Specs';
import { formatValueWithUnit } from '@/utils/formatValueWithUnit';
import { MainButton } from '../MainButton';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '@/app/hooks';
import { toggleAddToCart } from '@/features/cartSlice';
import { hasCartProduct } from './helpers/hasCartProduct';
import { ProductsCategory } from '@/types/ProductsCategory';
import { Link } from 'react-router-dom';

type Props = {
  product: Product;
  category?: ProductsCategory;
};

export const ProductCard: React.FC<Props> = ({
  product,
  category = ProductsCategory.phones,
}) => {
  const { id, name, priceRegular, priceDiscount, capacity, screen, ram } =
    product;
  const image = product.images?.[0];
  const { t } = useTranslation();
  const specs = [
    {
      name: t(Specs.Screen),
      value: screen,
    },
    {
      name: t(Specs.Capacity),
      value: capacity,
    },
    {
      name: t(Specs.RAM),
      value: ram,
    },
  ];

  const [isAddedToCart, setIsAddedToCart] = useState(hasCartProduct(id));
  const [isAddedToFavourites, setIsAddedToFavourites] = useState(false);

  const dispatch = useAppDispatch();
  const buttonAddText = !isAddedToCart ? t('add_to_cart') : t('added');

  const handleAddOnClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    const price = product?.priceDiscount
      ? product.priceDiscount
      : product?.priceRegular;
    dispatch(toggleAddToCart({ id, category, price }));
    setIsAddedToCart(prev => !prev);
  };

  return (
    <article key={id} className={styles['product-card']}>
      <div className={styles['product-card__header']}>
        <Link
          to={`/${category}/${id}`}
          className={styles['product-card__photo-container']}
        >
          <img
            src={image}
            alt={t('product_image')}
            className={styles['product-card__photo']}
          />
        </Link>

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
          <div key={name} className={styles['product-card__spec-container']}>
            <p className={styles['product-card__spec-name']}>{name}</p>
            <p className={styles['product-card__spec-value']}>
              {formatValueWithUnit(value)}
            </p>
          </div>
        ))}
      </div>

      <div className={styles['product-card__button-container']}>
        <MainButton
          isAdded={isAddedToCart}
          handleOnClick={handleAddOnClick}
          buttonText={buttonAddText} // Use translation for button text
        />

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
