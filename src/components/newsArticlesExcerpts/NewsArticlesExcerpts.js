import React from 'react';
import {StaticQuery} from 'gatsby';
import NewsArticleExcerpt from '../newsArticleExcerpt/NewsArticleExcerpt';

const newsArticlesQuery = graphql`
{
  prismic {
    allNews_articles(sortBy: meta_firstPublicationDate_DESC) {
      edges {
        node {
          _meta {
            uid
            firstPublicationDate
          }
          article_feature_text
          article_title
        }
      }
    }
  }
}
`

const NewsArticlesExcerpts = () => {

  const outputNewsArticlesExcerpts = (data) => {
    return data.prismic.allNews_articles.edges.map(
      (article, i) => {
        const {
          _meta,
          article_title,
          article_feature_text
        } = article.node;

        const {
          uid,
          firstPublicationDate
        } = _meta;

        return (
          <li key={i}>
            <NewsArticleExcerpt
              slug={uid}
              pubDate={firstPublicationDate}
              title={article_title}
              featText={article_feature_text}
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