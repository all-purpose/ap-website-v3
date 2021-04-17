import React from "react"
import { Link } from "gatsby"
import "./CaseStudyExcerpt.scss"

const CaseStudyExcerpt = ({
  link,
  image,
  projectName,
  roles,
}) => {

  if (process.env.NODE_ENV === 'development' && !image.alt) {
    console.warn('No alt text for image: %s. Is this intentional?', image.url);
  }

  const outputCaseStudyExcerptHeading = (projectName) => {
    return (
      <h3 className="case-study-excerpt-project heading-01 sans">
        {projectName}
      </h3>
    )
  }

  return (
    <div className="case-study-excerpt clear-grid mb-16">
      <Link to={link} className="case-study-excerpt-link">
        {image.url &&
        <div className="case-study-excerpt-image">
          <img
            className="w-full mb-4"
            loading="lazy"
            src={image.url}
            alt={image.alt || ''}
          />
        </div>
        }
        {outputCaseStudyExcerptHeading(projectName)}
        <div className="case-study-excerpt-roles body-01 mt-2">{roles}</div>
      </Link>
    </div>
  )
}

export default CaseStudyExcerpt
