import React, { useState } from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import "./SiteNav.scss"

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
                ... on PRISMIC_News_page {
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
  }
`

const SiteNav = () => {

  const [navOpen, setNavOpen] = useState(false)

  const outputNavLinks = (data) => {
    return data.prismic.allNavigations.edges[0].node.navigation_links.map(
      (link) => {
        return (
          <li key={link.page_link._meta.uid}>
            <Link to={`/${link.page_link._meta.uid}`} className="nav-link ">
              {link.nav_link_label}
            </Link>
          </li>
        )
      }
    )
  }

  const handleNavToggle = () => {
    setNavOpen(!navOpen)
    console.log("handleNavToggle")
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
                data.prismic.allNavigations.edges[0].node
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
