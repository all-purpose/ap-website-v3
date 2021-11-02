/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const caseStudyPages = await graphql(`
    {  
      allPrismicCaseStudy {
        edges {
          node {
            uid
          }
          next {
            uid
            data {
              project_name
            }
          }
          previous {
            uid
            data {
              project_name
            }
          }
        }
      }
    }
  `)

  caseStudyPages.data.allPrismicCaseStudy.edges.forEach(
  (edge) => {
    createPage({
      path: `/case-study/${edge.node.uid}`,
      component: path.resolve(__dirname, 'src/templates/caseStudy.js'),
      context: { ...edge.node, next: edge.next, previous: edge.previous }
    })
  })

  const newsArticlePages = await graphql(`
    {  
      allPrismicNewsArticle {
        nodes {
          uid
        }
      }
    }
  `)

  newsArticlePages.data.allPrismicNewsArticle.nodes.forEach(
    (article) => {
      createPage({
        path: `/news/${article.uid}`,
        component: path.resolve(__dirname, 'src/templates/newsArticle.js'),
        context: { ...article }
      })
    })

}