import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout/Layout"
import PageHeaderCaseStudy from "../components/pageHeader/PageHeaderCaseStudy"
import CaseStudyDetails from "../components/caseStudyPageContent/CaseStudyDetails"
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
  .svg-logo path, .svg-icon path {
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
              richText
            }
            highlight_color
            in_a_nutshell {
              richText
            }
            our_role {
              richText
            }
            project_name
            text_color
            body {
              ... on PrismicCaseStudyDataBodyCaseStudyMain {
                slice_type
                primary {
                  section_content {
                    richText
                  }
                  section_css_class
                  section_id
                  section_title {
                    richText
                  }
                }
              }
              ... on PrismicCaseStudyDataBodyFlexibleContentSection {
                slice_type
                items {
                  item_css_class
                  item_id
                  item_content {
                    richText
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
                    richText
                  }
                  quote_author_citation {
                    richText
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
                    richText
                  }
                }
              }
              ... on PrismicCaseStudyDataBodyVideoEmbed {
                slice_type
                primary {
                  section_css_class
                  section_id
                  video_embed_code {
                    richText
                  }
                  video_transcript {
                    richText
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
  } = node.data

  return (
    <CustomStyleWrapper
      bgColor={background_header_color}
      textColor={text_color}
      highlightColor={highlight_color}
    >
      <Layout seoTitle={`${project_name} | Case Study`} type={type} uid={uid}>
        <PageHeaderCaseStudy
          title={project_name}
          description={case_study_page_title.richText}
        />
        <CaseStudyDetails ourRole={our_role.richText} inANutshell={in_a_nutshell.richText} />
        <SliceZone palette={null} body={body} pageType={type} uid={uid} />
        <CaseStudyPagination
          currentCaseStudyUid={uid}
        />
        <CallToAction callToAction={call_to_action} />
      </Layout>
    </CustomStyleWrapper>
  )
}

export default CaseStudy
