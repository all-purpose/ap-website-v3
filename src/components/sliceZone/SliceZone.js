import React from 'react';
import VariableContentSection from '../variableContentSection/VariableContentSection';
import ImageGrid from '../imageGrid/ImageGrid';
import CaseStudySection from '../caseStudySection/CaseStudySection';
import CaseStudyExcerptListing from '../caseStudyExcerptListing/CaseStudyExcerptListing';
import TeamListing from '../teamListing/TeamListing';

const SliceZone = ({ body }) => {

  return (
    <div>{body.map((bodyContent, i) => {

      if (bodyContent.type === 'variable_content_section') {
        
        return ( 
          <VariableContentSection
            key={i}
            containerType={bodyContent.primary.variable_content_container_type} 
            containerCssClass={bodyContent.primary.variable_content_container_css_class}
            fields={bodyContent.fields}
          />
        );
      } else if (bodyContent.type === 'image_grid') {
        return ( 
          <ImageGrid 
            key={i}
            containerType={bodyContent.primary.image_grid_container_type}
            containerId={bodyContent.primary.image_grid_section_id}
            fields={bodyContent.fields}
            containerCssClass={bodyContent.primary.image_grid_custom_css_class}
          />
        )
      } else if (bodyContent.type === 'case_study_section') {
        return ( 
          <CaseStudySection 
            key={i}
            containerType={bodyContent.primary.section_container_type}
            containerCssClass={bodyContent.primary.section_css_classes}
            containerId={bodyContent.primary.section_id}
            title={bodyContent.primary.section_title}
            content={bodyContent.primary.section_content}
          />
        )
      } else if (bodyContent.type === 'case_study_listing') {
        return ( 
          <CaseStudyExcerptListing 
            key={i}
            accessibleName={bodyContent.primary.section_accessible_name}
            fields={bodyContent.fields}
          />
        )
      } else if (bodyContent.type === 'team_listing') {
        return ( 
          <TeamListing 
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