import { useAppSelector } from '@/app/hooks';
import styles from '../../CartPage.module.scss';
import { CartItem } from '../CartItem/CartItem';
import { selectCart } from '@/features/cartSlice';

export const CartItems = () => {
  const cart = useAppSelector(selectCart);
  const cartEntries = Object.entries(cart);

  if (!cartEntries.length) {
    return (
      <div className={styles['cart-page__products-container']}>
        <div>Your cart is empty</div>
      </div>
    );
  }

  return (
    <div className={styles['cart-page__products-container']}>
      {cartEntries.map(cartItem => (
        <CartItem key={cartItem[0]} cartItem={cartItem} />
      ))}
    </div>
  );
};
