import React from 'react';
import {RichText} from 'prismic-reactjs';
import CaseStudyExcerpts from '../caseStudyExcerpts/CaseStudyExcerpts';


const HomePageProjects = ({pageType, uid, sectionTitle, brandTitle, projectsAccessibleName, projects}) => {

  return (
    <div className="container">
      <div className="eyebrow">
        <RichText render={sectionTitle} />
      </div>
      <div className="heading-02">
        <RichText render={brandTitle} />
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

export default HomePageProjects;