import React, { useState } from 'react';
import { Breadcrumbs } from '../shared/components/Breadcrumbs';
import { MainButton } from '../shared/components/MainButton';
import { CartItems } from './components/CartItems';

import styles from './CartPage.module.scss';
import { useAppSelector, useAppDispatch } from '@/app/hooks';
import {
  getAmountProducts,
  getTotalPrice,
  clearCart,
} from '@/features/cartSlice';
import { useTranslation } from 'react-i18next';
import { PopupModal } from '../shared/components/PopupModal';

export const CartPage = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const totalPrice = useAppSelector(getTotalPrice);
  const totalProductsAmount = useAppSelector(getAmountProducts);
  const [isModalVisible, setModalVisible] = useState(false);

  const isAdded = false;
  const buttonCheckoutText = t('checkout');

  const handleCheckoutOnClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setModalVisible(true);
  };

  const handleConfirm = () => {
    dispatch(clearCart());
    setModalVisible(false);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  return (
    <>
      <div className="grid-container">
        <Breadcrumbs />
        <div className={styles['cart-page__title']}>{t('cartTitle')}</div>
        <CartItems />

        <div className={styles['checkout']}>
          <div className={styles['checkout__price-and-amount']}>
            <div className={styles['checkout__price']}>${totalPrice}</div>
            <div className={styles['checkout__amount']}>
              {t('totalItems', { total: totalProductsAmount })}
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

      {isModalVisible && (
        <PopupModal
          message={t('checkoutConfirmation')}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
    </>
  );
};
