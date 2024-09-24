import { Banner } from '@/types/Banner';

export const getBanners = (): Banner[] => {
  const placeholders: Banner[] = [
    {
      id: 0,
      link: 'phones/apple-iphone-14-128gb-midnight',
      mainImage: 'images/original/banners/banner_iphone_14_pro.png',
      mediaSets: [
        {
          media: '(max-width: 640px)',
          srcSet: 'images/original/banners/banner_iphone_14_pro_small.png',
        },
      ],
      alt: 'banner iphone 14 pro',
      title: '',
    },
    {
      id: 1,
      link: 'tablets/apple-ipad-pro-11-2021-128gb-spacegray',
      mainImage: 'images/original/banners/banner_apple_ipad-pro_11.png',
      mediaSets: [
        {
          media: '(max-width: 640px)',
          srcSet: 'images/original/banners/banner_apple_ipad-pro_11_small.png',
        },
      ],
      alt: 'Apple iPad Pro 11',
      title: 'Apple iPad Pro 11',
    },
    {
      id: 2,
      link: 'accessories/apple-watch-series-6-44mm-gold',
      mainImage: 'images/original/banners/banner_apple_watch_series_6.png',
      mediaSets: [
        {
          media: '(max-width: 640px)',
          srcSet:
            'images/original/banners/banner_apple_watch_series_6_small.png',
        },
      ],
      alt: 'Apple Watch series 6',
      title: 'Apple Watch series 6',
    },
    {
      id: 3,
      link: 'phones/apple-iphone-xs-max-256gb-gold',
      mainImage: 'images/original/banners/banner_apple_iphone_xs_max_gold.png',
      mediaSets: [
        {
          media: '(max-width: 640px)',
          srcSet:
            'images/original/banners/banner_apple_iphone_xs_max_gold_small.png',
        },
      ],
      alt: 'Iphone XS Max Gold',
      title: 'Iphone XS Max Gold',
    },
  ];

  return placeholders;
};
