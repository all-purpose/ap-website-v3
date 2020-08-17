import React from 'react';
import ImageGroupItem from '../imageGroupItem/ImageGroupItem';

const ImageGroup = ({containerCssClass, containerId, fields}) => {

  const addCSSClasses = (containerCssClass) => {
    let className = 'image-group container';

    if (containerCssClass) {
      className += ` ${containerCssClass}`;
    }
    return className;
  }

  const outputImageGroupItems = fields => {

    return fields.map((field, index) => {

      return <ImageGroupItem
        key={index}
        image={field.image}
        caption={field.image_caption}
      />

    });

  }

  return (
    <div id={containerId ? containerId : ''} className={addCSSClasses(containerCssClass)}>
      <div className="row">
        {outputImageGroupItems(fields)}
      </div>
    </div>

  );

}

export default ImageGroup;