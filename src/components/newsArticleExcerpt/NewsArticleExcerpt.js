import React from 'react';
import moment from 'moment';
import {Link} from 'gatsby';
import {RichText} from 'prismic-reactjs';

const NewsArticleExcerpt = ({slug, pubDate, title, featText}) => {

  return (
    <article className="news-article">
      <Link to={`/news/${slug}`} className="news-article-link ">
        <footer>
          <div className="news-article-pub-date">
            <time dateTime={pubDate}>{moment.utc(pubDate).format('MMMM Do YYYY')}</time>
          </div>
        </footer>
        <h2 className="news-article-title">
          {RichText.asText(title)}
        </h2>
        <div className="news-article-summary">
          <RichText render={featText} />
        </div>
      </Link>
    </article>
  )

}


export default NewsArticleExcerpt;