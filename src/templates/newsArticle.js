import React, { useState, useEffect } from "react"
import moment from "moment"
import { graphql } from "gatsby"
import Layout from "../components/layout/Layout"
import PageHeaderGeneral from "../components/pageHeader/PageHeaderGeneral"
import SliceZone from "../components/sliceZone/SliceZone"
import CallToAction from "../components/callToAction/CallToAction"

export const query = graphql`
  query NewsArticleQuery($uid: String) {
    allPrismicNewsArticle(filter: {uid: {eq: $uid}}) {
      edges {
        node {
          data {
            article_feature_text {
              richText
            }
            article_title {
              richText
            }
            seo_title
            body {
              ... on PrismicNewsArticleDataBodyFlexibleContentSection {
                slice_type
                items {
                  item_content {
                    richText
                  }
                  item_id
                  item_css_class
                }
                primary {
                  container_css_class
                  container_id
                }
              }
            }
            call_to_action {
              document {
                ... on PrismicCallToAction {
                  data {
                    call_to_action_css_class
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
                    call_to_action_statement {
                      richText
                    }
                  }
                }
              }
            }
          }
          first_publication_date
          uid
          type
        }
      }
    }
  }
`

const NewsArticle = (props) => {
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

  const node = props.data.allPrismicNewsArticle.edges[0].node

  const {
    article_title,
    article_feature_text,
    seo_title,
    call_to_action,
    body,
  } = node.data

  const { type, uid, first_publication_date } = node

  let seoTitle = seo_title ? seo_title : article_title

  return (
    <Layout
      seoTitle={`${seoTitle} | News`}
      palette={selectedPalette}
      type={type}
      uid={uid}
    >
      <PageHeaderGeneral
        title={article_title.richText}
        description={article_feature_text.richText}
        headingClass="heading-02 mb-4"
      />
      <article className="container py-32">
        <div className="row">
          <footer className="col-md-3">
            <div className="news-article-pub-date eyebrow">
              <time dateTime={first_publication_date}>
                {moment.utc(first_publication_date).format("MMMM Do YYYY")}
              </time>
            </div>
          </footer>

          <div className="col-md-8 body-long-02">
            <SliceZone palette={null} body={body} pageType={type} uid={uid} />
          </div>
        </div>
      </article>
      <CallToAction callToAction={call_to_action} />
    </Layout>
  )
}

export default NewsArticle
