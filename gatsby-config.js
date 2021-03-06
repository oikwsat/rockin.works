module.exports = {
  siteMetadata: {
    siteUrl: 'https://rockin.work',
    title: "rockin' works",
    description: "A website by Satoshi Oikawa. a product guy in Yokohama City. about product, quality and management. I love music festivals🎶 and beers🍺",
    keywords: "rockin' works,oikwsat,oikawa,yokohama,product,portfolio",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#191919',
        theme_color: '#191919',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-typography',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-60584926-1",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-source-medium`,
      options: {
        username: `@oikawa`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
