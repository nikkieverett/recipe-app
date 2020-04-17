/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-top-layout`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-material-ui`
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/recipes`,
        name: `markdown-pages`,
      },
    },
  ],
}
