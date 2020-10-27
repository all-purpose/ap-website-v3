import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/Layout"
import PageHeaderGeneral from "../components/pageHeader/PageHeaderGeneral"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import CtaCard from "../components/ctaCard/CtaCard"

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
            diversity_statement
            fineprint {
              item
            }
            diversity_header
            benefits {
              benefit
            }
            team_photos {
              team_member {
                ... on PRISMIC_Team_member {
                  wfh_photo
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
    return job_listings.map((job, index) => {
      return (
        <div className="col-sm-6 col-md-6 col-lg-3">
          <div>
            <CtaCard
              title={job_listings[index].job_listing.job_title[0].text}
              subtitle={job_listings[index].job_listing.location[0].text}
              containerClasses={`test`}
            />
          </div>
        </div>
      )
    })
  }
  const outputBenefits = (props) => {
    return props.map((item, index) => {
      return <li>{item.benefit[0].text}</li>
    })
    // debugger
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

              {/* <Link to="#open-positions" scroll={true}>
                <p className="mt-20 mb-48">Browse open positions ↓</p>
              </Link> */}
              <div className="mt-20 mb-48">
                <AnchorLink
                  to="/careers/#open-positions"
                  title="Browse open positions ↓"
                  className=""
                  stripHash
                />
              </div>

              {/* <Link to="#open-positions" scroll={true}>
                <p className="mt-20 mb-48">Browse open positions ↓</p>
              </Link> */}
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
          <div className="row" id="open-positions">
            <div className="col-sm-12 col-md-12 col-lg-3">
              <h2 className="heading-01">Open Positions</h2>
            </div>
            {outputJobListings(props)}
          </div>
        </div>
        <div className="container py-24">
          <div className="row">
            <div className="col-md-3">
              <h2 className="heading-01">Benefits & Perks</h2>
            </div>
            <div className="col-md-7">
              <ul>
                {outputBenefits(
                  props.data.prismic.allCareerss.edges[0].node.benefits
                )}
              </ul>

              <p class="py-24">
                {
                  props.data.prismic.allCareerss.edges[0].node.fineprint[0]
                    .item[0].text
                }
              </p>
            </div>
          </div>
        </div>
        <div className="container py-24">
          <div className="row">
            <div className="offset-md-3 col-md-6">
              {/* <h2>{props.data.prismic.allCareerss.edges[0].node.fineprint}</h2> */}

              {/* {props.data.prismic.allCareerss.edges[0].node.fineprint} */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CareersPage
