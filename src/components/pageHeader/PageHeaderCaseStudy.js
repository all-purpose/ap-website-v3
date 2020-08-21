import React from "react"
import { RichText } from "prismic-reactjs"
import "./PageHeader.scss"

const PageHeaderCaseStudy = ({ title, description }) => {

  title = title ? title : []
  description = description ? description : []

  return (
    <div className="page-header apply-color-theme">
      <div className="container">
        <h1 className="page-title body-short-02">{title}</h1>
        <div className="display-02">
          <RichText render={description} />
        </div> 
      </div>
    </div>    
  )
}

export default PageHeaderCaseStudy;
