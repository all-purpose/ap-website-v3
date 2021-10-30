import React from "react"
import { StaticQuery, graphql } from "gatsby"
import {RichText} from 'prismic-reactjs'

const landAcknowledgementQuery = graphql`
  {
    allPrismicFooter {
      nodes {
        data {
          land_acknowledgment_statement {
            richText
          }
        }
      }
    }
  }
`

const LandAcknowledgement = () => {

  return (
    <StaticQuery
      query={`${landAcknowledgementQuery}`}
      render={(data) => {
        const statement = data.allPrismicFooter.nodes[0].data.land_acknowledgment_statement.richText;
        if (!statement) {
          return false;
        }
        return (
          <RichText render={statement} />
        )
      }}
    />
  )
}

export default LandAcknowledgement
