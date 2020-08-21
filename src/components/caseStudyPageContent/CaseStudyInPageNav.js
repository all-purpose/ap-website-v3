import React from "react"

const CaseStudyInPageNav = ({ navAccessibleName, inPageNavItems }) => {
  const outputInPageNavLinks = (inPageNavItems) => {
    if (!inPageNavItems) {
      return false
    }

    return inPageNavItems.map((navItem, i) => {
      return (
        <li key={i} className="col-sm-3">
          <a
            className="apply-color-theme--font"
            href={`#${navItem.navigation_section_id}`}
          >
            {navItem.navigation_label} ->
          </a>
        </li>
      )
    })
  }

  return (
    <nav className="case-study-nav" aria-label={navAccessibleName}>
      <div className="container">
        <ul className="row py-8">{outputInPageNavLinks(inPageNavItems)}</ul>
      </div>
    </nav>
  )
}

export default CaseStudyInPageNav
