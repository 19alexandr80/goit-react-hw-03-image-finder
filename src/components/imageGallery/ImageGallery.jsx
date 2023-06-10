import React from 'react';
import PropTypes from 'prop-types';

import { ImageGalleryStyled } from 'components/imageGallery/ImageGalleryStyled.styled';

import { ImageGalleryItem } from 'components/imageGallery/ImageGalleryItem';

export class ImageGallery extends React.Component {
  render() {
    return (
      <ImageGalleryStyled>
        {this.props.list.map(({ id, webformatURL, largeImageURL }) => {
          return (
            <ImageGalleryItem
              key={id}
              url={webformatURL}
              largeImageURL={largeImageURL}
              toogleModal={this.props.toogleModal}
            />
          );
        })}
      </ImageGalleryStyled>
    );
  }
}

ImageGallery.propTypes = {
  toogleModal: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
