import * as React from 'react'
import { graphql } from 'gatsby'

import { Layout } from '../components/layout'
import { ProjectsPage } from '../components/projectsPage'

export default ({ data }: any) => (
  <Layout
    title={`Projects - ${data.site.siteMetadata.title}`}
    description="Voxylu's projects."
    keywords={['Projects', 'Project']}
  >
    <ProjectsPage />
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
