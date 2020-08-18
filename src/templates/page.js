import React, {useState, useEffect} from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout/Layout';
import SliceZone from '../components/sliceZone/SliceZone';
import ContactPageContent from '../components/contactPageContent/ContactPageContent'
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
            hero_image
            page_description
            page_title
            body {
              ... on PRISMIC_PageBodyCase_study_excerpts {
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
              ... on PRISMIC_PageBodyTeam_member_profiles {
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
              ... on PRISMIC_PageBodyFlexible_content_section {
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
              ... on PRISMIC_PageBodyImage_group {
                type
              }
            }
          }
        }
      }
    }
  }
`;

const Page = props => {

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
    page_header_hero_image,
    body
  } = props.data.prismic.allPages.edges[0].node;

  const {
    uid,
    type
  } = _meta;

  const outputPageContent = (uid, type, body) => {
    if (uid === 'contact') {
      return (
        <ContactPageContent />
      )
    } else {
      return (
        <SliceZone body={body} pageType={type} uid={uid} />
      )
    }
  }

  return (
    <Layout palette={selectedPalette} type={type} uid={uid}>
      <PageHeader 
        pageType={type}
        title={page_title} 
        description={page_description} 
        heroImage={page_header_hero_image} />
      {outputPageContent(uid, type, body)}
    </Layout>
  );
}

export default Page;