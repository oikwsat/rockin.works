import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            siteUrl
            title
            description
            keywords
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description',    content: data.site.siteMetadata.description },
            { name: 'keywords',       content: data.site.siteMetadata.keywords },
            { name: 'og:type',        content: 'profile' },
            { name: 'og:url',         content: data.site.siteMetadata.siteUrl },
            { name: 'og:title',       content: data.site.siteMetadata.title },
            { name: 'og:site_name',   content: data.site.siteMetadata.title },
            { name: 'og:description', content: data.site.siteMetadata.description },
            { name: 'twitter:card',   content: 'summary' },
            { name: 'google-site-verification', content: 'NLB8uiWOBiIzhcUdpTY50FXjF6n9aDjPNFwaOiUwUvk' },
          ]}
        >
          <html lang="ja" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
