import * as React from 'react'
import { graphql } from 'gatsby'

import { Layout } from '../components/layout'
import { AboutPage } from '../components/aboutPage'

export default ({ data }: any) => (
  <Layout title={`About - ${data.site.siteMetadata.title}`}>
    <AboutPage />
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
