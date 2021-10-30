import React from "react"
import { RichText } from "prismic-reactjs"

const CaseStudySection = ({
  containerId,
  containerCssClass,
  title,
  content,
}) => {
  const outputSection = (containerId, containerCssClass, children) => {
    if (containerId) {
      return (
        <div id={containerId} className={addCSSClasses(containerCssClass)}>
          {children}
        </div>
      )
    } else {
      return <div className={addCSSClasses(containerCssClass)}>{children}</div>
    }
  }

  const addCSSClasses = (containerCssClass) => {
    let className = "case-study-section container"

    if (containerCssClass) {
      className += ` ${containerCssClass}`
    }
    return className
  }

  return outputSection(
    containerId,
    containerCssClass,
    <div className="row">
      <div className="col-md-3 case-study-section-title heading-01 mb-8">
        <RichText render={title.richText} />
      </div>
      <div className="col-md-8 body-long-02">
        <RichText render={content.richText} />
      </div>
    </div>
  )
}

export default CaseStudySection
