import React from 'react';
import VariableContentItem from '../variableContentItem/VariableContentItem';

const VariableContentSection = ({containerCssClass, containerType, fields}) => {

  const addCSSClasses = (containerCssClass, containerType) => {
    let className = 'variable-content';

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

  const outputVariableContentItems = fields => {

    return fields.map((field, index) => {

      return <VariableContentItem
        key={index}
        field={field}
      />

    });

  }

  return (
    <div className={addCSSClasses(containerCssClass, containerType)}>
      <div className="row">
        {outputVariableContentItems(fields)}
      </div>
    </div>

  );

}

export default VariableContentSection;