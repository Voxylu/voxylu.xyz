import * as React from 'react'

import { Layout } from '../components/layout'
import { graphql } from 'gatsby'
import { BlogPage } from '../components/blogPage'

export default ({ data }: any) => (
  <Layout title={`Blog - ${data.site.siteMetadata.title}`}>
    <BlogPage posts={data.allMarkdownRemark.edges} />
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 150)
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
            author
          }
        }
      }
    }
  }
`
