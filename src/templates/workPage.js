import React, {useState, useEffect} from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout/Layout';
import PageHeaderGeneral from '../components/pageHeader/PageHeaderGeneral';
import CaseStudyExcerpts from '../components/caseStudyExcerpts/CaseStudyExcerpts';

export const query = graphql`
  query WorkPageQuery { 
    prismic {
      allWork_pages {
        edges {
          node {
            _meta {
              type
              uid
            }
            accessible_name
            page_description
            page_title
            case_studies {
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
        }
      }
    }
  }
`;

const WorkPage = props => {

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
    accessible_name,
    case_studies
  } = props.data.prismic.allWork_pages.edges[0].node;

  const {
    uid,
    type
  } = _meta;

  return (
    <Layout palette={selectedPalette} type={type} uid={uid}>
      <PageHeaderGeneral 
        title={page_title} 
        description={page_description} 
      />
      <div className="page-sections">
        <div className="container">
          <CaseStudyExcerpts
            pageType={type}
            uid={uid} 
            accessibleName={accessible_name}
            fields={case_studies}
          />
        </div>
      </div>
    </Layout>
  );
}

export default WorkPage;