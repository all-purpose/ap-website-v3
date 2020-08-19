import React, {useState, useEffect} from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout/Layout';
import PageHeaderGeneral from '../components/pageHeader/PageHeaderGeneral';
import TeamMembers from '../components/teamMembers/TeamMembers';

export const query = graphql`
  query TeamPageQuery { 
    prismic {
      allTeam_pages {
        edges {
          node {
            _meta {
              type
              uid
            }
            page_description
            page_title
            accessible_name
            team_profiles {
              team_member {
                ... on PRISMIC_Team_member {
                  name
                  photo
                  specialties_list
                }
              }
            }
          }
        }
      }
    }
  }
`;

const TeamPage = props => {

  const [selectedPalette, setSelectedPalette] = useState(null);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  // Run theme selection once on mounting  
  useEffect(() => {    
    const random = getRandomInt(1, 11); 
    setSelectedPalette(`palette-${random}`);
  }, []);

  const {
    _meta,
    page_title,
    page_description,
    accessible_name,
    team_profiles
  } = props.data.prismic.allTeam_pages.edges[0].node;

  const {
    uid,
    type
  } = _meta;

  return (
    <Layout palette={selectedPalette} type={type} uid={uid}>
      <PageHeaderGeneral 
        title={page_title} 
        description={page_description} 
      />
      <div className="page-sections">
        <TeamMembers 
          accessibleName={accessible_name}
          fields={team_profiles}
        />
      </div>
    </Layout>
  );
}

export default TeamPage;