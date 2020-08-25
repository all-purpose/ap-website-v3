import React from "react"
import { RichText } from "prismic-reactjs"

const PageHeaderGeneral = ({ title, description, headingClass }) => {
  // If no title or description just pass empty array to RichText component
  title = title ? title : []
  description = description ? description : []

  return (
    <div className="page-header apply-color-theme">
      <div className="container">
        <div className="row">
          <div
            className={`${headingClass ? headingClass : "display-02"} col-10`}
          >
            <RichText render={title} />
          </div>
          <div className="body-short-02 col-md-6">
            <RichText render={description} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageHeaderGeneral
