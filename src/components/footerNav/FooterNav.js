import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

const navigationQuery = graphql`
  {
    allPrismicFooter {
      nodes {
        data {
          footer_nav {
            navigation_label
            navigation_link {
              document {
                ... on PrismicContactPage {
                  uid
                }
                ... on PrismicTeamPage {
                  uid
                }
                ... on PrismicNewsPage {
                  uid
                }
                ... on PrismicCareers {
                  uid
                }
                ... on PrismicWorkPage {
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

const FooterNav = () => {
  const outputNavLinks = (data) => {
    return data.allPrismicFooter.nodes[0].data.footer_nav.map(
      (link) => {
        return (
          <li key={link.navigation_link.document.uid}>
            <Link to={`/${link.navigation_link.document.uid}`} className="nav-link">
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
                data.allPrismicFooter.nodes[0].data.footer_navigation_accessible_name
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
