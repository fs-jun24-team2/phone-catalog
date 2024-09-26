import React, { useEffect, useState } from 'react';
import { Breadcrumbs } from '../shared/components/Breadcrumbs';
import { MainButton } from '../shared/components/MainButton';
import { CartItems } from './components/CartItems';

import styles from './CartPage.module.scss';
import { useAppSelector, useAppDispatch } from '@/app/hooks';
import { getCartAmount, getTotalPrice, clearCart } from '@/features/cartSlice';
import { useTranslation } from 'react-i18next';
import { PopupModal } from '../shared/components/PopupModal';
import cn from 'classnames';
import { selectCart } from '@/features/cartSlice';

export const CartPage = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const totalPrice = useAppSelector(getTotalPrice);
  const totalProductsAmount = useAppSelector(getCartAmount);
  const [isModalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    const checkTheme = () => {
      const isDark = document.body.classList.contains('dark_theme');
      setIsDarkTheme(isDark);
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.body, { attributes: true });

    return () => observer.disconnect();
  }, []);

  const cart = useAppSelector(selectCart);
  const cartEntries = Object.entries(cart);
  const isCheckoutDisibled = cartEntries.length === 0;

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
      <div className={`grid-container ${isDarkTheme ? styles.dark_theme : ''}`}>
        <div className={styles['cart-page__breadcrumbs']}>
          <Breadcrumbs />
        </div>

        <div className={styles['cart-page__title']}>{t('cartTitle')}</div>

        <div
          className={cn('grid-container', styles['cart-page__main-contaner'], {
            [styles['cart-page--empty']]: isCheckoutDisibled,
          })}
        >
          <CartItems />
          {!!totalPrice && (
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
                  isDisibled={isCheckoutDisibled}
                  handleOnClick={handleCheckoutOnClick}
                  buttonText={buttonCheckoutText}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {isModalVisible && (
        <PopupModal
          message={t('checkoutConfirmation')}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
          isDarkTheme={isDarkTheme}
        />
      )}
    </>
  );
};
