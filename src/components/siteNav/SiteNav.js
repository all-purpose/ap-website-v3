import React, { useState } from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import "./SiteNav.scss"

const navigationQuery = graphql`
  {
    allPrismicNavigation {
      edges {
        node {
          data {
            navigation_accessible_name
            navigation_links {
              nav_link_label
              page_link {
                document {
                  ... on PrismicContactPage {
                    uid
                  }
                  ... on PrismicNewsPage {
                    uid
                  }
                  ... on PrismicTeamPage {
                    uid
                  }
                  ... on PrismicWorkPage {
                    uid
                  }
                  ... on PrismicCareers {
                    uid
                  }
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

  const [navOpen, setNavOpen] = useState(false)

  const outputNavLinks = (data) => {
    return data.allPrismicNavigation.edges[0].node.data.navigation_links.map(
      (link) => {
        return (
          <li key={link.page_link.document.uid}>
            <Link to={`/${link.page_link.document.uid}`} className="nav-link ">
              {link.nav_link_label}
            </Link> 
          </li>
        )
      }
    )
  }

  const handleNavToggle = () => {
    setNavOpen(!navOpen)
  }

  return (
    <StaticQuery
      query={`${navigationQuery}`}
      render={(data) => {
        return (
          <div className={`nav-wrapper   ${navOpen ? "open" : "closed"}`}>
            <button className="nav-toggle " onClick={handleNavToggle}>
              {navOpen ? "Close" : "Menu"}
            </button>
            <nav
              className={`nav   ${navOpen ? "open" : "closed"}`}
              aria-label={
                data.allPrismicNavigation.edges[0].node.data
                  .navigation_accessible_name
              }
            >
              <ul>{outputNavLinks(data)}</ul>
            </nav>
          </div>
        )
      }}
    />
  )
}

export default SiteNav
