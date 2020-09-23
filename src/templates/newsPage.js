import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/Layout"
import PageHeaderGeneral from "../components/pageHeader/PageHeaderGeneral"
import CallToAction from "../components/callToAction/CallToAction"
import NewsArticlesExcerpts from "../components/newsArticlesExcerpts/NewsArticlesExcerpts"
import MediaContact from "../components/mediaContact/MediaContact"

export const pageQuery = graphql`
  query NewsPageQuery {
    prismic {
      allNews_pages {
        edges {
          node {
            _meta {
              uid
            }
            page_description
            page_title
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

  const {
    _meta,
    page_title,
    page_description,
    call_to_action,
  } = props.data.prismic.allNews_pages.edges[0].node

  const { uid, type } = _meta

  return (
    <Layout seoTitle={page_title[0].text} palette={selectedPalette} type={type} uid={uid}>
      <PageHeaderGeneral title={page_title} description={page_description} />
      <div className="page-sections apply-color-theme">
        <div className="container pb-24">
          <hr className="theme-color mb-48 mt-0" />
          <NewsArticlesExcerpts />
          <div className="pt-24">
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
