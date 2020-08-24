import React from "react"
import { Link } from "gatsby"

const CaseStudyInPageNav = ({ navAccessibleName, inPageNavItems }) => {
  const outputInPageNavLinks = (inPageNavItems) => {
    if (!inPageNavItems) {
      return false
    }

    return inPageNavItems.map((navItem, i) => {
      return (
        <li key={i}>
          <Link to={`#${navItem.navigation_section_id}`}>
            {navItem.navigation_label}
          </Link>
        </li>
      )
    })
  }

  return (
    <nav aria-label={navAccessibleName}>
      <div className="container">
        <ul>{outputInPageNavLinks(inPageNavItems)}</ul>
      </div>
    </nav>
  )
}

export default CaseStudyInPageNav
