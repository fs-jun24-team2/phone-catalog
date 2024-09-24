import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppDispatch } from '@/app/hooks';
import { toggleAddToCart } from '@/features/cartSlice';
import { MainButton } from '../MainButton';
import { hasCartProduct } from '@/utils/hasCartProduct';
import { ProductsCategory } from '@/types/ProductsCategory';

type Props = {
  id: string;
  category: ProductsCategory;
  price: number;
};

export const AddToCard = ({ id, price, category }: Props) => {
  const { t } = useTranslation();
  const [isAddedToCart, setIsAddedToCart] = useState(hasCartProduct(id));
  const dispatch = useAppDispatch();

  const buttonAddText = !isAddedToCart ? t('add_to_cart') : t('added');

  const handleAddOnClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    dispatch(toggleAddToCart({ id, category, price }));
    setIsAddedToCart(prev => !prev);
  };

  return (
    <MainButton
      isAdded={isAddedToCart}
      handleOnClick={handleAddOnClick}
      buttonText={buttonAddText}
    />
  );
};
