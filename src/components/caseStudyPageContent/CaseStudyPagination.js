import React from 'react';
import {Link} from 'gatsby';

const CaseStudyPagination = ({prevCaseStudy, nextCaseStudy}) => {

  const outputPrevCaseStudyLink = (prevCaseStudy) => {

    if (!prevCaseStudy) {
      return false;
    }

    return (
      <div className="pagination-link previous">
        <span className="pagination-link-label">Previous project</span>
        <Link to={`/case-study/${prevCaseStudy._meta.uid}`}>{prevCaseStudy.project_name}</Link>
      </div>
    )

  }

  const outputNextCaseStudyLink = (nextCaseStudy) => {

    if (!nextCaseStudy) {
      return false;
    }

    return (
      <div className="pagination-link next">
        <span className="pagination-link-label">Next project</span>
        <Link to={`/case-study/${nextCaseStudy._meta.uid}`}>{nextCaseStudy.project_name}</Link>
      </div>
    )

  }

  return (
    <div className="pagination">
      <div className="container">
        <Link to={'/work'}>All projects</Link>
        {outputPrevCaseStudyLink(prevCaseStudy)}
        {outputNextCaseStudyLink(nextCaseStudy)}
      </div>
    </div>
    
    
  )

}

export default CaseStudyPagination;