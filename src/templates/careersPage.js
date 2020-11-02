import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/Layout"
import PageHeaderGeneral from "../components/pageHeader/PageHeaderGeneral"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import "../components/list/List.scss"

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
            mission_header
            job_listings {
              job_listing {
                ... on PRISMIC_Job_listing {
                  job_title
                  location
                  external_url {
                    ... on PRISMIC__ExternalLink {
                      target
                      _linkType
                      url
                    }
                  }
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
            remote_header
            remote_statement
            culture_photos {
              photo
            }
            seo_title
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
    culture_photos,
    job_listings,
    diversity_header,
    diversity_statement,
    remote_header,
    remote_statement,
    team_photos,
    seo_title,
  } = props.data.prismic.allCareerss.edges[0].node

  const { uid, type } = _meta
  // debugger

  const outputJobListings = (props) => {
    return job_listings.map((job, index) => {
      return (
        <div className="col-sm-6 col-md-4 col-lg-3 mt-8 lg:mt-0">
          <div>
            <CtaCard
              title={job_listings[index].job_listing.job_title[0].text}
              subtitle={job_listings[index].job_listing.location[0].text}
              cssClass={``}
              href={job_listings[index].job_listing.external_url.url}
            />
          </div>
        </div>
      )
    })
  }
  const outputBenefits = (props) => {
    return props.map((item, index) => {
      return <li className="list__item">{item.benefit[0].text}</li>
    })
  }

  let seoTitle = seo_title ? seo_title : page_title

  return (
    <Layout
      seoTitle={seoTitle[0].text}
      palette={selectedPalette}
      type={type}
      uid={uid}
    >
      <PageHeaderGeneral title={page_title} description={page_description} />
      <div className="page-sections  ">
        <div className="container pt-48 pb-24">
          <div className="row">
            <div className="col-md-3">
              <h2 className="">{mission_header[0].text}</h2>
            </div>
            <div className="col-md-9 ">
              <p className="heading-01">{mission_statement[0].text}</p>

              <div className="mt-20">
                <AnchorLink
                  to="/careers/#open-positions"
                  title="Browse open positions ↓"
                  className=""
                  stripHash
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container py-24">
          <div className="row">
            <div className="col-sm-6 col-md-3">
              <img
                alt={culture_photos[0].photo.alt}
                src={culture_photos[0].photo.url}
              />
            </div>
            <div className="col-sm-6 col-md-6">
              <img
                className="mt-8 sm:mt-0"
                alt={culture_photos[1].photo.alt}
                src={culture_photos[1].photo.url}
              />
            </div>
            <div className="col-sm-6 col-md-3 flex items-end">
              <img
                alt={culture_photos[2].photo.alt}
                className="mt-8 md:mt-8"
                src={culture_photos[2].photo.url}
              />
            </div>
            <div className="hidden md:block col-sm-6 col-md-3 offset-md-3">
              <img
                className="md:mt-8"
                alt={culture_photos[3].photo.alt}
                src={culture_photos[3].photo.url}
              />
            </div>
            <div className="col-sm-6 col-md-3">
              <img
                className="mt-8 md:mt-8"
                alt={culture_photos[4].photo.alt}
                src={culture_photos[4].photo.url}
              />
            </div>
          </div>
        </div>
        <div className="container py-24">
          <hr className="theme-color mb-48 mt-0" />
          <div className="row" id="open-positions">
            <div className="col-sm-12 col-md-12 col-lg-3">
              <h2 className="heading-01">Open Positions</h2>
            </div>
            {outputJobListings(props)}
          </div>
        </div>
        <div className="container py-24">
          <hr className="theme-color mb-48 mt-0" />
          <div className="row">
            <div className="col-md-3">
              <h2 className="heading-01">Benefits & Perks</h2>
            </div>
            <div className="col-md-7">
              <ul className="list">
                {outputBenefits(
                  props.data.prismic.allCareerss.edges[0].node.benefits
                )}
              </ul>

              <p className="py-24">
                {
                  props.data.prismic.allCareerss.edges[0].node.fineprint[0]
                    .item[0].text
                }
              </p>
            </div>
          </div>
        </div>
        <div className="py-24 apply-color-theme">
          <div className="row">
            <div className="offset-sm-2 offset-md-2 offset-lg-4 col-sm-8 col-md-8 col-lg-5 col-xl-4">
              <h2 className="heading-01 pb-10">{diversity_header[0].text}</h2>

              <p>{diversity_statement[0].text}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-48">
        <div className="row items-center">
          <div className="col-md-6">
            <h2 className="heading-01">{remote_header[0].text}</h2>
          </div>
          <div className="col-md-6">{remote_statement[0].text}</div>
        </div>
      </div>
    </Layout>
  )
}

export default CareersPage
