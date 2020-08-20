import React from "react"
import { StaticQuery, graphql } from "gatsby"
import {RichText} from 'prismic-reactjs'

const landAcknowledgementQuery = graphql`
  {
    prismic {
      allFooters {
        edges {
          node {
            land_acknowledgment_statement
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
        const statement = data.prismic.allFooters.edges[0].node.land_acknowledgment_statement;
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
