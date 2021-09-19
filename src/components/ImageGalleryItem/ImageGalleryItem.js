import React from 'react';
import s from '../ImageGalleryItem/ImageGalleryItem.module.css';

// import PropTypes from 'prop-types';

const ImageGalleryItem = ({ url, alt }) => {
  return <img src={url} alt={alt} className={s.ImageGalleryItem_image} />;
};
export default ImageGalleryItem;
