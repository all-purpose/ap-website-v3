import React from 'react';
import {RichText} from 'prismic-reactjs';

const TeamMember = ({photo, name, specialties}) => {

  return (
    <div className="team-member">
      <div className="team-member-photo">
        <img src={photo.url} alt={photo.alt} />
      </div>
      <h2 className="team-member-name">{name}</h2>
      <div className="team-member-specialties">
        <RichText render={specialties} />
      </div>
    </div>
  )

}

export default TeamMember;