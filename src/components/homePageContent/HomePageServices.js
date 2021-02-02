import React from "react"
import { RichText } from "prismic-reactjs"

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
            <RichText render={service_category_title.raw} />
          </div>
          <RichText render={services_listing.raw} />
        </div>
      )
    })
  }

  return (
    <div className="container py-48">
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
  )
}

export default HomePageServices
