import styles from './ProductsSlider.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';

import { useAppSelector } from '@/app/hooks';
import { ProductCard } from '@/modules/shared/components/ProductCard';
import React, { useState } from 'react';
import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import cn from 'classnames';

type Props = {
  title: string;
};

export const ProductsSlider: React.FC<Props> = ({ title }) => {
  const products = useAppSelector(state => state.products);
  const phonePlaceholders = Object.values(products.phones).slice(0, 10);

  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  return (
    <section>
      <div className={styles['products-slider-header']}>
        <div className={styles['products-slider-header__title']}>{title}</div>

        <div className={styles['products-slider-header__btns-container']}>
          <button
            className={cn(
              styles['products-slider-header__btn'],
              styles['products-slider-header__btn-prev'],
            )}
            onClick={() => {
              swiper?.slidePrev();
            }}
          ></button>

          <button
            className={cn(
              styles['products-slider-header__btn'],
              styles['products-slider-header__btn-next'],
            )}
            onClick={() => {
              swiper?.slideNext();
            }}
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
          1200: {
            slidesPerView: 4,
          },
        }}
        onSwiper={swiperInstance => {
          setSwiper(swiperInstance);
        }}
      >
        {phonePlaceholders.map(product => (
          <SwiperSlide>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
