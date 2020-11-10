import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

const navigationQuery = graphql`
  {
    prismic {
      allFooters {
        edges {
          node {
            footer_nav {
              navigation_label
              navigation_link {
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
                ... on PRISMIC_News_page {
                  _meta {
                    uid
                  }
                }
                ... on PRISMIC_Careers {
                  _meta {
                    uid
                  }
                }
              }
            }
            footer_navigation_accessible_name
          }
        }
      }
    }
  }
`

const FooterNav = () => {
  const outputNavLinks = (data) => {
    return data.prismic.allFooters.edges[0].node.footer_nav.map(
      (link) => {
        return (
          <li key={link.navigation_link._meta.uid}>
            <Link to={`/${link.navigation_link._meta.uid}`} className="nav-link">
              {link.navigation_label}
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
                data.prismic.allFooters.edges[0].node.footer_navigation_accessible_name
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

export default FooterNav
