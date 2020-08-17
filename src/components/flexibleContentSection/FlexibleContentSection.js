import React from 'react';
import FlexibleContentItem from '../flexibleContentItem/FlexibleContentItem';

const FlexibleContentSection = ({containerCssClass, fields}) => {

  const addCSSClasses = (containerCssClass) => {
    let className = 'variable-content container';

    if (containerCssClass) {
      className += ` ${containerCssClass}`;
    }
    return className;
  }

  const outputVariableContentItems = fields => {

    return fields.map((field, index) => {

      return <FlexibleContentItem
        key={index}
        field={field}
      />

    });

  }

  return (
    <div className={addCSSClasses(containerCssClass)}>
      {outputVariableContentItems(fields)}
    </div>

  );

}

export default FlexibleContentSection;