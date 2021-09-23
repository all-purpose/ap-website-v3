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
            url
          }
          next {
            url
            data {
              project_name
            }
          }
          previous {
            url
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
    console.log(edge.node)
    createPage({
      path: edge.node.url,
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