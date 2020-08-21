import React from 'react';
import {graphql} from 'gatsby';
import styled from "styled-components"
import Layout from '../components/layout/Layout';
import PageHeaderCaseStudy from '../components/pageHeader/PageHeaderCaseStudy';
import CaseStudyDetails from '../components/caseStudyPageContent/CaseStudyDetails';
import CaseStudyInPageNav from '../components/caseStudyPageContent/CaseStudyInPageNav';
import SliceZone from '../components/sliceZone/SliceZone';
import CaseStudyPagination from '../components/caseStudyPageContent/CaseStudyPagination';
import CallToAction from '../components/callToAction/CallToAction';

const CustomStyleWrapper = styled.div`
  .apply-color-theme {
    background-color: ${props => props.bgColor};  
    color: ${props => props.textColor};
  }
  .page-title, .nutshell-title, .role-title, .case-study-section-title {
    color: ${props => props.highlightColor};
  }
  .svg-logo path {
    fill: ${props => props.textColor};
  }
  .nutshell-desc, .role-desc {
    color: ${props => props.textColor};
  }

  .pagination {
    background-color: ${props => props.textColor};
    color: ${props => props.bgColor};
  }
  
`;

export const query = graphql`
  query CaseStudyQuery(
    $uid: String
    $paginationPreviousUid: String!
    $paginationPreviousLang: String!
    $paginationNextUid: String!
    $paginationNextLang: String!
  ) {
    prismic {
      allCase_studys(uid: $uid, sortBy: order_ASC) {
        edges {
          node {
            _meta {
              type
              uid
            }
            background_header_color
            case_study_page_title
            highlight_color
            in_a_nutshell
            our_role
            project_name
            text_color
            body {
              ... on PRISMIC_Case_studyBodyCase_study_main {
                type
                primary {
                  section_content
                  section_css_class
                  section_id
                  section_title
                }
              }
              ... on PRISMIC_Case_studyBodyFlexible_content_section {
                type
                fields {
                  item_content
                  item_css_class
                  item_id
                }
                primary {
                  container_css_class
                  container_id
                }
              }
              ... on PRISMIC_Case_studyBodyImage_group {
                type
                fields {
                  image
                  image_caption
                }
                primary {
                  section_css_class
                  section_id
                }
              }
              ... on PRISMIC_Case_studyBodyBlock_quote {
                type
                primary {
                  quote_author_citation
                  quote_text
                  section_css_class
                  section_id
                }
              }
              ... on PRISMIC_Case_studyBodyVideo_embed {
                type
                primary {
                  video_embed_code
                  section_css_class
                  section_id
                }
              }
            }
            call_to_action {
              ... on PRISMIC_Call_to_action {
                call_to_action_statement
                call_to_action_buttons {
                  button_action_text
                  button_sub_text
                  button_link_target {
                    ... on PRISMIC_Contact_page {
                      _meta {
                        uid
                      }
                    }
                  }
                  
                }
              }
            }
            accessible_name
            in_page_navigation {
              navigation_label
              navigation_section_id
            }
          }
        }
      }
      prevCase_study: case_study(uid: $paginationPreviousUid, lang: $paginationPreviousLang) {
        project_name
        _meta {
          uid
          lang
          type
        }
      }
      nextCase_study: case_study(uid: $paginationNextUid, lang: $paginationNextLang) {
        project_name
        _meta {
          uid
          lang
          type
        }
      }
    }
  }
`;

const CaseStudy = props => {

  const {
    _meta, 
    project_name, 
    case_study_page_title, 
    our_role, 
    in_a_nutshell,
    background_header_color,
    text_color,
    highlight_color, 
    body,
    call_to_action,
    accessible_name,
    in_page_navigation
  } = props.data.prismic.allCase_studys.edges[0].node;

  const {
    prevCase_study,
    nextCase_study
  } = props.data.prismic;

  const {
    type,
    uid
  } = _meta;

  return (
    <CustomStyleWrapper bgColor={background_header_color} textColor={text_color} highlightColor={highlight_color}>
      <Layout type={type} uid={uid}>
        <PageHeaderCaseStudy
          title={project_name} 
          description={case_study_page_title} 
        />
        <CaseStudyDetails
          ourRole={our_role}
          inANutshell={in_a_nutshell}
        />
        <CaseStudyInPageNav
          navAccessibleName={accessible_name}
          inPageNavItems={in_page_navigation}
        />
        <SliceZone 
          palette={null} 
          body={body} 
          pageType={type} 
          uid={uid} 
        />
        <CaseStudyPagination
          prevCaseStudy={prevCase_study}
          nextCaseStudy={nextCase_study}
        />
        <CallToAction 
          callToAction={call_to_action}
        />
      </Layout>
    </CustomStyleWrapper>
  )

}

export default CaseStudy;
