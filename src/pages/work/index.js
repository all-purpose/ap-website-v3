import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout/Layout"
import PageHeaderGeneral from "../../components/pageHeader/PageHeaderGeneral"
import PageIntro from "../../components/pageIntro/PageIntro";
import CaseStudyExcerpts from "../../components/caseStudyExcerpts/CaseStudyExcerpts"
import CallToAction from '../../components/callToAction/CallToAction';

export const query = graphql`
  query WorkPageQuery {
    allPrismicWorkPage {
      edges {
        node {
          uid
          type
          data {
            accessible_name
            page_description {
              richText
            }
            page_title {
              richText
            }
            case_studies {
              case_study {
                document {
                  ... on PrismicCaseStudy {
                    id
                    uid
                    data {
                      project_name
                      case_study_excerpt_image {
                        alt
                        url
                      }
                      case_study_excerpt_roles
                    }
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
            intro_text {
              richText
            }
          }
        }
      }
    }
  }
`

const WorkPage = (props) => {
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

  const node = props.data.allPrismicWorkPage.edges[0].node

  const { uid, type } = node

  const {
    page_title,
    accessible_name,
    case_studies,
    call_to_action,
    intro_text,
  } = node.data

  return (
    <Layout seoTitle={page_title.richText[0].text} palette={selectedPalette} type={type} uid={uid}>
      <PageHeaderGeneral title={page_title.richText} />
      <div className="page-sections">
        <div className="container py-24">
          <div className="row">
            <div className="col-md-11 col-lg-8 body-long-02 mb-24">
              <PageIntro text={intro_text.richText} />
            </div>
          </div>
          <CaseStudyExcerpts
            pageType={type}
            pageUid={uid}
            accessibleName={accessible_name}
            fields={case_studies}
          />
        </div>
      </div>
      <CallToAction
        callToAction={call_to_action}
      />
    </Layout>
  )
}

export default WorkPage
