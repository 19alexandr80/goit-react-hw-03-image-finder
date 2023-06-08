export const ImageGalleryItem = ({ url, largeImageURL, toogleModal }) => {
  return (
    <li
      className="ImageGalleryItem"
      data-url={largeImageURL}
      onClick={toogleModal}
    >
      <img src={url} alt="foto" className="ImageGalleryItem-image" />
    </li>
  );
};
