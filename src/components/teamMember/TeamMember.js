import React from "react"
import { RichText } from "prismic-reactjs"

const TeamMember = ({ photo, name, specialties }) => {

  if (!photo.url) {
    return false;
  }

  if (process.env.NODE_ENV === 'development' && !photo.alt) {
    console.warn('No alt text for image: %s. Is this intentional?', photo.url);
  }

  return (
    <div className="team-member">
      <div className="team-member-photo">
        <img 
          src={photo.url} 
          alt={photo.alt || ''} 
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
