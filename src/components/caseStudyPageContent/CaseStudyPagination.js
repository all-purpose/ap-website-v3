import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import "./CaseStudyPagination.scss"

const CaseStudyPagination = ({ currentCaseStudyUid }) => {

  const paginationQuery = useStaticQuery(
    graphql`
      query {
        allPrismicWorkPage {
          edges {
            node {
              data {
                case_studies {
                  case_study {
                    document {
                      ... on PrismicCaseStudy {
                        uid
                        data {
                          project_name
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  const {
    case_studies
  } = paginationQuery?.allPrismicWorkPage?.edges[0]?.node?.data;

  const caseStudies = case_studies.map((obj) => {
    const doc = obj?.case_study?.document;
    return {
      name: doc.data?.project_name,
      uid: doc?.uid
    }
  });

  const currentCsPaginationIndex = caseStudies.findIndex((obj) => obj?.uid === currentCaseStudyUid);

  const getPrevCaseStudy = () => {
    if (currentCsPaginationIndex === 0) {
      return caseStudies[caseStudies.length - 1];
    } else {
      return caseStudies[currentCsPaginationIndex - 1];
    }   
  };

  const getNextCaseStudy = () => {
    if (currentCsPaginationIndex === caseStudies.length - 1) {
      return caseStudies[0];
    } else {
      return caseStudies[currentCsPaginationIndex + 1];
    }   
  };

  const outputPrevCaseStudyLink = () => {

    const prevCaseStudy = getPrevCaseStudy();
    
    if (!prevCaseStudy) {
      return false
    }

    return (
      <div className="pagination-link previous">
        <div className="pagination-link-label mb-6"><span aria-hidden="true">← </span>Previous project</div>
        <Link to={`/case-study/${prevCaseStudy.uid}`}>
          <span className="pagination-link-name heading-02">
            {prevCaseStudy.name}
          </span>
        </Link>
      </div>
    )
  }

  const outputNextCaseStudyLink = () => {

    const nextCaseStudy = getNextCaseStudy();

    if (!nextCaseStudy) {
      return false
    }

    return (
      <div className="pagination-link next md:text-right">
        <div className="pagination-link-label mb-6">Next project<span aria-hidden="true"> ➝</span></div>
        <Link to={`/case-study/${nextCaseStudy.uid}`}>
          <span className="pagination-link-name heading-02">
            {nextCaseStudy.name}
          </span>
        </Link>
      </div>
    )
  }

  return (
    <div className="pagination">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 mb-12">
            <Link className="pagination__all-projects" to={"/work"}>
              <span>*</span> Selected work
            </Link>
          </div>
        </div>
        <div className="row justify-between">
          <div className="col-sm-6 col-lg-4 mt-12">
            {outputPrevCaseStudyLink()}
          </div>
          <div className="col-sm-6 col-lg-4 mt-12">
            {outputNextCaseStudyLink()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CaseStudyPagination
