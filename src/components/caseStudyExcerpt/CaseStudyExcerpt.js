import React from 'react';
import {Link} from 'gatsby';

const CaseStudyExcerpt = ({link, image, projectName, roles}) => {

  return (
    <div className="case-study-excerpt">
      <Link to={link}>
        <div className="case-study-excerpt-image">
          <img src={image.url} alt={image.alt} />
        </div>
        <h2 className="case-study-excerpt-project">{projectName}</h2>
        <div className="case-study-excerpt-roles">
          {roles}
        </div>
      </Link>
    </div>
  )

}

export default CaseStudyExcerpt;