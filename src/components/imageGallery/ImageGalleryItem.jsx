export const ImageGalleryItem = ({ url }) => {
  return (
    <li className="ImageGalleryItem">
      <img src={url} alt="foto" className="ImageGalleryItem-image" />
    </li>
  );
};
