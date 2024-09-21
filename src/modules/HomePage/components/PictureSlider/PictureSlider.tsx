import styles from './PictureSlider.module.scss';

import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { getBanners } from '@/utils/getBanners';
import { PaginationOptions } from '../../../../../node_modules/swiper/types/modules/pagination';
import { Banner } from '@/types/Banner';
import { PictureSlide } from './PictureSlide/PictureSlide';

export const PictureSlider: React.FC = () => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [banners, setBanners] = useState<Banner[] | null>(null);
  const pagination: PaginationOptions = {
    clickable: true,
    renderBullet: function (_index: number, className: string) {
      return `<span class="${className} ${styles['picture-slider__swiper-pagination']}"></span>`;
    },
  };

  useEffect(() => {
    const fetchedBanners = getBanners();

    setBanners(fetchedBanners);
  }, []);

  return (
    <section className={cn('grid-container', styles['picture-slider'])}>
      <button
        className={cn(
          styles['picture-slider__button'],
          styles['picture-slider__button-prev'],
        )}
        onClick={() => {
          swiper?.slidePrev();
        }}
      ></button>

      <Swiper
        className={styles['picture-slider__swiper']}
        modules={[Pagination, EffectFade, Autoplay]}
        effect={'fade'}
        centeredSlides
        autoHeight
        pagination={pagination}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop
        slidesPerView={1}
        onSwiper={swiperInstance => {
          setSwiper(swiperInstance);
        }}
        onSlideChange={swiperInstance => {
          setSwiper(swiperInstance);
        }}
      >
        {banners?.map(banner => (
          <SwiperSlide key={banner.id}>
            <PictureSlide banner={banner} />
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        className={cn(
          styles['picture-slider__button'],
          styles['picture-slider__button-next'],
        )}
        onClick={() => {
          swiper?.slideNext();
        }}
      ></button>
    </section>
  );
};
