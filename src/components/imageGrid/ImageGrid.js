import React from 'react';
import ImageGridItem from '../imageGridItem/ImageGridItem';

const ImageGrid = ({containerCssClass, containerType, containerId, fields}) => {

  const addCSSClasses = (containerCssClass, containerType) => {
    let className = 'image-grid';

    switch (containerType) {
      case 'Grid-constrained': 
        className += ' container'; 
        break;
      case 'Full Bleed': 
        className += ' full-bleed';
        break;
      default:
        break;
    }
    if (containerCssClass) {
      className += ` ${containerCssClass}`;
    }
    return className;
  }

  const outputImageGridItems = fields => {

    return fields.map((field, index) => {

      return <ImageGridItem
        key={index}
        image={field.grid_image}
        caption={field.grid_image_caption}
      />

    });

  }

  return (
    <div id={containerId ? containerId : ''} className={addCSSClasses(containerCssClass, containerType)}>
      <div className="row">
        {outputImageGridItems(fields)}
      </div>
    </div>

  );

}

export default ImageGrid;