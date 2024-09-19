import styles from './Gallery.module.scss';
import React, { useState } from 'react';

interface ImageGalleryProps {
  images: string[];
}

export const Gallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  return (
    <div className={styles['gallery']}>
      <div className={styles['gallery__miniatures']}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Miniature ${index}`}
            className={`${styles['gallery__miniatures__miniature']} ${selectedImage === image ? styles['active'] : ''}`}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>

      <div className={styles['gallery__main-image']}>
        <img src={selectedImage} alt="Selected" />
      </div>
    </div>
  );
};
