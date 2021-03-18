import React from "react"

const TeamMember = ({ photo, name, specialties }) => {

  if (!photo.url) {
    return false;
  }

  if (process.env.NODE_ENV === 'development' && !photo.alt) {
    console.warn('No alt text for image: %s. Is this intentional?', photo.url);
  }

  const getFirstName = name => {
    if (!name) {
      return false
    }
    return name.split(' ')[0]
  }

  const outputSpecialties = (specialties, name) => {

    if (specialties.length === 0 || !specialties[0].specialty.document) {
      // If there are no specialties or if there is the default one in Prismic but it does not have a specialty doc set...
      return false
    }

    return (
      <ul aria-label={`${getFirstName(name)}’s specialties`}>
        {specialties.map((obj, i) => {
          return (
            <li key={i}>{obj.specialty.document.data.specialty_name}</li>
          )
        })}
      </ul>
    )

  }

  return (
    <div className="team-member">
      <div className="team-member-photo">
        <img 
          src={photo.url} 
          alt={''} // The image is the name of the person but this is already announced in profile title no redundant
          // alt={photo.alt || ''} 
        />
      </div>
      <h3 className="team-member-name body-short-02 serif mt-4">{name}</h3>
      <div className="team-member-specialties body-01">
        {outputSpecialties(specialties, name)}
      </div>
    </div>
  )
}

export default TeamMember
