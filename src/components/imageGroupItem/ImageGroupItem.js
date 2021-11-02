import React from 'react';
import {RichText} from 'prismic-reactjs';

const ImageGroupItem = ({image, caption}) => {

  if (!image.url) {
    return false;
  }

  if (process.env.NODE_ENV === 'development' && !image.alt) {
    console.warn('No alt text for image: %s. Is this intentional?', image.url);
  }

  const outputImageGroupItemContainer = (image, caption) => {

    if (caption.richText.length > 0) {
      return (
        <figure className="image-group-item col-sm">
          <div className="image-group-item-image">
            <img 
              src={image.url} 
              alt={image.alt || ''} 
            />
          </div>
          <figcaption className="image-group-item-caption">
            {RichText.asText(caption.richText)}
          </figcaption>
        </figure>
      );
    } else {
      return (
        <div className="image-group-item col-sm">
          <div className="image-group-item-image">
            <img 
              src={image.url} 
              alt={image.alt || ''}
            />
          </div>
        </div>
      );
    }
  }

  return outputImageGroupItemContainer(image, caption);

}

export default ImageGroupItem;