import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/Layout"
import PageHeaderHome from "../components/pageHeader/PageHeaderHome"
import HomePageServices from "../components/homePageContent/HomePageServices"
import HomePageProjects from "../components/homePageContent/HomePageProjects"
import HomePageDesignGood from "../components/homePageContent/HomePageDesignGood"
import CallToAction from "../components/callToAction/CallToAction"
import "bootstrap/dist/css/bootstrap-grid.min.css"

import "../scss/main.scss"

export const query = graphql`
  query HomeQuery {
    allPrismicHomePage {
      edges {
        node {
          type
          data {
            home_page_title {
              raw
            }
            home_page_description {
              raw
            }
            home_services_brand_title {
              raw
            }
            home_services_section_title {
              raw
            }
            home_services_category_listing {
              service_category_title {
                raw
              }
              services_listing {
                raw
              }
            }
            home_services_listing {
              raw
            }
            home_design_good_section_title {
              raw
            }
            home_design_good_description {
              raw
            }
            home_design_good_logos {
              logo_image {
                url
                alt
              }
            }
            home_projects_brand_title {
              raw
            }
            home_projects_listing_accessible_name
            home_projects_section_title {
              raw
            }
            projects_listing {
              case_study {
                document {
                  ... on PrismicCaseStudy {
                    data {
                      project_name
                      case_study_excerpt_image {
                        alt
                        url
                      }
                      case_study_excerpt_roles
                    }
                    uid
                  }
                }
              }
            }
            call_to_action {
              document {
                ... on PrismicCallToAction {
                  id
                  data {
                    call_to_action_statement {
                      raw
                    }
                    call_to_action_buttons {
                      button_action_text
                      button_sub_text {
                        raw
                      }
                      button_link_target {
                        document {
                          ... on PrismicContactPage {
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
    }
  }

`

const IndexPage = (props) => {
  console.log(props);
  const [selectedPalette, setSelectedPalette] = useState(null)

  function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
  }

  // Run theme selection once on mounting
  useEffect(() => {
    const random = getRandomInt(1, 11)
    setSelectedPalette(`palette-${random}`)
  }, [])

  const node = props.data.allPrismicHomePage.edges[0].node;

  const {
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
    call_to_action,
  } = node.data

  const type = node.type

  return (
    <Layout seoTitle={"Home"} palette={selectedPalette} type={type}>
      <PageHeaderHome
        title={home_page_title.raw}
        description={home_page_description.raw}
      />
      <div className="page-sections">
        <HomePageServices
          sectionTitle={home_services_section_title.raw}
          brandTitle={home_services_brand_title.raw}
          serviceCategoryListings={home_services_category_listing}
          servicesListing={home_services_listing}
        />
        <HomePageProjects
          pageType={type}
          pageUid={'home'}
          sectionTitle={home_projects_section_title.raw}
          brandTitle={home_projects_brand_title.raw}
          projectsAccessibleName={home_projects_listing_accessible_name}
          projects={projects_listing}
        />
        <HomePageDesignGood
          sectionTitle={home_design_good_section_title.raw}
          description={home_design_good_description.raw}
          logos={home_design_good_logos}
        />
        <CallToAction callToAction={call_to_action} />
      </div>
    </Layout>
  )
}

export default IndexPage
