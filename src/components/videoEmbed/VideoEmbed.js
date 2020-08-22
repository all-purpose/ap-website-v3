import React from 'react';

const VideoEmbed = ({sectionId, sectionCssClass, embedCode}) => {


  let embedCodeText = embedCode[0].text || '';

  const outputVideoEmbed = (containerId, containerCssClass, children
    ) => {
      if (containerId) {
        return (
          <div id={containerId} className={addCSSClasses(containerCssClass)}>
            {children}
          </div>
        )
      } else {
        return (
          <div className={addCSSClasses(containerCssClass)}>
            {children}
          </div>
        )
      }
    }
  
  const addCSSClasses = (containerCssClass) => {

    let className = "video-embed"

    if (containerCssClass) {
      className += ` ${containerCssClass}`
    }
    return className
  }

  return outputVideoEmbed(
    sectionId,
    sectionCssClass,
    <div className="container">
      <div className="embed" dangerouslySetInnerHTML={{__html: embedCodeText}}></div>
    </div>
    
  )

}

export default VideoEmbed;