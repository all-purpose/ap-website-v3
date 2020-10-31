import React from 'react';
import ImageGroupItem from '../imageGroupItem/ImageGroupItem';

const ImageGroup = ({containerCssClass, containerId, fields}) => {

  const outputImageGroup = (containerId, children) => {
    if (containerId) {
      return (
        <div id={containerId} className={addCSSClasses(containerCssClass)}>{children}</div>
      )
    } else {
      return (
        <div className={addCSSClasses(containerCssClass)}>{children}</div>
      )
    }

  }

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

  return outputImageGroup(containerId, 
    <div className="row">
      {outputImageGroupItems(fields)}
    </div>
  );

}

export default ImageGroup;