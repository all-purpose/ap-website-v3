import React from 'react';
import {graphql} from 'gatsby';
import {RichText} from 'prismic-reactjs';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/pageHeader/PageHeader';
import SliceZone from '../components/sliceZone/SliceZone';

export const query = graphql`
  query CaseStudyQuery(
    $uid: String
    $paginationPreviousUid: String!
    $paginationPreviousLang: String!
    $paginationNextUid: String!
    $paginationNextLang: String!
  ) {
    prismic {
      allCase_studys(uid: $uid) {
        edges {
          node {
            _meta {
              uid,
              type
            }
            case_study_brand_title
            in_a_nutshell
            our_role
            project_name
            background_header_color
            text_color
            highlight_color
            body {
              ... on PRISMIC_Case_studyBodyVariable_content_section {
                type
                fields {
                  content_area
                  variable_content_item_css_class
                  variable_content_section_id
                }
                primary {
                  variable_content_container_css_class
                  variable_content_container_type
                }
              }
              ... on PRISMIC_Case_studyBodyCase_study_section {
                type
                primary {
                  section_container_type
                  section_content
                  section_css_classes
                  section_id
                  section_title
                }
              }
              ... on PRISMIC_Case_studyBodyImage_grid {
                type
                fields {
                  grid_image
                  grid_image_caption
                }
                primary {
                  image_grid_container_type
                  image_grid_custom_css_class
                  image_grid_section_id
                }
              }
              ... on PRISMIC_Case_studyBodyFull_bleed_image {
                type
                primary {
                  add_full_bleed_image
                  full_bleed_image_caption
                  full_bleed_image_custom_css_class
                  full_bleed_image_id
                }
              }
              ... on PRISMIC_Case_studyBodyQuotation {
                type
                label
                primary {
                  quotation_css_class
                  quote_author_citation
                  quote_id
                  quote_text
                }
              }
            }
          }
        }
      }
      prevCase_study: case_study(uid: $paginationPreviousUid, lang: $paginationPreviousLang) {
        project_name
        _meta {
          uid
          lang
          type
        }
      }
      nextCase_study: case_study(uid: $paginationNextUid, lang: $paginationNextLang) {
        project_name
        _meta {
          uid
          lang
          type
        }
      }
    }
  }

`;

const CaseStudy = props => {

  const {
    _meta, 
    project_name, 
    case_study_brand_title, 
    our_role, 
    in_a_nutshell,
    background_header_color,
    text_color,
    highlight_color, 
    body
  } = props.data.prismic.allCase_studys.edges[0].node;

  const {
    type,
    uid
  } = _meta;

  return (
    <Layout type={type} uid={uid}>
      <PageHeader
        pageType={type} 
        title={project_name} 
        description={case_study_brand_title} 
        heroImage={null} />
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h2 className="eyebrow">Our role</h2>
            <RichText render={our_role} />
          </div>
          <div className="col-sm-12 col-md-6">
            <h2 className="eyebrow">In a nutshell</h2>
            <RichText render={in_a_nutshell} />
          </div>
        </div>
      </div>
      <SliceZone palette={null} body={body} pageType={type} uid={uid} />
    </Layout>
  )

}

export default CaseStudy;
