import React from 'react';
import CaseStudyExcerpt from '../caseStudyExcerpt/CaseStudyExcerpt';

const CaseStudyExcerpts = ({pageType, pageUid, accessibleName, fields}) => {

  const excerptListProps = {
    className: "case-study-excerpts row"
  };

  if (pageType === "home_page" && pageUid === "home" && accessibleName) {
    excerptListProps['aria-label'] = accessibleName
  }

  const outputCaseStudyExcerpts = fields => {
    return fields.map((field, index) => {

      const {
        case_study_excerpt_image,
        case_study_excerpt_roles,
        project_name
      } = field.case_study.document.data;

      const uid = field.case_study.document.uid;

      return (
        <li 
          key={index}
          className="col-sm-6">
          <CaseStudyExcerpt
            pageType={pageType}
            pageUid={pageUid}
            link={`/case-study/${uid}`}
            image={case_study_excerpt_image}
            projectName={project_name}
            roles={case_study_excerpt_roles}
          />
        </li>
      );

    });
  }
  
  return (
    <>
      {pageType === "work_page" && pageUid === "work" && accessibleName && (
        <h2 className="sr-only">{accessibleName}</h2>
      )}
      <ul {...excerptListProps}>
        {outputCaseStudyExcerpts(fields)}
      </ul>
    </>
  );

}

export default CaseStudyExcerpts;