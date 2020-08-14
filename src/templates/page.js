import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout/Layout';
import SliceZone from '../components/sliceZone/SliceZone';
import PageHeader from '../components/pageHeader/PageHeader';

export const query = graphql`
  query PageQuery($id: String) { 
    prismic {
      allPages(id: $id) {
        edges {
          node {
            _meta {
              uid
              type
            }
            page_description
            page_header_hero_image
            page_title
            body {
              ... on PRISMIC_PageBodyVariable_content_section {
                type
                primary {
                  variable_content_container_css_class
                  variable_content_container_type
                }
                fields {
                  content_area
                  variable_content_item_css_class
                  variable_content_section_id
                }
              }
              ... on PRISMIC_PageBodyCase_study_listing {
                type
                fields {
                  case_study {
                    ... on PRISMIC_Case_study {
                      project_name
                      _meta {
                        uid
                      }
                      case_study_excerpt_image
                      case_study_excerpt_roles
                    }
                  }
                }
                primary {
                  section_accessible_name
                }
              }
              ... on PRISMIC_PageBodyTeam_listing {
                type
                primary {
                  section_accessible_name
                }
                fields {
                  team_member {
                    ... on PRISMIC_Team_member {
                      name
                      photo
                    }
                  }
                }
              }
              ... on PRISMIC_PageBodyImage_grid {
                type
                primary {
                  image_grid_container_type
                  image_grid_custom_css_class
                  image_grid_section_id
                }
                fields {
                  grid_image
                  grid_image_caption
                }
              }
              ... on PRISMIC_PageBodyQuotation {
                type
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
    }
  }
`;

const Page = props => {

  const {
    _meta,
    page_title,
    page_description,
    page_header_hero_image,
    body
  } = props.data.prismic.allPages.edges[0].node;

  const {
    uid,
    type
  } = _meta;

  return (
    <>
      <Layout type={type} uid={uid}>
        <PageHeader 
          pageType={type}
          title={page_title} 
          description={page_description} 
          heroImage={page_header_hero_image} />
        <SliceZone body={body} />
      </Layout>
    </>
  );
}

export default Page;