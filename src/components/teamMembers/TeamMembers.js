import React from 'react';
import TeamMember from '../teamMember/TeamMember';

const TeamMembers = ({accessibleName, fields}) => {

  const teamListProps = {
    className: "team-member row"
  };

  if (accessibleName) {
    teamListProps['aria-label'] = accessibleName;
  }

  const outputTeamMembers = fields => {
    return fields.map((field, index) => {
      const {
        name,
        photo,
        specialties_list
      } = field.team_member;

      return (
        <li 
          key={index}
          className="col-6 col-md-3">
          <TeamMember
            name={name}
            photo={photo}
            specialties={specialties_list}
          />
        </li>
      );

    });
  }

  return (
    <div className="container">
      <ul {...teamListProps}>
        {outputTeamMembers(fields)}
      </ul>
    </div>
  )

}

export default TeamMembers;