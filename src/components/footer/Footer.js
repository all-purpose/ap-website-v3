import React from 'react';
import FooterLinks from '../footerLinks/FooterLinks';
import LandAcknowledgement from '../landAcknowledgement/LandAcknowledgement';


const Footer = () =>  {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <FooterLinks />
          </div>
          <div className="col-md-6">
            <LandAcknowledgement />
          </div>
        </div>
      </div>
    </footer>
  );

}

export default Footer;