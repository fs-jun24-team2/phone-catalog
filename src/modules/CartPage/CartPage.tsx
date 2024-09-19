import { useAppSelector } from '@/app/hooks';
import { Breadcrumbs } from '../shared/components/Breadcrumbs';
import styles from './CartPage.module.scss';
import cn from 'classnames';
import { MainButton } from '../shared/components/MainButton';
import React from 'react';

export const CartPage = () => {
  const products = useAppSelector(state => state.products);
  const phonePlaceholders = Object.values(products.phones).slice(0, 3);
  const totalPrices = 1234;
  const totalProductsAmount = 3;

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
        <div className={styles['cart-page__products-container']}>
          {phonePlaceholders.map(product => {
            const { id, name } = product;
            const image = product.images?.[0];
            const priceToShow = product.priceDiscount
              ? product.priceDiscount
              : product.priceRegular;
            const productAmount = 1;

            return (
              <div key={id} className={styles['product']}>
                <div className={styles['product__block']}>
                  <button className={styles['product__button-delete']}></button>
                  <a href="#" className={styles['product__photo-container']}>
                    <img
                      src={image}
                      alt="Product image"
                      className={styles['product__photo']}
                    />
                  </a>
                  <p className={styles['product__name']}>{name}</p>
                </div>

                <div
                  className={cn(
                    styles['product__block'],
                    styles['product__block-price'],
                  )}
                >
                  <div className={styles['product__counter-container']}>
                    <button
                      className={cn(
                        styles['product__counter-button'],
                        styles['product__counter-button-minus'],
                      )}
                    ></button>
                    <div className={styles['product__counter-number']}>
                      {productAmount}
                    </div>
                    <button
                      className={cn(
                        styles['product__counter-button'],
                        styles['product__counter-button-plus'],
                      )}
                    ></button>
                  </div>

                  <div className={styles['product__price']}>${priceToShow}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles['checkout']}>
          <div className={styles['checkout__price-and-amount']}>
            <div className={styles['checkout__price']}>${totalPrices}</div>
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
