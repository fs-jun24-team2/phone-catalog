import { Banner } from '@/types/Banner';

export const getBanners = (): Banner[] => {
  const placeholders: Banner[] = [
    {
      id: 0,
      link: '#',
      mainImage: 'images/original/banners/banner_iphone_14_pro.png',
      mediaSets: [
        {
          media: '(max-width: 640px)',
          srcSet: 'images/original/banners/banner_iphone_14_pro_small.png',
        },
      ],
      alt: 'banner iphone 14 pro',
    },
    {
      id: 1,
      link: '#',
      mainImage: 'images/original/banners/banner_iphone_14_pro.png',
      mediaSets: [
        {
          media: '(max-width: 640px)',
          srcSet: 'images/original/banners/banner_iphone_14_pro_small.png',
        },
      ],
      alt: 'banner iphone 14 pro',
    },
    {
      id: 2,
      link: '#',
      mainImage: 'images/original/banners/banner_iphone_14_pro.png',
      mediaSets: [
        {
          media: '(max-width: 640px)',
          srcSet: 'images/original/banners/banner_iphone_14_pro_small.png',
        },
      ],
      alt: 'banner iphone 14 pro',
    },
    {
      id: 3,
      link: '#',
      mainImage: 'images/original/banners/banner_iphone_14_pro.png',
      mediaSets: [
        {
          media: '(max-width: 640px)',
          srcSet: 'images/original/banners/banner_iphone_14_pro_small.png',
        },
      ],
      alt: 'banner iphone 14 pro',
    },
  ];

  return placeholders;
};
