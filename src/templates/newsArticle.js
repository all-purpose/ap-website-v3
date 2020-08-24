import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/layout/Layout';
import SliceZone from '../components/sliceZone/SliceZone';

export const query = graphql`
  query NewsArticleQuery(
    $uid: String
    $paginationPreviousUid: String!
    $paginationPreviousLang: String!
    $paginationNextUid: String!
    $paginationNextLang: String!
  ) {
    prismic {
      allNews_articles(uid: $uid) {
        edges {
          node {
            _meta {
              type
              uid
            }
            body {
              ... on PRISMIC_News_articleBodyFlexible_content_section {
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
            }
          }
        }
      }
      prevCase_study: news_article(uid: $paginationPreviousUid, lang: $paginationPreviousLang) {
        _meta {
          uid
          lang
          type
        }
      }
      nextCase_study: news_article(uid: $paginationNextUid, lang: $paginationNextLang) {
        _meta {
          uid
          lang
          type
        }
      }
    }
  }
`;

const NewsArticle = props => {

  const {
    _meta, 
    body
  } = props.data.prismic.allNews_articles.edges[0].node;

  // const {
  //   prevCase_study,
  //   nextCase_study
  // } = props.data.prismic;

  const {
    type,
    uid
  } = _meta;

  return (
    <Layout type={type} uid={uid}>
      {/* <PageHeaderCaseStudy
        title={page_title} 
        description={page_description} 
      /> */}
      {/* <CaseStudyInPageNav
        navAccessibleName={accessible_name}
        inPageNavItems={in_page_navigation}
      /> */}
      <SliceZone 
        palette={null} 
        body={body} 
        pageType={type} 
        uid={uid} 
      />
      {/* <CaseStudyPagination
        prevCaseStudy={prevCase_study}
        nextCaseStudy={nextCase_study}
      /> */}
      {/* <CallToAction 
        callToAction={call_to_action}
      /> */}
    </Layout>
  )

}

export default NewsArticle;
