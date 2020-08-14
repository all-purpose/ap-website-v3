import React from 'react';
import Logo from '../logo/Logo';
import {Link} from 'gatsby';

const Branding = props => {

  return (
    <Link rel="home" to={'/'}>
      <Logo />
    </Link>
  )
}

export default Branding;