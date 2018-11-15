import React from 'react'

import { Link, StaticQuery, graphql } from 'gatsby'
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
          <Link to="/"><Img fluid={data.placeholderImage.childImageSharp.fluid} alt={siteTitle}/></Link>
        </div>
      </div>
    }
  />
)

export default Header
