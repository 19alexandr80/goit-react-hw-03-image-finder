import { ImageGalleryItem } from 'components/imageGallery/ImageGalleryItem';

export const ImageGallery = ({ list }) => {
  return (
    <ul className="ImageGallery">
      {list.map(({ id, webformatURL }) => {
        return <ImageGalleryItem key={id} url={webformatURL} />;
      })}
    </ul>
  );
};
