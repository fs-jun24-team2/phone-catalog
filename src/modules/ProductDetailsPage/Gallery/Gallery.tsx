import styles from './Gallery.module.scss';
import React, { useEffect, useState } from 'react';
import cn from 'classnames';

interface ImageGalleryProps {
  images: string[];
}

export const Gallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images.at(0));

  useEffect(() => {
    setSelectedImage(images.at(0));
  }, [images]);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  return (
    <div>
      <div className={styles['gallery']}>
        <div className={styles['gallery__miniatures']}>
          {images.map((image, index) => {
            const isActive = selectedImage === image;

            return (
              <div
                className={cn(styles['gallery__miniature-container'], {
                  [styles['gallery__miniature-container--active']]: isActive,
                })}
              >
                <img
                  key={index}
                  src={image}
                  alt={`Miniature ${index}`}
                  className={cn(styles['gallery__miniature'], {
                    [styles['gallery__miniature--active']]: isActive,
                  })}
                  onClick={() => handleImageClick(image)}
                />
              </div>
            );
          })}
        </div>

        <div className={styles['gallery__main-image-container']}>
          <img
            src={selectedImage}
            alt="Selected image"
            className={styles['gallery__main-image']}
          />
        </div>
      </div>
    </div>
  );
};
