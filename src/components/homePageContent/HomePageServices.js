import React from "react"
import { RichText } from "prismic-reactjs"
import VideoEmbed from "../videoEmbed/VideoEmbed"

const HomePageServices = ({
  sectionTitle,
  brandTitle,
  serviceCategoryListings,
}) => {
  const outputServiceCategoryListings = (serviceCategoryListings) => {
    if (serviceCategoryListings.length === 0) {
      return false
    }

    return serviceCategoryListings.map((categoryListing, i) => {
      const { service_category_title, services_listing } = categoryListing

      return (
        <div key={i} className="col-12 col-lg-3">
          <div className="sr-only">
            <RichText render={service_category_title.richText} />
          </div>
          <RichText render={services_listing.richText} />
        </div>
      )
    })
  }

  // TODO: Put this data into Prismic
  let embedCode = {
    richText: [
      {
        text: `<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe title='All Purpose Media Reel' src='https://player.vimeo.com/video/481387602' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div>`,
      },
    ],
  }
  let transcript = {
    richText: [
      {
        text: null,
      },
    ],
  }

  return (
    <>
      <div className="container pt-48 pb-24">
        <div className="heading-02 mb-48">
          <RichText render={brandTitle} />
        </div>
        <div className="eyebrow">
          <RichText render={sectionTitle} />
        </div>
        <div className="body-short-02 row">
          {outputServiceCategoryListings(serviceCategoryListings)}
        </div>
      </div>
      <div className="pb-48">
        <div className="container eyebrow">
          <h2>Our media reel</h2>
        </div>
        <VideoEmbed embedCode={embedCode} transcript={transcript} />
      </div>
    </>
  )
}

export default HomePageServices
