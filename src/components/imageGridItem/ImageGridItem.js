import React from 'react';
import {RichText} from 'prismic-reactjs';

const ImageGridItem = ({image, caption}) => {

  const outputImageGridItemContainer = (image, caption) => {
    if (caption) {
      return (
        <figure className="image-grid-item col-sm">
          <div className="image-grid-item-image">
            <img src={image.url} alt={image.alt} />
          </div>
          <figcaption className="image-grid-item-caption">
            {RichText.asText(caption)}
          </figcaption>
        </figure>
      );
    } else {
      return (
        <div className="image-grid-item col-sm">
          <div className="image-grid-item-image">
            <img src={image.url} alt={image.alt} />
          </div>
        </div>
      );
    }
  }

  return outputImageGridItemContainer(image, caption);

}

export default ImageGridItem;