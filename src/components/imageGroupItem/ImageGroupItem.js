import React from 'react';
import {RichText} from 'prismic-reactjs';

const ImageGroupItem = ({image, caption}) => {

  const outputImageGroupItemContainer = (image, caption) => {
    if (caption) {
      return (
        <figure className="image-group-item col-sm">
          <div className="image-group-item-image">
            <img src={image.url} alt={image.alt} />
          </div>
          <figcaption className="image-group-item-caption">
            {RichText.asText(caption)}
          </figcaption>
        </figure>
      );
    } else {
      return (
        <div className="image-group-item col-sm">
          <div className="image-group-item-image">
            <img src={image.url} alt={image.alt} />
          </div>
        </div>
      );
    }
  }

  return outputImageGroupItemContainer(image, caption);

}

export default ImageGroupItem;