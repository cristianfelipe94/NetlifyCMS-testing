module.exports = {
  siteMetadata: {
    title: `Átana`,
    description: `Crea y distribuye comunicados de prensa de una manera más fácil, rapida y sencilla.`,
    author: `@atana`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/pages/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/uploads`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `landing`,
        path: `${__dirname}/src/pages/landing`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `atana`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#444444`,
        theme_color: `#444444`,
        display: `minimal-ui`,
        icon: `src/images/atana-logo.png`,
      },
    },
  ],
}
