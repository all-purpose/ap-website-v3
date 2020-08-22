import React from "react"
import { RichText } from "prismic-reactjs"

const HomePageDesignGood = ({ sectionTitle, description, logos }) => {
  const outputLogos = (logos) => {
    if (logos.length === 0) {
      return false
    }

    return logos.map((logo, i) => {
      const { logo_image } = logo

      return (
        <div className="col-sm-3 flex items-center" key={i}>
          <img className="mx-auto" src={logo_image.url} alt={logo_image.alt} />
        </div>
      )
    })
  }

  return (
    <div className="container py-48">
      <div className="row">
        <div className="col-md-6 ">
          <div className="heading-02 mb-16">
            <RichText render={sectionTitle} />
          </div>
          <div className="body-short-02">
            <RichText render={description} />
          </div>
        </div>
        {outputLogos(logos)}
      </div>
    </div>
  )
}

export default HomePageDesignGood
