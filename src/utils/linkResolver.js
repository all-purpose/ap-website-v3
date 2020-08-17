export const linkResolver = (doc) => {
  
  // URL for a case study type
  if (doc.type === 'case_study') {
    return `/case-study/${doc.uid}`;
  }

  // URL for a product type
  // if (doc.type === 'product') {
  //   return `/product/${doc.uid}`
  // }

  // URL for a page type
  if (doc.type === 'page') {
    return `/${doc.uid}`;
  }

  // Backup for all other types
  return '/'
}