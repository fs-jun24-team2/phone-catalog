import styles from './ProductsSlider.module.scss';
import 'swiper/css';

import { ProductCard } from '@/modules/shared/components/ProductCard';
import React, { useState } from 'react';
import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import cn from 'classnames';
import { Product } from '@/types/Product';

type Props = {
  title: string;
  products: Product[];
};

export const ProductsSlider: React.FC<Props> = ({ title, products }) => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [isBtnPrevDisabled, setIsBtnPrevDisabled] = useState(false);
  const [isBtnNextDisabled, setIsBtnNextDisabled] = useState(true);

  const handleSlideChange = (swiperInstance: SwiperType) => {
    setIsBtnPrevDisabled(swiperInstance.isBeginning);
    setIsBtnNextDisabled(swiperInstance.isEnd);
  };

  return (
    <section>
      <div className={styles['products-slider-header']}>
        <div className={styles['products-slider-header__title']}>{title}</div>

        <div className={styles['products-slider-header__buttons-container']}>
          <button
            className={cn(
              styles['products-slider-header__button'],
              styles['products-slider-header__button-prev'],
              {
                [styles['products-slider-header__button--active']]:
                  !isBtnPrevDisabled,
                [styles['products-slider-header__button--disable']]:
                  isBtnPrevDisabled,
              },
            )}
            onClick={() => {
              swiper?.slidePrev();
            }}
            disabled={isBtnPrevDisabled}
          ></button>

          <button
            className={cn(
              styles['products-slider-header__button'],
              styles['products-slider-header__button-next'],
              {
                [styles['products-slider-header__button--active']]:
                  !isBtnNextDisabled,
                [styles['products-slider-header__button--disable']]:
                  isBtnNextDisabled,
              },
            )}
            onClick={() => {
              swiper?.slideNext();
            }}
            disabled={isBtnNextDisabled}
          ></button>
        </div>
      </div>

      <Swiper
        spaceBetween={16}
        slidesPerView={1.5}
        breakpoints={{
          640: {
            slidesPerView: 2.5,
          },
          830: {
            slidesPerView: 3,
          },
          1020: {
            slidesPerView: 3.5,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
        onSwiper={swiperInstance => {
          setSwiper(swiperInstance);
          handleSlideChange(swiperInstance);
        }}
        onSlideChange={swiperInstance => {
          setSwiper(swiperInstance);
          handleSlideChange(swiperInstance);
        }}
      >
        {products.map(product => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
