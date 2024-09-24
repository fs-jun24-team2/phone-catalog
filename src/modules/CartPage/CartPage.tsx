import React from 'react';

import { Breadcrumbs } from '../shared/components/Breadcrumbs';
import { MainButton } from '../shared/components/MainButton';
import { CartItems } from './components/CartItems';

import styles from './CartPage.module.scss';
import { useAppSelector } from '@/app/hooks';
import { getCartAmount, getTotalPrice } from '@/features/cartSlice';

export const CartPage = () => {
  const totalPrice = useAppSelector(getTotalPrice);
  const totalProductsAmount = useAppSelector(getCartAmount);

  const isAdded = false;
  const buttonCheckoutText = 'Checkout';
  const handleCheckoutOnClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
  };

  return (
    <div style={{ paddingTop: '100px' }}>
      <div className="grid-container">
        <Breadcrumbs />
        <div className={styles['cart-page__title']}>Cart</div>
        <CartItems />

        <div className={styles['checkout']}>
          <div className={styles['checkout__price-and-amount']}>
            <div className={styles['checkout__price']}>${totalPrice}</div>
            <div className={styles['checkout__amount']}>
              Total for {totalProductsAmount} items
            </div>
          </div>

          <div className={styles['checkout__devider']}></div>
          <div className={styles['checkout__button-container']}>
            <MainButton
              isAdded={isAdded}
              handleOnClick={handleCheckoutOnClick}
              buttonText={buttonCheckoutText}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
