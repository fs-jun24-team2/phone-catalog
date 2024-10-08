import styles from './ProductsSlider.module.scss';
import 'swiper/css';

import { ProductCard } from '@/modules/shared/components/ProductCard';
import { useEffect, useState } from 'react';
import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import cn from 'classnames';
import { Product } from '@/types/Product';
import { AggregateProduct } from '@/types/AggregateProduct';
import { ProductsCategory } from '@/types/ProductsCategory';

type Props<T> = {
  title: string;
  products: T[];
  category?: ProductsCategory;
};

export const ProductsSlider = <T extends Product | AggregateProduct>({
  title,
  products,
  category,
}: Props<T>) => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [isBtnPrevDisabled, setIsBtnPrevDisabled] = useState(true);
  const [isBtnNextDisabled, setIsBtnNextDisabled] = useState(false);

  const handleSlideChange = (swiperInstance: SwiperType) => {
    if (swiperInstance.slides.length > 0) {
      setIsBtnPrevDisabled(swiperInstance.isBeginning);
      setIsBtnNextDisabled(swiperInstance.isEnd);
    }
  };

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      const isDark = document.body.classList.contains('dark_theme');
      setIsDarkTheme(isDark);
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.body, { attributes: true });

    return () => observer.disconnect();
  });

  return (
    <section>
      <div
        className={`${styles['products-slider-header']} ${isDarkTheme ? styles['products-slider-header-dark'] : ''}`}
      >
        <div className={styles['products-slider-header__title']}>{title}</div>

        <div className={styles['products-slider-header__buttons-container']}>
          <button
            className={cn(
              styles['products-slider-header__button'],
              styles['products-slider-header__button-prev'],
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
            <ProductCard<T>
              product={product}
              category={category || (product.category as ProductsCategory)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
