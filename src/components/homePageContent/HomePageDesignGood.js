import React from 'react';
import {RichText} from 'prismic-reactjs';

const HomePageDesignGood = ({sectionTitle, description, logos}) => {

  const outputLogos = logos => {

    if (logos.length === 0) {
      return false;
    }

    return logos.map((logo, i) => {

      const {
        logo_image
      } = logo;

      return (
        <div key={i}>
          <img src={logo_image.url} alt={logo_image.alt} />
        </div>
      )

    });

  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="heading-02">
            <RichText render={sectionTitle} />
          </div>
          <div className="body-short-02">
            <RichText render={description} />
          </div>
        </div>
        <div className="col-md-6">
          {outputLogos(logos)}
        </div>
      </div>   
    </div>
  )

}

export default HomePageDesignGood;