const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Voxylu.xyz',
    siteUrl: 'https://voxylu.xyz',
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
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Voxylu.xyz',
        short_name: 'Voxylu.xyz',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#fff',
        display: 'standalone',
        icon: 'src/media/icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-sw',
      options: {
        swPath: 'src/sw.js',
      },
    },
    // 'gatsby-plugin-offline',
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-sitemap',
  ],
}
