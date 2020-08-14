import React from 'react';
import TeamMember from '../teamMember/TeamMember';

const TeamListing = ({accessibleName, fields}) => {

  const teamListProps = {
    className: "team-listing row"
  };

  if (accessibleName) {
    teamListProps['aria-label'] = accessibleName;
  }

  const outputTeamMembers = fields => {
    return fields.map((field, index) => {
      const {
        name,
        photo
      } = field.team_member;

      return (
        <li 
          key={index}
          className="col-6 col-md-3">
          <TeamMember
            name={name}
            photo={photo}
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

export default TeamListing;