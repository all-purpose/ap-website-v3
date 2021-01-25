import React from "react"
import { Link } from "gatsby"

import "./CaseStudyPagination.scss"

const CaseStudyPagination = ({ prevCaseStudy, nextCaseStudy }) => {
  const outputPrevCaseStudyLink = (prevCaseStudy) => {
    if (!prevCaseStudy) {
      return false
    }

    return (
      <div className="pagination-link previous">
        {/* <span className="pagination-link-label"> {`<-`} Previous project</span> */}
        {/* Temporarily here while we only have 2 projects */}
        <span className="pagination-link-label">Next project -&gt;</span>
        <Link to={prevCaseStudy.url}>
          <span className="pagination-link-name heading-02">{prevCaseStudy.data.project_name}</span>
        </Link>
      </div>
    )
  }

  const outputNextCaseStudyLink = (nextCaseStudy) => {
    if (!nextCaseStudy) {
      return false
    }

    return (
      <div className="pagination-link next">
        <span className="pagination-link-label">Next project -&gt;</span>
        <Link to={nextCaseStudy.url}>
          <span className="pagination-link-name heading-02">{nextCaseStudy.data.project_name}</span>
        </Link>
      </div>
    )
  }

  return (
    <div className="pagination">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <Link className="pagination__all-projects" to={"/work"}>
              <span>*</span> All projects
            </Link>
          </div>
          <div className="col-sm-6">
            {outputNextCaseStudyLink(nextCaseStudy)}
            {outputPrevCaseStudyLink(prevCaseStudy)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CaseStudyPagination
