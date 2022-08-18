import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/Layout"
import PageHeaderHome from "../components/pageHeader/PageHeaderHome"
import HomePageServices from "../components/homePageContent/HomePageServices"
import HomePageProjects from "../components/homePageContent/HomePageProjects"
import HomePageDesignGood from "../components/homePageContent/HomePageDesignGood"
import HomePageFeaturedClients from "../components/homePageContent/HomePageFeaturedClients"
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
              richText
            }
            home_page_description {
              richText
            }
            home_services_brand_title {
              richText
            }
            home_services_section_title {
              richText
            }
            home_services_category_listing {
              service_category_title {
                richText
              }
              services_listing {
                richText
              }
            }
            home_services_listing {
              richText
            }
            home_design_good_section_title {
              richText
            }
            home_design_good_description {
              richText
            }
            home_design_good_logos {
              logo_image {
                url
                alt
              },
              left_offset
              top_offset
            }
            home_projects_brand_title {
              richText
            }
            home_projects_listing_accessible_name
            home_projects_section_title {
              richText
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
                      richText
                    }
                    call_to_action_buttons {
                      button_action_text
                      button_sub_text {
                        richText
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
            featured_clients_section_title {
              richText
            }
            featured_clients_section_description {
              richText
            }
            featured_clients_logos {
              logo_image {
                url
                alt
              }
              left_offset
              top_offset
            }
          }
        }
      }
    }
  }

`

const IndexPage = (props) => {
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
    featured_clients_section_title,
    featured_clients_section_description,
    featured_clients_logos,
    call_to_action,
  } = node.data

  const type = node.type

  return (
    <Layout seoTitle={"Home"} palette={selectedPalette} type={type}>
      <PageHeaderHome
        title={home_page_title.richText}
        description={home_page_description.richText}
      />
      <div className="page-sections">
        <HomePageServices
          sectionTitle={home_services_section_title.richText}
          brandTitle={home_services_brand_title.richText}
          serviceCategoryListings={home_services_category_listing}
          servicesListing={home_services_listing}
        />
        <HomePageFeaturedClients
          sectionTitle={featured_clients_section_title.richText}
          description={featured_clients_section_description.richText}
          logos={featured_clients_logos}
        />
        <HomePageProjects
          pageType={type}
          pageUid={'home'}
          sectionTitle={home_projects_section_title.richText}
          brandTitle={home_projects_brand_title.richText}
          projectsAccessibleName={home_projects_listing_accessible_name}
          projects={projects_listing}
        />
        <HomePageDesignGood
          sectionTitle={home_design_good_section_title.richText}
          description={home_design_good_description.richText}
          logos={home_design_good_logos}
        />
        <CallToAction callToAction={call_to_action} />
      </div>
    </Layout>
  )
}

export default IndexPage
