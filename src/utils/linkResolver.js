module.exports = (doc) => {
  
  // URL for a case study type
  if (doc.type === 'case_study') {
    return `/case-study/${doc.uid}`;
  }

  // URL for a news article type
  if (doc.type === 'news_article') {
    return `/news/${doc.uid}`;
  }

  // URL for a page type
  if (doc.type === 'page') {
    return `/${doc.uid}`;
  }

  // Backup for all other types
  return '/'
}