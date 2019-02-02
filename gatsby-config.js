module.exports = {
  siteMetadata: {
    title: `Soft`,
    description: `Soft is a software publisher working to develop novel utilities.`,
    author: `@soft__apps`
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/soft-icon.png` // This path is relative to the root of the site.
      }
    }
  ]
};
