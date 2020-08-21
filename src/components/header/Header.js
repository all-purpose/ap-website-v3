import React from "react"
import SkipLinks from "../skipLinks/SkipLinks"
import Branding from "../branding/Branding"
import SiteNav from "../siteNav/SiteNav"

import "./Header.scss"

const Header = () => {
  return (
    <header className="site-header apply-color-theme">
      <SkipLinks />
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Branding />
          </div>
          <div className="offset-md-6 col-md-3">
            <SiteNav />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
