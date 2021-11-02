import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout/Layout"
import PageHeaderGeneral from "../../components/pageHeader/PageHeaderGeneral"
import CallToAction from "../../components/callToAction/CallToAction"
import NewsArticlesExcerpts from "../../components/newsArticlesExcerpts/NewsArticlesExcerpts"
import MediaContact from "../../components/mediaContact/MediaContact"

export const pageQuery = graphql`
  query NewsPageQuery {
    allPrismicNewsPage {
      edges {
        node {
          type
          uid
          data {
            page_description {
              richText
            }
            page_title {
              richText
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
          }
        }
      }
    }   
  }
`

const NewsPage = (props) => {
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

  const node = props.data.allPrismicNewsPage.edges[0].node

  const { uid, type } = node

  const {
    page_title,
    page_description,
    call_to_action,
  } = node.data

  return (
    <Layout seoTitle={page_title.richText[0].text} palette={selectedPalette} type={type} uid={uid}>
      <PageHeaderGeneral title={page_title.richText} description={page_description.richText} />
      <div className="page-sections apply-color-theme">
        <div className="container pb-24">
          <hr className="theme-color mb-48 mt-0" />
          <NewsArticlesExcerpts />
          <div className="pt-24">
            <h2 className="eyebrow mt-16 block">Media Contact</h2>
            <MediaContact showMediaKit />
          </div>
          <hr className="theme-color mt-48 mb-0" />
        </div>
      </div>
      <CallToAction callToAction={call_to_action} />
    </Layout>
  )
}

export default NewsPage
