import React from 'react';
import {RichText} from 'prismic-reactjs';

const CaseStudyDetails = ({ourRole, inANutshell}) => {

  return (
    <div className="container">
      <div className="row">
        <div className="role col-sm-12 col-md-6">
          <h2 className="role-title eyebrow">Our role</h2>
          <div className="role-desc body-short-02">
            <RichText render={ourRole} />
          </div>
        </div>
        <div className="nutshell col-sm-12 col-md-6">
          <h2 className="nutshell-title eyebrow">In a nutshell</h2>
          <div className="nutshell-desc body-short-02">
            <RichText render={inANutshell} />
          </div>
        </div>
      </div>
    </div>
  )

}

export default CaseStudyDetails;