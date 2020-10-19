import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/Layout"
import PageHeaderGeneral from "../components/pageHeader/PageHeaderGeneral"

export const query = graphql`
  query CareersPageQuery {
    prismic {
      allCareerss {
        edges {
          node {
            page_description
            page_title
            _meta {
              type
              uid
            }
            mission_statement
            culture_photo
            culture_photo1
            culture_photo2
            culture_photo3
            mission_header
            job_listings {
              job_listing {
                ... on PRISMIC_Job_listing {
                  job_title
                  location
                }
              }
            }
          }
        }
      }
    }
  }
`

const CareersPage = (props) => {
  console.log(props)
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
    mission_header,
    mission_statement,
    culture_photo,
    culture_photo1,
    culture_photo2,
    culture_photo3,
    job_listings,
    // seo_title,
  } = props.data.prismic.allCareerss.edges[0].node
  // debugger

  const { uid, type } = _meta

  const outputJobListings = (props) => {
    return props.data.prismic.allCareerss.edges[0].node.job_listings.map(
      (job, index) => {
        return (
          <div className="col-md-3">
            <div>
              <p>{job_listings[index].job_listing.job_title[0].text}</p>
              <p>{job_listings[index].job_listing.location[0].text}</p>
            </div>
          </div>
        )
      }
    )
  }

  // let seoTitle = seo_title ? seo_title : page_title

  return (
    <Layout palette={selectedPalette} type={type} uid={uid}>
      {/* <Layout seoTitle={seoTitle} palette={selectedPalette} type={type} uid={uid}> */}
      <PageHeaderGeneral title={page_title} description={page_description} />
      <div className="page-sections  ">
        <div className="container mt-48">
          {/* <hr className="theme-color mb-48 mt-0" /> */}
          <div className="row">
            <div className="col-md-3">
              <h2 className="">{mission_header[0].text}</h2>
            </div>
            <div className="col-md-9 ">
              <p className="heading-01">{mission_statement[0].text}</p>

              <p className="mt-20 mb-48">Browse open positions ↓</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <img alt={culture_photo1.alt} src={culture_photo1.url} />
            </div>
            <div className="col-md-3">
              <img alt={culture_photo2.alt} src={culture_photo2.url} />
              <img
                alt={culture_photo.alt}
                className="mt-4"
                src={culture_photo.url}
              />
              <img
                className="mt-4"
                alt={culture_photo3.alt}
                src={culture_photo3.url}
              />
            </div>
          </div>
        </div>
        <div className="container py-24">
          <div className="row">
            <div className="col-md-3">
              <h2 className="heading-01">Open Positions</h2>
            </div>
            {outputJobListings(props)}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CareersPage
