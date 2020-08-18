import React from "react"
import { RichText } from "prismic-reactjs"
import styled from "styled-components"
import "./PageHeader.scss"

const BgWrapper = styled.div`
  background-image: url(${(props) => props.backgroundImage});
`

const PageHeader = ({ pageType, title, description, heroImage }) => {
  title = title ? title : []
  description = description ? description : []

  const outputHeader = (heroImage, children) => {
    if (heroImage) {
      return (
        <BgWrapper backgroundImage={heroImage.url} className="page-header">
          {children}
        </BgWrapper>
      )
    } else {
      return <div className="page-header">{children}</div>
    }
  }

  const outputTitle = (pageType, title) => {
    if (pageType === "case_study") {
      return <h1 className="body-short-02">{title}</h1>
    } else {
      return <RichText render={title} />
    }
  }

  return outputHeader(
    heroImage,
    <div className="container">
      {outputTitle(pageType, title)}
      <RichText render={description} />
    </div>
  )
}

export default PageHeader
