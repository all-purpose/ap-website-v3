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
            _meta {
              uid
              type
            }
            hero_image
            page_description
            page_title
            body {
              ... on PRISMIC_Home_pageBodyFlexible_content_section {
                type
                primary {
                  container_css_class
                  container_id
                }
                fields {
                  item_content
                  item_css_class
                  item_id
                }
              }
              ... on PRISMIC_Home_pageBodyCase_study_excerpts {
                type
                primary {
                  section_accessible_name
                }
                fields {
                  case_study {
                    ... on PRISMIC_Case_study {
                      _meta {
                        uid
                      }
                      project_name
                      case_study_excerpt_image
                      case_study_excerpt_roles
                    }
                  }
                }
              }
              ... on PRISMIC_Home_pageBodyBlock_quote {
                type
                primary {
                  quote_author_citation
                  quote_text
                  section_css_class
                  section_id
                }
              }
              ... on PRISMIC_Home_pageBodyImage_group {
                type
                primary {
                  section_css_class
                  section_id
                }
                fields {
                  image
                  image_caption
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