import React from 'react';
import CaseStudyExcerpt from '../caseStudyExcerpt/caseStudyExcerpt';

const CaseStudyExcerpts = ({pageType, uid, accessibleName, fields}) => {

  const excerptListProps = {
    className: "case-study-excerpts row"
  };

  if (accessibleName) {
    excerptListProps['aria-label'] = accessibleName;
  }

  const outputCaseStudyExcerpts = fields => {
    return fields.map((field, index) => {

      const {
        _meta,
        case_study_excerpt_image,
        case_study_excerpt_roles,
        project_name
      } = field.case_study;

      return (
        <li 
          key={index}
          className="col-sm-6">
          <CaseStudyExcerpt
            pageType={pageType}
            uid={uid}
            link={`/case-study/${_meta.uid}`}
            image={case_study_excerpt_image}
            projectName={project_name}
            roles={case_study_excerpt_roles}
          />
        </li>
      );

    });
  }
  
  return (
    <div className="container">
      <ul {...excerptListProps}>
        {outputCaseStudyExcerpts(fields)}
      </ul>
    </div>

  );

}

export default CaseStudyExcerpts;