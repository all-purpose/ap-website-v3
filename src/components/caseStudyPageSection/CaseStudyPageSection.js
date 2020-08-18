import React from "react"
import { RichText } from "prismic-reactjs"

const CaseStudySection = ({
  containerType,
  containerCssClass,
  containerId,
  title,
  content,
}) => {
  const outputSectionContainer = (
    containerType,
    containerCssClass,
    containerId,
    title,
    content
  ) => {
    if (containerId) {
      return (
        <div
          id={containerId}
          className={addCSSClasses(containerCssClass, containerType)}
        >
          <div className="row">
            <div className="col-md-4">
              <RichText render={title} />
            </div>
            <div className="col-md-8">
              <RichText render={content} />
            </div>
          </div>
        </div>
      )
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
      )
    }
  }

  const addCSSClasses = (containerCssClass, containerType) => {
    let className = "case-study-section"

    switch (containerType) {
      case "Grid-constrained":
        className += " container"
        break
      case "Full Bleed":
        className += " full-bleed"
        break
      default:
        break
    }
    if (containerCssClass) {
      className += ` ${containerCssClass}`
    }
    return className
  }

  return outputSectionContainer(
    containerType,
    containerCssClass,
    containerId,
    title,
    content
  )
}

export default CaseStudySection
