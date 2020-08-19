import React from 'react';
import {RichText} from 'prismic-reactjs';

const PageHeaderHome = ({ title, description }) => {

  // If no title or description just pass empty array to RichText component
  title = title ? title : [];
  description = description ? description : [];

  return (
    <div className="container">
      <div className="page-header">
        <div className="display-02">
          <RichText render={title} />
        </div>
        <div className="body-short-02">
          <RichText render={description} />
        </div>
      </div>
    </div>
  );

}

export default PageHeaderHome;