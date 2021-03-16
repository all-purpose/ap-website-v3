import React from "react"
import TeamMember from "../teamMember/TeamMember"

const TeamMembers = ({ accessibleName, fields }) => {
  const teamListProps = {
    className: "team-member row",
  }

  const outputTeamMembers = (fields) => {
    return fields.map((field, index) => {
      const { name, photo, specialties } = field.team_member.document.data

      return (
        <li key={index} className="col-6 col-md-3 mb-16">
          <TeamMember
            name={name}
            photo={photo}
            specialties={specialties}
          />
        </li>
      )
    })
  }

  return (
    <div className="container py-24">
      {accessibleName && (
        <h2 className="sr-only">{accessibleName}</h2>
      )}
      <ul {...teamListProps}>{outputTeamMembers(fields)}</ul>
    </div>
  )
}

export default TeamMembers
