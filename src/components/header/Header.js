import React from 'react';
import SkipLinks from '../skipLinks/SkipLinks';
import Branding from '../branding/Branding';
import SiteNav from '../siteNav/SiteNav';

const Header = props =>  {

  return (
    <header>
      <SkipLinks />
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Branding />
          </div>
          <div className="col-md-9">
            <SiteNav />
          </div>
        </div>
      </div>
      
    </header>
  );

}

export default Header;