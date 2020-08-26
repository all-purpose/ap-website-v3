import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/Layout"
import PageHeaderGeneral from "../components/pageHeader/PageHeaderGeneral"
import ContactPageContent from "../components/contactPageContent/ContactPageContent"

export const query = graphql`
  query ContactPageQuery {
    prismic {
      allContact_pages {
        edges {
          node {
            _meta {
              type
              uid
            }
            page_description
            page_title
            seo_title
          }
        }
      }
    }
  }
`

const ContactPage = (props) => {
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
    seo_title,
  } = props.data.prismic.allContact_pages.edges[0].node

  const { uid, type } = _meta

  let seoTitle = seo_title ? seo_title : page_title

  return (
    <Layout seoTitle={seoTitle} palette={selectedPalette} type={type} uid={uid}>
      <PageHeaderGeneral title={page_title} description={page_description} />
      <div className="page-sections apply-color-theme ">
        <div className="container">
          <hr className="theme-color mb-48 mt-0" />
          <ContactPageContent />
          <hr className="theme-color mt-48 mb-0" />
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage
