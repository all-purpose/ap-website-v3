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

  const itemType = itemContent[0].type;

  const outputItemContainer = (itemType, itemId, itemCssClass) => {
    
    if (itemId) {
      return (
        <div id={itemId} className={addItemCSSClasses(itemCssClass)}>
          {outputItemContent(itemType, itemContent)}
        </div>
      );
    } else {
      return (
        <div className={addItemCSSClasses(itemCssClass)}>
          {outputItemContent(itemType, itemContent)}
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

  const outputItemContent = (type, itemContent) => {
    console.log(itemContent);
    if (type === 'image') {
      const image = itemContent[0];
      return (
        <img src={image.url} alt={image.alt} />
      );
    } else {
      return (
        <RichText render={itemContent} />
      );
    }
  }

  return (
    <>
      {outputItemContainer(itemType, itemId, itemCssClass, itemContent)}
    </>
  );

}

export default FlexibleContentItem;