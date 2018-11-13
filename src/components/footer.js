import React from 'react'
import { Link } from 'gatsby'

const Footer = ({ siteTitle }) => (
  <div
    style={{
      background: '#191919',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <div style={{
        margin: 0,
        color: 'white',
      }}>
      <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          TOP
        </Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link
          to="/privacy"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          privacy
        </Link>
      </div>
    </div>
  </div>
)

export default Footer
