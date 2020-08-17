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
              type
              uid
            }
            background_header_color
            case_study_page_title
            highlight_color
            in_a_nutshell
            our_role
            project_name
            text_color
            body {
              ... on PRISMIC_Case_studyBodyCase_study_main {
                type
                primary {
                  section_content
                  section_css_class
                  section_id
                  section_title
                }
              }
              ... on PRISMIC_Case_studyBodyFlexible_content_section {
                type
                fields {
                  item_content
                  item_css_class
                  item_id
                }
                primary {
                  container_css_class
                  container_id
                }
              }
              ... on PRISMIC_Case_studyBodyImage_group {
                type
                fields {
                  image
                  image_caption
                }
                primary {
                  section_css_class
                  section_id
                }
              }
              ... on PRISMIC_Case_studyBodyBlock_quote {
                type
                primary {
                  quote_author_citation
                  quote_text
                  section_css_class
                  section_id
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
