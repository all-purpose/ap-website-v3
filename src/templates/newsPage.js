import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/Layout"
import PageHeaderGeneral from "../components/pageHeader/PageHeaderGeneral"
import CallToAction from '../components/callToAction/CallToAction';
import NewsArticlesExcerpts from "../components/newsArticlesExcerpts/NewsArticlesExcerpts"

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
    call_to_action
  } = props.data.prismic.allNews_pages.edges[0].node

  const { uid, type } = _meta

  return (
    <Layout palette={selectedPalette} type={type} uid={uid}>
      <PageHeaderGeneral title={page_title} description={page_description} />
      <div className="page-sections">
        <div className="container py-24">
          <NewsArticlesExcerpts />
        </div>
      </div>
      <CallToAction 
        callToAction={call_to_action}
      />
    </Layout>
  )
}

export default NewsPage