import React, {useState, useEffect} from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/layout/Layout';
import PageHeaderGeneral from '../../components/pageHeader/PageHeaderGeneral';
import TeamMembers from '../../components/teamMembers/TeamMembers';
import CallToAction from '../../components/callToAction/CallToAction';

export const query = graphql`
  query TeamPageQuery { 
    allPrismicTeamPage {
      edges {
        node {
          type
          uid
          data {
            page_description {
              richText
            }
            page_title {
              richText
            }
            accessible_name
            team_profiles {
              team_member {
                document {
                  ... on PrismicTeamMember {
                    id
                    data {
                      name
                      photo {
                        alt
                        url
                      }
                      specialties {
                        specialty {
                          document {
                            ... on PrismicSpecialty {
                              data {
                                specialty_name
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            call_to_action {
              document {
                ... on PrismicCallToAction {
                  id
                  data {
                    call_to_action_buttons {
                      button_action_text
                      button_sub_text {
                        richText
                      }
                      button_link_target {
                        document {
                          ... on PrismicContactPage {
                            uid
                          }
                        }
                      }
                    }
                    call_to_action_statement {
                      richText
                    }
                  }
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

  const node = props.data.allPrismicTeamPage.edges[0].node

  const { uid, type } = node;

  const {
    page_title,
    page_description,
    accessible_name,
    team_profiles,
    call_to_action
  } = node.data;

  return (
    <Layout seoTitle={page_title.richText[0].text} palette={selectedPalette} type={type} uid={uid}>
      <PageHeaderGeneral 
        title={page_title.richText} 
        description={page_description.richText} 
      />
      <div className="page-sections">
        <TeamMembers 
          accessibleName={accessible_name}
          fields={team_profiles}
        />
      </div>
      <CallToAction
        callToAction={call_to_action}
      />
    </Layout>
  );
}

export default TeamPage;