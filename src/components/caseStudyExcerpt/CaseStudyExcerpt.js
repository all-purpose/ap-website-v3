import React from "react"
import { Link } from "gatsby"
import "./CaseStudyExcerpt.scss"

const CaseStudyExcerpt = ({
  pageType,
  uid,
  link,
  image,
  projectName,
  roles,
}) => {
  const outputCaseStudyExcerptHeading = (pageType, uid, projectName) => {
    if (pageType === "page" && uid === "work") {
      return (
        <h2 className="case-study-excerpt-project heading-01 sans">
          {projectName}
        </h2>
      )
    } else {
      return (
        <h3 className="case-study-excerpt-project heading-01 sans">
          {projectName}
        </h3>
      )
    }
  }

  return (
    <div className="case-study-excerpt clear-grid mb-16">
      <Link to={link} className="case-study-excerpt-link">
        <div className="case-study-excerpt-image">
          <img
            className="w-full mb-4"
            loading="lazy"
            src={image.url}
            alt={image.alt}
          />
        </div>
        {outputCaseStudyExcerptHeading(pageType, uid, projectName)}
        <div className="case-study-excerpt-roles body-01 mt-2">{roles}</div>
      </Link>
    </div>
  )
}

export default CaseStudyExcerpt
