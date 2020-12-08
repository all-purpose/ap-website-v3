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

            remote_header
            remote_statement
            culture_photos {
              photo
            }
            remote_team
            seo_title
          }
        }
      }
    }
  }
`

const CareersPage = (props) => {
  // console.log(props)
  // debugger

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
    seo_title,
  } = props.data.prismic.allCareerss.edges[0].node

  const { uid, type } = _meta

  const generalApps = job_listings.find(
    (job) => job.job_listing.job_title[0].text === "General Applications"
  )

  const outputJobListings = (props) => {
    return job_listings.map((job, index) => {
      // if there's only 1 job listing and it's the General Application posting, or if there's no job listings, show a message about not having any open positions. This is to prevent a situation when one CtaCard shows up, looks weird when there's only one stand alone CtaCard.
      if (
        (job_listings.length === 1 &&
          job.job_listing.job_title[0].text === "General Applications") ||
        job_listings.length === 0
      ) {
        return (
          <div
            key={index}
            className={`col-sm-6 col-md-6 col-lg-6 mt-4 lg:mt-0`}
          >
            <p>
              We don’t currently have any open positions but we’re always
              looking for great folks!{" "}
              <a
                className="underline"
                href={generalApps.job_listing.external_url.url}
              >
                Send us your details
              </a>
              , and let’s talk.
            </p>
          </div>
        )
        // if there are more than 1 job listings, let's show the CTACards
      } else if (job.job_listing && job_listings.length > 1) {
        return (
          <div
            key={index}
            className={`${index >= 3 ? "lg:mt-16" : ""} ${
              index !== 0 && index % 3 === 0 ? "offset-lg-3" : ""
            } col-sm-6 col-md-4 col-lg-3 mt-8 `}
          >
            <div>
              <CtaCard
                title={job.job_listing.job_title[0].text}
                subtitle={job.job_listing.location[0].text}
                cssClass=""
                href={job.job_listing.external_url.url}
              />
            </div>
          </div>
        )
      }
      return null
    })
  }
  const outputBenefits = (props) => {
    return props.map((item, index) => {
      return (
        <li key={index} className="list__item">
          {item.benefit[0].text}
        </li>
      )
    })
  }

  let seoTitle = seo_title ? seo_title : page_title[0].text

  return (
    <Layout seoTitle={seoTitle} palette={selectedPalette} type={type} uid={uid}>
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
            <div
              className={`col-sm-12 ${
                job_listings.length > 1 ? "col-md-12" : "col-md-6"
              } col-lg-3`}
            >
              <h2 className="heading-01">Open Positions</h2>
            </div>
            {outputJobListings()}
            {/* Only show this message when there's more than 1 job listing, in theory 'General Applications' will always be a job listing that we have */}
            <div className="col-lg-6 offset-lg-3 ">
              {job_listings.length > 1 &&
              job_listings[0].job_listing.job_title[0].text ===
                "General Applications" ? (
                <p className="mt-16">
                  Don’t see anything that fits your expertise? Feel free to
                  apply to the{" "}
                  <a
                    className=""
                    href={generalApps.job_listing.external_url.url}
                  >
                    General Applications{" "}
                  </a>
                  opening and we will keep you in mind for future opportunities!
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="container py-24">
          <hr className="theme-color mb-48 mt-0" />
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <h2 className="heading-01 sm:pb-10">Benefits & Perks</h2>
            </div>
            <div className="col-md-6">
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
          <div className="container">
            <div className="row">
              <div className="offset-sm-2 offset-md-2 offset-lg-3 col-sm-8 col-md-8 col-lg-6 col-xl-6 offset-xl-3">
                <h2 className="heading-01 pb-10">{diversity_header[0].text}</h2>

                <p>{diversity_statement[0].text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-48">
        <div className="row">
          <div className="offset-sm-1 offset-md-1 offset-lg-1 col-sm-10 col-md-10 col-lg-10 ">
            <div className="center">
              <img
                className="mb-48 mx-auto"
                alt={
                  props.data.prismic.allCareerss.edges[0].node.remote_team.alt
                }
                src={
                  props.data.prismic.allCareerss.edges[0].node.remote_team.url
                }
              />
            </div>
          </div>
        </div>
        <div className="row items-center">
          <div className="col-md-6">
            <h2 className="heading-01 sm:pb-10">{remote_header[0].text}</h2>
          </div>
          <div className="col-md-6">{remote_statement[0].text}</div>
        </div>
      </div>
    </Layout>
  )
}

export default CareersPage
