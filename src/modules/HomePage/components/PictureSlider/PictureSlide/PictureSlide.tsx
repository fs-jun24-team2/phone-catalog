import styles from './PictureSlide.module.scss';

import 'swiper/css';
import { Banner } from '@/types/Banner';
import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  banner: Banner;
};

export const PictureSlide: React.FC<Props> = ({ banner }) => {
  const { link, title, mainImage, mediaSets, alt } = banner;

  return (
    <div className={styles['picture-slide']}>
      <Link to={link} className={styles['picture-slide__link']}>
        Order now!
      </Link>
      <picture>
        {mediaSets.map(mediaSets => {
          const { media, srcSet } = mediaSets;

          return <source key={media} media={media} srcSet={srcSet} />;
        })}

        <img
          src={mainImage}
          className={styles['picture-slide__image']}
          alt={alt}
        />
      </picture>
      <p className={styles['picture-slide__title']}>{title}</p>
    </div>
  );
};
