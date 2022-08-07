import React from "react"
import { RichText } from "prismic-reactjs"

const HomePageDesignGood = ({ sectionTitle, description, logos }) => {
  const outputLogos = (logos) => {
    if (logos.length === 0) {
      return false
    }

    return logos.map((logo, i) => {

      const { logo_image } = logo;

      if (!logo_image.url) {
        return false;
      }
      
      if (process.env.NODE_ENV === 'development' && !logo_image.alt) {
        console.warn('No alt text for image: %s. Is this intentional?', logo_image.url);
      }

      return (
        <div className="col-sm-6 flex items-center" key={i}>
          <img 
            className="mx-auto p-12" 
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
        <div className="col-lg-6 mb-24">
          <div className="heading-02 mb-16">
            <RichText render={sectionTitle} />
          </div>
          <div className="body-short-02">
            <RichText render={description} />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="row">
            {outputLogos(logos)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePageDesignGood
