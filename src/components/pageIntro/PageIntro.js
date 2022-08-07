import React from "react"
import { RichText } from "prismic-reactjs"

const PageIntro = ({text}) => {

  return (
    <div className="content-rt">
      <RichText render={text} />
    </div>
  )
}

export default PageIntro
