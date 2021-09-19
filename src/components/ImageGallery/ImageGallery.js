import React from 'react';
import s from '../ImageGallery/ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from '../ImageGalleryItem/ImageGalleryItem.module.css';
const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={s.ImageGallery}>
      {images.map(({ id, webformatURL, tags, largeImageURL }) => {
        return (
          <li
            className={styles.ImageGalleryItem}
            key={id}
            onClick={() => {
              openModal(largeImageURL, tags);
            }}
          >
            <ImageGalleryItem url={webformatURL} alt={tags} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
