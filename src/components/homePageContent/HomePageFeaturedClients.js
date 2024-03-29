import React from "react"
import { RichText } from "prismic-reactjs"

const HomePageFeaturedClients = ({ sectionTitle, description, logos }) => {
  const outputLogos = (logos) => {
    if (logos.length === 0) {
      return false
    }

    return logos.map((logo, i) => {

      const {
        logo_image,
        left_offset,
        top_offset
      } = logo;

      if (!logo_image.url) {
        return false;
      }

      // (Optional) - offset the logo from left or top for minor alignment adjustments within the logos grid
      const leftOffset = left_offset ? `${left_offset}rem` : '0';
      const topOffset = top_offset ? `${top_offset}rem` : '0';

      if (process.env.NODE_ENV === 'development' && !logo_image.alt) {
        console.warn('No alt text for image: %s. Is this intentional?', logo_image.url);
      }

      return (
        <div className="col-sm-6 col-lg-3 flex items-center" key={i}>
          <img
            style={(left_offset || top_offset) ? {
              left: leftOffset,
              top: topOffset
            } : null}
            className="mx-auto p-12 sm:relative"
            src={logo_image.url} 
            alt={logo_image.alt || ''} 
          />
        </div>
      )
    })
  }

  return (
    <div className="container py-48">
      <div className="row">
        <div className="col-lg-8">
          <div className="heading-02 mb-16">
            <RichText render={sectionTitle} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 mb-24">
          <div className="body-short-02">
            <RichText render={description} />
          </div>
        </div>
      </div>
      <div className="row justify-center">
        {outputLogos(logos)}
      </div>
    </div>
  )
}

export default HomePageFeaturedClients
