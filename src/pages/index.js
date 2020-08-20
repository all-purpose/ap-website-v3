import React, { useState, useEffect } from "react";
import { graphql } from 'gatsby';
import Layout from "../components/layout/Layout";
import PageHeaderHome from '../components/pageHeader/PageHeaderHome';
import HomePageServices from '../components/homePageContent/HomePageServices';
import HomePageProjects from '../components/homePageContent/HomePageProjects';
import HomePageDesignGood from '../components/homePageContent/HomePageDesignGood';
import CallToAction from '../components/callToAction/CallToAction';
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
            home_page_title
            home_page_description
            home_services_brand_title
            home_services_section_title
            home_services_category_listing {
              service_category_title
              services_listing
            }
            home_services_listing
            home_design_good_section_title
            home_design_good_description
            home_design_good_logos {
              logo_image
            }
            home_projects_brand_title
            home_projects_listing_accessible_name
            home_projects_section_title
            projects_listing {
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
            call_to_action {
              ... on PRISMIC_Call_to_action {
                call_to_action_statement
                call_to_action_buttons {
                  button_action_text
                  button_sub_text
                  button_link_target {
                    ... on PRISMIC_Contact_page {
                      _meta {
                        uid
                      }
                    }
                  }
                  
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
    home_page_title,
    home_page_description,
    home_services_section_title,
    home_services_brand_title,
    home_services_category_listing,
    home_services_listing,
    home_projects_section_title,
    home_projects_brand_title,
    home_projects_listing_accessible_name,
    projects_listing,
    home_design_good_section_title,
    home_design_good_description,
    home_design_good_logos,
    call_to_action
  } = props.data.prismic.allHome_pages.edges[0].node;

  const {
    type,
    uid
  } = _meta;

  return ( 
    <Layout palette={selectedPalette} type={type} uid={uid}>
      <PageHeaderHome
        title={home_page_title} 
        description={home_page_description} 
      />
      <div className="page-sections">
        <HomePageServices 
          sectionTitle={home_services_section_title}
          brandTitle={home_services_brand_title}
          serviceCategoryListings={home_services_category_listing}
          servicesListing={home_services_listing}
        />
        <HomePageProjects 
          pageType={type}
          uid={uid}
          sectionTitle={home_projects_section_title}
          brandTitle={home_projects_brand_title}
          projectsAccessibleName={home_projects_listing_accessible_name}
          projects={projects_listing}
        />
        <HomePageDesignGood 
          sectionTitle={home_design_good_section_title}
          description={home_design_good_description}
          logos={home_design_good_logos}
        />
        <CallToAction
          callToAction={call_to_action}
        />
      </div>
    </Layout>
  );

}

export default IndexPage