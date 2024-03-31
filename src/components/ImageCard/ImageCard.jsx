import css from "./ImageCard.module.css";

const ImageCard = ({ img, onImageClick }) => {
  const imageData = {
    imageSrc: img.urls.regular,
    imageAltDescription: img.alt_description,
    imageDescription: img.description,
    imageAutor: img.user.name,
    imageLikes: img.likes,
  };

  return (
    <div className={css.imageCard} onClick={() => onImageClick(imageData)}>
      <img
        src={img.urls.small}
        alt={img.alt_description}
        width={310}
        height={200}
      />
      <div className={css.imageDescrWrap}>
        <p className={css.imageDescr}>
          Author: <span className={css.imageSpan}>{img.user.name}</span>
        </p>
        <p className={css.imageDescr}>
          Likes: <span className={css.imageSpan}>{img.likes}</span>
        </p>
      </div>
    </div>
  );
};

export default ImageCard;
