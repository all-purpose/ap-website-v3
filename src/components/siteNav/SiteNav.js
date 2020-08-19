import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

const navigationQuery = graphql`
{
  prismic {
    allNavigations {
      edges {
        node {
          navigation_accessible_name
          navigation_links {
            nav_link_label
            page_link {
              ... on PRISMIC_Contact_page {
                _meta {
                  uid
                }
              }
              ... on PRISMIC_Page {
                _meta {
                  uid
                }
              }
              ... on PRISMIC_Team_page {
                _meta {
                  uid
                }
              }
              ... on PRISMIC_Work_page {
                _meta {
                  uid
                }
              }
            }
          }
        }
      }
    }
  }
`

const SiteNav = () => {
  const outputNavLinks = (data) => {
    return data.prismic.allNavigations.edges[0].node.navigation_links.map(
      (link) => {
        return (
          <li key={link.page_link._meta.uid}>
            <Link to={`/${link.page_link._meta.uid}`}>
              {link.nav_link_label}
            </Link>
          </li>
        )
      }
    )
  }

  return (
    <StaticQuery
      query={`${navigationQuery}`}
      render={(data) => {
        return (
          <>
            <nav
              aria-label={
                data.prismic.allNavigations.edges[0].node
                  .navigation_accessible_name
              }
            >
              <ul>{outputNavLinks(data)}</ul>
            </nav>
          </>
        )
      }}
    />
  )
}

export default SiteNav
