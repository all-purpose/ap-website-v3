import React from "react"
import { RichText } from "prismic-reactjs"
import CaseStudyExcerpts from "../caseStudyExcerpts/CaseStudyExcerpts"

const HomePageProjects = ({
  pageType,
  uid,
  sectionTitle,
  brandTitle,
  projectsAccessibleName,
  projects,
}) => {
  return (
    <div className="container mb-48">
      <div className="row">
        <div className="col-sm-6 mb-24">
          <div className="eyebrow">
            <RichText render={sectionTitle} />
          </div>
          <div className="heading-02">
            <RichText render={brandTitle} />
          </div>
        </div>
      </div>
      <CaseStudyExcerpts
        pageType={pageType}
        uid={uid}
        accessibleName={projectsAccessibleName}
        fields={projects}
      />
    </div>
  )
}

export default HomePageProjects
