import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={css.gallery}>
      {images.map((image) => {
        return (
          <li className={css.galleryItem} key={image.id}>
            <ImageCard image={image} onImageClick={onImageClick} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
