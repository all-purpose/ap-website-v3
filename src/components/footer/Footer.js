import React from "react"
import FooterNav from "../footerNav/FooterNav"
import LandAcknowledgement from "../landAcknowledgement/LandAcknowledgement"
import SocialMedia from "../socialMedia/SocialMedia"
import "./Footer.scss"

const Footer = () => {
  return (
    <footer className="site-footer apply-color-theme">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <FooterNav />
          </div>
          <div className="col-md-6 body-01 footer-land-acknowledgement">
            <LandAcknowledgement />
            <SocialMedia />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
