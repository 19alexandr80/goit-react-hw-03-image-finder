import { ImageGalleryItem } from 'components/imageGallery/ImageGalleryItem';

export const ImageGallery = ({ list, toogleModal }) => {
  return (
    <ul className="ImageGallery">
      {list.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            url={webformatURL}
            largeImageURL={largeImageURL}
            toogleModal={toogleModal}
          />
        );
      })}
    </ul>
  );
};
