import styles from './PictureSlide.module.scss';

import 'swiper/css';
import cn from 'classnames';
import { Banner } from '@/types/Banner';
import React from 'react';

type Props = {
  banner: Banner;
};

export const PictureSlide: React.FC<Props> = ({ banner }) => {
  const { id, link, mainImage, mediaSets, alt } = banner;
  const hasPlaceholderStyle = id % 2 === 1;

  return (
    <a href={link}>
      <picture>
        {mediaSets.map(mediaSets => {
          const { media, srcSet } = mediaSets;

          return <source key={media} media={media} srcSet={srcSet} />;
        })}

        <img
          src={mainImage}
          className={cn(styles['picture-slide__image'], {
            [styles['picture-slide__image-placeholder']]: hasPlaceholderStyle,
          })}
          alt={alt}
        />
      </picture>
    </a>
  );
};
