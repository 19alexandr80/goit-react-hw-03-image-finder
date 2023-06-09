import PropTypes from 'prop-types';

import {
  ImageGalleryItemStyled,
  ImageGalleryItemImageStyled,
} from 'components/imageGallery/ImageGalleryStyled.styled';

export const ImageGalleryItem = ({ url, largeImageURL, toogleModal }) => {
  return (
    <ImageGalleryItemStyled data-url={largeImageURL} onClick={toogleModal}>
      <ImageGalleryItemImageStyled src={url} alt="foto" />
    </ImageGalleryItemStyled>
  );
};
ImageGalleryItem.propTypes = {
  toogleModal: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
