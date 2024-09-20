import React, { useEffect, useState } from 'react';
import cn from 'classnames';

import styles from '../../CartPage.module.scss';

import { CartItemType } from '@/types/CartItems';
import { Product } from '@/types/Product';
import { getProduct } from '@/api/products';
import { useAppDispatch } from '@/app/hooks';
import {
  decreaseAmount,
  increaseAmount,
  removeFromCart,
} from '@/features/cartSlice';

type Props = {
  cartItem: [string, CartItemType];
};

export const CartItem: React.FC<Props> = ({ cartItem }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [id, { category, amount: productAmount }] = cartItem;
  const dispatch = useAppDispatch();

  useEffect(() => {
    getProduct(id, category).then(data => setProduct(data as Product));
  }, [id, category]);

  const image = product?.images?.[0];
  const priceToShow = product?.priceDiscount
    ? product.priceDiscount * productAmount
    : (product?.priceRegular || 1) * productAmount;

  return (
    <div key={id} className={styles['product']}>
      <div className={styles['product__block']}>
        <button
          className={styles['product__button-delete']}
          onClick={() => dispatch(removeFromCart(id))}
        ></button>

        <a href="#" className={styles['product__photo-container']}>
          <img
            src={image}
            alt="Product image"
            className={styles['product__photo']}
          />
        </a>

        <p className={styles['product__name']}>{product?.name}</p>
      </div>

      <div
        className={cn(styles['product__block'], styles['product__block-price'])}
      >
        <div className={styles['product__counter-container']}>
          <button
            className={cn(
              styles['product__counter-button'],
              styles['product__counter-button-minus'],
            )}
            onClick={() => dispatch(decreaseAmount(id))}
          ></button>

          <div className={styles['product__counter-number']}>
            {productAmount}
          </div>

          <button
            className={cn(
              styles['product__counter-button'],
              styles['product__counter-button-plus'],
            )}
            onClick={() => dispatch(increaseAmount(id))}
          ></button>
        </div>

        <div className={cn(styles['product__price'], 'cart-item-price')}>
          ${priceToShow}
        </div>
      </div>
    </div>
  );
};
