import React, { useState, useEffect } from "react"
import moment from "moment"
import { graphql } from "gatsby"
import Layout from "../components/layout/Layout"
import PageHeaderGeneral from "../components/pageHeader/PageHeaderGeneral"
import SliceZone from "../components/sliceZone/SliceZone"
import CallToAction from "../components/callToAction/CallToAction"

export const query = graphql`
  query NewsArticleQuery($uid: String) {
    prismic {
      allNews_articles(uid: $uid) {
        edges {
          node {
            _meta {
              type
              uid
              firstPublicationDate
            }
            article_feature_text
            article_title
            seo_title
            body {
              ... on PRISMIC_News_articleBodyFlexible_content_section {
                type
                fields {
                  item_content
                  item_css_class
                  item_id
                }
                primary {
                  container_css_class
                  container_id
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

  const {
    _meta,
    article_title,
    article_feature_text,
    seo_title,
    call_to_action,
    body,
  } = props.data.prismic.allNews_articles.edges[0].node

  const { type, uid, firstPublicationDate } = _meta

  let seoTitle = seo_title ? seo_title : article_title

  return (
    <Layout
      seoTitle={`${seoTitle} | News`}
      palette={selectedPalette}
      type={type}
      uid={uid}
    >
      <PageHeaderGeneral
        title={article_title}
        description={article_feature_text}
        headingClass="heading-02 mb-4"
      />
      <article className="container">
        <footer className="row">
          <div className="news-article-pub-date">
            <time dateTime={firstPublicationDate}>
              {moment.utc(firstPublicationDate).format("MMMM Do YYYY")}
            </time>
          </div>
        </footer>
        <div className="row">
          <div className="col-md-8 offset-md-3 body-long-02">
            <SliceZone palette={null} body={body} pageType={type} uid={uid} />
          </div>
        </div>
      </article>
      <CallToAction callToAction={call_to_action} />
    </Layout>
  )
}

export default NewsArticle
