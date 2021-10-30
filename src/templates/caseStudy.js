import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout/Layout"
import PageHeaderCaseStudy from "../components/pageHeader/PageHeaderCaseStudy"
import CaseStudyDetails from "../components/caseStudyPageContent/CaseStudyDetails"
// import CaseStudyInPageNav from "../components/caseStudyPageContent/CaseStudyInPageNav"
import SliceZone from "../components/sliceZone/SliceZone"
import CaseStudyPagination from "../components/caseStudyPageContent/CaseStudyPagination"
import CallToAction from "../components/callToAction/CallToAction"

const CustomStyleWrapper = styled.div`
  .site {
    --bg-color: ${(props) => props.bgColor};
    --font-color: ${(props) => props.textColor};
  }
  .apply-color-theme {
    background-color: ${(props) => props.bgColor};
    color: ${(props) => props.textColor};
  }
  .page-title,
  .nutshell-title,
  .role-title,
  .case-study-section-title {
    color: ${(props) => props.highlightColor};
  }
  .svg-logo path {
    fill: ${(props) => props.textColor};
  }

  .pagination {
    background-color: ${(props) => props.textColor};
    color: ${(props) => props.bgColor};
  }

  .transcript-btn:hover, .transcript-btn:focus {
    background-color: ${(props) => props.bgColor};
  }

  .transcript-btn[aria-expanded="true"] {
    background-color: ${(props) => props.textColor};
    color: ${(props) => props.bgColor};
    svg {
      fill: ${(props) => props.bgColor};
    }
  }
  .transcript-content {
    border-top-color: ${(props) => props.textColor};
  }
`

export const query = graphql`
  query CaseStudyQuery(
    $uid: String
  ) {
    allPrismicCaseStudy(
      sort: {
        fields: data___order, 
        order: ASC
      }, 
      filter: {
        uid: {eq: $uid}
      }
    ) {
      edges {
        node {
          uid
          type
          id
          lang
          data {
            background_header_color
            case_study_page_title {
              raw
            }
            highlight_color
            in_a_nutshell {
              raw
            }
            our_role {
              raw
            }
            project_name
            text_color
            body {
              ... on PrismicCaseStudyDataBodyCaseStudyMain {
                slice_type
                primary {
                  section_content {
                    raw
                  }
                  section_css_class
                  section_id
                  section_title {
                    raw
                  }
                }
              }
              ... on PrismicCaseStudyDataBodyFlexibleContentSection {
                slice_type
                items {
                  item_css_class
                  item_id
                  item_content {
                    raw
                  }
                }
                primary {
                  container_css_class
                  container_id
                }
              }
              ... on PrismicCaseStudyDataBodyBlockQuote {
                slice_type
                primary {
                  section_id
                  section_css_class
                  quote_text {
                    raw
                  }
                  quote_author_citation {
                    raw
                  }
                }
              }
              ... on PrismicCaseStudyDataBodyImageGroup {
                primary {
                  section_css_class
                  section_id
                }
                slice_type
                items {
                  image {
                    alt
                    url
                  }
                  image_caption {
                    raw
                  }
                }
              }
              ... on PrismicCaseStudyDataBodyVideoEmbed {
                slice_type
                primary {
                  section_css_class
                  section_id
                  video_embed_code {
                    raw
                  }
                  video_transcript {
                    raw
                  }
                  video_transcript_btn_text
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
            accessible_name
            in_page_navigation {
              navigation_label
              navigation_section_id
            }
          }
        }
      }
    }
  }
`

const CaseStudy = (props) => {

  const node = props.data.allPrismicCaseStudy.edges[0].node

  const { type, uid } = node

  const {
    project_name,
    case_study_page_title,
    our_role,
    in_a_nutshell,
    background_header_color,
    text_color,
    highlight_color,
    body,
    call_to_action,
    //    accessible_name,
    //    in_page_navigation,
  } = node.data

  const { previous, next } = props.pageContext;

  return (
    <CustomStyleWrapper
      bgColor={background_header_color}
      textColor={text_color}
      highlightColor={highlight_color}
    >
      <Layout seoTitle={`${project_name} | Case Study`} type={type} uid={uid}>
        <PageHeaderCaseStudy
          title={project_name}
          description={case_study_page_title.raw}
        />
        <CaseStudyDetails ourRole={our_role.raw} inANutshell={in_a_nutshell.raw} />
        {/* Hide for now until we figure out how we want to handle this */}
        {/* <CaseStudyInPageNav
          navAccessibleName={accessible_name}
          inPageNavItems={in_page_navigation}
        /> */}
        <SliceZone palette={null} body={body} pageType={type} uid={uid} />
        <CaseStudyPagination
          prevCaseStudy={previous}
          nextCaseStudy={next}
        />
        <CallToAction callToAction={call_to_action} />
      </Layout>
    </CustomStyleWrapper>
  )
}

export default CaseStudy
