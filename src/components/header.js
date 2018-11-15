import React from 'react'

import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Header = ({ siteTitle }) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "header.png" }) {
          childImageSharp {
            fluid(maxWidth: 320) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data =>
      <div
      style={{
        background: '#000',
        marginBottom: '1.45rem',
      }}
      >
        <div style={{ maxWidth: '320px', marginBottom: '1.45rem' }}>
          <Img fluid={data.placeholderImage.childImageSharp.fluid} alt={siteTitle}/>
        </div>
      </div>
    }
  />
)

export default Header
