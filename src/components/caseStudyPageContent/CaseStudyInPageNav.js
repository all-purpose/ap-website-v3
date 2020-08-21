import React from 'react';

const CaseStudyInPageNav = ({navAccessibleName, inPageNavItems}) => {

  const outputInPageNavLinks = inPageNavItems => {

    if (!inPageNavItems) {
      return false;
    }

    return inPageNavItems.map((navItem, i) => {
        return (
          <li key={i}>
            <a href={`#${navItem.navigation_section_id}`}>
              {navItem.navigation_label}
            </a>
          </li>
        )
      }
    )
  }

  return (
    <nav aria-label={navAccessibleName}>
      <div className="container">
        <ul>
          {outputInPageNavLinks(inPageNavItems)}
        </ul>
      </div>
    </nav>
  )

}

export default CaseStudyInPageNav;