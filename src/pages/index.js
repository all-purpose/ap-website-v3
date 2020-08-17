import React, { useState, useEffect } from "react";
import { graphql } from 'gatsby';
import Layout from "../components/layout/Layout";
import PageHeader from '../components/pageHeader/PageHeader';
import SliceZone from '../components/sliceZone/SliceZone';
import '../scss/main.scss';
import 'bootstrap/dist/css/bootstrap-grid.min.css';

export const query = graphql`
  query HomeQuery { 
    prismic {
      allHome_pages {
        edges {
          node {
            page_description
            page_title
            hero_image
            _meta {
              type,
              uid
            }
            body {
              ... on PRISMIC_Home_pageBodyVariable_content_section {
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
              ... on PRISMIC_Home_pageBodyCase_study_listing {
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
              ... on PRISMIC_Home_pageBodyImage_grid {
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
              ... on PRISMIC_Home_pageBodyFull_bleed_image {
                type
                primary {
                  full_bleed_image_id
                  full_bleed_image_custom_css_class
                  full_bleed_image_caption
                  add_full_bleed_image
                }
              }
              ... on PRISMIC_Home_pageBodyQuotation {
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

const IndexPage = props => {

  const [selectedPalette, setSelectedPalette] = useState(null);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  // Run theme selection once on mounting  
  useEffect(() => {    
    const random = getRandomInt(1, 11); 
    setSelectedPalette(`palette-${random}`);
  }, []);

  const {
    _meta,
    page_title,
    page_description,
    hero_image,
    body
  } = props.data.prismic.allHome_pages.edges[0].node;

  const {
    type,
    uid
  } = _meta;

  return ( 
    <Layout palette={selectedPalette} type={type} uid={uid}>
      <PageHeader
        pageType={type}
        title={page_title} 
        description={page_description} 
        heroImage={hero_image} />
        <SliceZone body={body} pageType={type} uid={uid} />
    </Layout>
  );

}

export default IndexPage