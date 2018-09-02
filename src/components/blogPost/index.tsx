import * as React from 'react'

import { graphql } from 'gatsby'

import { Layout } from '../layout'
import { BlogBar } from '../blogBar'

import styles from './index.module.scss'

import 'wysiwyg.css'

export default ({ data }: any) => {
  const post = data.markdownRemark
  return (
    <Layout
      title={`${post.frontmatter.title} - ${data.site.siteMetadata.title}`}
    >
      <BlogBar
        breadcrumb={['Blog', post.frontmatter.title.slice(0, 5) + '...']}
      >
        <div className={styles.post}>
          <div className="wysiwyg">
            <h1>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </div>
      </BlogBar>
    </Layout>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
