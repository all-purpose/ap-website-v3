import React, {useState, useEffect} from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout/Layout';
import SliceZone from '../components/sliceZone/SliceZone';
import PageHeaderGeneral from '../components/pageHeader/PageHeaderGeneral';

export const query = graphql`
  query PageQuery($id: String) { 
    prismic {
      allPages(id: $id) {
        edges {
          node {
            _meta {
              uid
              type
            }
            page_description
            page_title
            body {
              ... on PRISMIC_PageBodyFlexible_content_section {
                type
                primary {
                  container_css_class
                  container_id
                }
                fields {
                  item_content
                  item_css_class
                  item_id
                }
              }
              ... on PRISMIC_PageBodyImage_group {
                type
              }
            }
          }
        }
      }
    }
  }
`;

const Page = props => {

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
    body
  } = props.data.prismic.allPages.edges[0].node;

  const {
    uid,
    type
  } = _meta;

  return (
    <Layout seoTitle={page_title[0].text} palette={selectedPalette} type={type} uid={uid}>
      <PageHeaderGeneral 
        title={page_title} 
        description={page_description} 
      />
      <SliceZone body={body} pageType={type} uid={uid} />
    </Layout>
  );
}

export default Page;