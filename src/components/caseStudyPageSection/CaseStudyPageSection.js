import React from 'react';
import {RichText} from 'prismic-reactjs';

const CaseStudyPageSection = ({ containerType, containerCssClass, containerId, title, content }) => {

  const outputSectionContainer = (containerCssClass, containerId, title, content) => {
    
    if (containerId) {
      return (
        <div id={containerId} className={addCSSClasses(containerCssClass)}>
          <div className="row">
              <div className="col-md-4">
                <RichText render={title} />
              </div>
              <div className="col-md-8">
                <RichText render={content} />
              </div>
            </div>
        </div>
      );
    } else {
      return (
        <div className={addCSSClasses(containerCssClass)}>
          <div class="col-md-4">
            <RichText render={title} />
          </div>
          <div class="col-md-8">
            <RichText render={content} />
          </div>
        </div>
      );
    }
    
  }

  const addCSSClasses = (containerCssClass) => {

    let className = 'case-study-section container';

    if (containerCssClass) {
      className += ` ${containerCssClass}`;
    }

    return className;
  }

  return (
    outputSectionContainer(
      containerCssClass, 
      containerId,
      title,
      content
    )
  )

}

export default CaseStudyPageSection;