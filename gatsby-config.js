const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Voxylu.xyz',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: path.resolve(__dirname, 'src/blog'),
      },
    },
  ],
}
