import React from 'react';
import {StaticQuery, graphql} from 'gatsby';
import NewsArticleExcerpt from '../newsArticleExcerpt/NewsArticleExcerpt';

const newsArticlesQuery = graphql`
{
  allPrismicNewsArticle(sort: {fields: first_publication_date, order: DESC}) {
    edges {
      node {
        data {
          article_title {
            raw
          }
        }
        first_publication_date
        uid
      }
    }
  }
}
`

const NewsArticlesExcerpts = () => {

  const outputNewsArticlesExcerpts = (data) => {
    console.log(data)
    return data.allPrismicNewsArticle.edges.map(
      (article, i) => {
        const articleNode = article.node

        const { uid, first_publication_date } = articleNode
        
        const {
          article_title,
        } = articleNode.data

        return (
          <li key={i}>
            <NewsArticleExcerpt
              slug={uid}
              pubDate={first_publication_date}
              title={article_title.raw}
            />
          </li>
        )
      }
    )
  }

  return (
    <StaticQuery
      query={`${newsArticlesQuery}`}
      render={(data) => {
        return (
          <ul>
            {outputNewsArticlesExcerpts(data)}
          </ul>
        )
      }}
    />
  )

}

export default NewsArticlesExcerpts;