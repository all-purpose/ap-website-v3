import React from 'react';
import {Link} from 'gatsby';

const SkipLinks = () => {

  return (
    <div className="skip-links">
      <Link className="skip-link" to={'#content'}>Skip to main content</Link>
    </div>
  );

}

export default SkipLinks;