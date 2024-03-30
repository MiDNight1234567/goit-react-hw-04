import css from "./ImageCard.module.css";
const ImageCard = ({ image, onImageClick }) => {
  const imageData = {
    imageSrc: image.urls.regular,
    imageAltDescription: image.alt_description,
    imageDescription: image.description,
    imageAutor: image.user.name,
    imageLikes: image.likes,
  };

  return (
    <div className={css.imageCard} onClick={() => onImageClick(imageData)}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        width={310}
        height={200}
      />
      <div className={css.imageDescrWrap}>
        <p className={css.imageDescr}>
          Author: <span className={css.imageSpan}>{image.user.name}</span>
        </p>
        <p className={css.imageDescr}>
          Likes: <span className={css.imageSpan}>{image.likes}</span>
        </p>
      </div>
    </div>
  );
};

export default ImageCard;
