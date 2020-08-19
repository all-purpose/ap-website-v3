import React from 'react';
import {RichText} from 'prismic-reactjs';

const HomePageServices = ({sectionTitle, brandTitle, serviceCategoryListings}) => {

  const outputServiceCategoryListings = serviceCategoryListings => {

    if (serviceCategoryListings.length === 0) {
      return false;
    }

    return serviceCategoryListings.map((categoryListing, i) => {

      const {
        service_category_title,
        services_listing
      } = categoryListing;

      return (
        <div key={i} className="col-sm-6 col-md-3">
          <div className="sr-only">
            <RichText render={service_category_title} />
          </div>
          <RichText render={services_listing} />
        </div>
      )

    });

  }

  return (
    <div className="container">
      <div className="heading-02">
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

export default HomePageServices;