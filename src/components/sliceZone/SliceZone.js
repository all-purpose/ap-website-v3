import React from 'react';
import FlexibleContentSection from '../flexibleContentSection/FlexibleContentSection';
import ImageGroup from '../imageGroup/ImageGroup';
import CaseStudyPageSection from '../caseStudyPageSection/CaseStudyPageSection';
import CaseStudyExcerpts from '../caseStudyExcerpts/CaseStudyExcerpts';
import TeamMembers from '../teamMembers/TeamMembers';

const SliceZone = ({ body, pageType, uid }) => {

  return (
    <div className="page-sections">{body.map((bodyContent, i) => {

      console.log(bodyContent.type);

      if (bodyContent.type === 'flexible_content_section') {
        
        return ( 
          <FlexibleContentSection
            key={i}
            containerId={bodyContent.primary.container_id}
            containerCssClass={bodyContent.primary.container_css_class}
            fields={bodyContent.fields}
          />
        );
      } else if (bodyContent.type === 'image_group') {
        return ( 
          <ImageGroup 
            key={i}
            containerId={bodyContent.primary.section_id}
            fields={bodyContent.fields}
            containerCssClass={bodyContent.primary.section_css_class}
          />
        )
      } else if (bodyContent.type === 'case_study_main') {
        return ( 
          <CaseStudyPageSection 
            key={i}
            containerType={bodyContent.primary.section_container_type}
            containerCssClass={bodyContent.primary.section_css_classes}
            containerId={bodyContent.primary.section_id}
            title={bodyContent.primary.section_title}
            content={bodyContent.primary.section_content}
          />
        )
      } else if (bodyContent.type === 'case_study_excerpts') {
        return ( 
          <CaseStudyExcerpts 
            key={i}
            pageType={pageType}
            uid={uid}
            accessibleName={bodyContent.primary.section_accessible_name}
            fields={bodyContent.fields}
          />
        )
      } else if (bodyContent.type === 'team_member_profiles') {
        return ( 
          <TeamMembers 
            key={i}
            accessibleName={bodyContent.primary.section_accessible_name}
            fields={bodyContent.fields}
          />
        )
      } else {
        return null;
      }
    })}</div>
  );

};

export default SliceZone;