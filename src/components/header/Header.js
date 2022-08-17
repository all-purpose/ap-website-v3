import React from "react"
import SkipLinks from "../skipLinks/SkipLinks"
import Branding from "../branding/Branding"
import SiteNav from "../siteNav/SiteNav"

import "./Header.scss"

const Header = () => {
  return (
    <header aria-label="Site header" className="site-header apply-color-theme--font">
      <SkipLinks />
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-6">
            <Branding />
          </div>
          <div className="offset-md-6 col-md-3 col-6">
            <SiteNav />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
