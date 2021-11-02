import React from 'react';
import {RichText} from 'prismic-reactjs';

const FlexibleContentItem = ({ field }) => {

  const item = {
    itemContent: field.item_content,
    itemCssClass: field.item_css_class,
    itemId: field.item_id
  }

  const {
    itemContent,
    itemCssClass,
    itemId
  } = item;

  const outputItemContainer = (itemId, itemCssClass, itemContent) => {
    
    if (itemId) {
      return (
        <div id={itemId} className={addItemCSSClasses(itemCssClass)}>
          {outputItemContent(itemContent)}
        </div>
      );
    } else {
      return (
        <div className={addItemCSSClasses(itemCssClass)}>
          {outputItemContent(itemContent)}
        </div>
      );
    }
    
  }

  const addItemCSSClasses = (itemCssClass) => {
    
    let className = 'content-item';

    if (itemCssClass) {
      className += ` ${itemCssClass}`;
    }
    return className;
  }

  const outputItemContent = (itemContent) => {

    if (itemContent.richText[0].type === 'image') {
      const image = itemContent.richText[0];

      if (!image.url) {
        return false;
      }

      if (process.env.NODE_ENV === 'development' && !image.alt) {
        console.warn('No alt text for image: %s. Is this intentional?', image.url);
      }

      return (
        <img 
          src={image.url} 
          alt={image.alt || ''} 
        />
      );
    } else {
      return (
        <RichText render={itemContent.richText} />
      );
    }
  }

  return (
    <>
      {outputItemContainer(itemId, itemCssClass, itemContent)}
    </>
  );

}

export default FlexibleContentItem;