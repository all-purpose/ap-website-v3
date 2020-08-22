import React from 'react';
import FlexibleContentSection from '../flexibleContentSection/FlexibleContentSection';
import ImageGroup from '../imageGroup/ImageGroup';
import Quotation from '../quotation/Quotation';
import CaseStudyPageSection from '../caseStudyPageContent/caseStudyPageSection';
import VideoEmbed from '../videoEmbed/VideoEmbed';

const SliceZone = ({ body, pageType, uid }) => {

  if (!body) {
    return false;
  }

  return (
    <div className="page-sections">{body.map((bodyContent, i) => {

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
            containerCssClass={bodyContent.primary.section_css_classes}
            containerId={bodyContent.primary.section_id}
            title={bodyContent.primary.section_title}
            content={bodyContent.primary.section_content}
          />
        )
      } else if (bodyContent.type === 'block_quote') {
        return ( 
          <Quotation 
            key={i}
            containerId={bodyContent.primary.section_id}
            containerCssClass={bodyContent.primary.section_css_class}
            quoteAuthorCitation={bodyContent.primary.quote_author_citation}
            quoteText={bodyContent.primary.quote_text}
          />
        )
      } else if (bodyContent.type === 'video_embed') {
        return ( 
          <VideoEmbed 
            key={i}
            containerId={bodyContent.primary.section_id}
            containerCssClass={bodyContent.primary.section_css_class}
            embedCode={bodyContent.primary.video_embed_code}
          />
        )
      } else {
        return null;
      }
    })}</div>
  );

};

export default SliceZone;