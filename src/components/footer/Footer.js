import React from 'react';
import FooterNav from '../footerNav/FooterNav';
import LandAcknowledgement from '../landAcknowledgement/LandAcknowledgement';


const Footer = () =>  {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <FooterNav />
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