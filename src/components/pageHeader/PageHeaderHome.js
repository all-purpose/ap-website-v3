import React from "react"
import { RichText } from "prismic-reactjs"

const PageHeaderHome = ({ title, description }) => {
  // If no title or description just pass empty array to RichText component
  title = title ? title : []
  description = description ? description : []

  return (
    <div className="page-header apply-color-theme">
      <div className="container">
        <div className="col-md-11">
          <div className="display-02">
            <RichText render={title} />
          </div>
          <div className="body-short-02 col-md-8">
            <RichText render={description} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageHeaderHome
