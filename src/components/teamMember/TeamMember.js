import React from "react"
import { RichText } from "prismic-reactjs"
import 'lazysizes';

const TeamMember = ({ photo, name, specialties }) => {

  console.log(photo);

  let mobileSrc = '';

  try {
    mobileSrc = photo.Mobile.url
  } catch (err) {
    console.error(err);
  }

  return (
    <div className="team-member">
      <div className="team-member-photo">
      {/* <picture>
        <source media="(max-width: 576px)" srcSet={mobileSrc} />
        <img src={photo.url} alt={photo.alt} />
      </picture> */}
        <img
          className="lazyload"  
          data-src={photo.url}
          alt={photo.alt} 
        />
      </div>
      <h2 className="team-member-name body-short-02 serif mt-4">{name}</h2>
      <div className="team-member-specialties body-01">
        <RichText render={specialties} />
      </div>
    </div>
  )
}

export default TeamMember
