import React from "react"
import { Link } from "gatsby"

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
      return <h2 className="case-study-excerpt-project">{projectName}</h2>
    } else {
      return <h3 className="case-study-excerpt-project">{projectName}</h3>
    }
  }

  return (
    <div className="case-study-excerpt clear-grid">
      <Link to={link}>
        <div className="case-study-excerpt-image">
          <img className="w-full" src={image.url} alt={image.alt} />
        </div>
        {outputCaseStudyExcerptHeading(pageType, uid, projectName)}
        <div className="case-study-excerpt-roles body-short-02">{roles}</div>
      </Link>
    </div>
  )
}

export default CaseStudyExcerpt
