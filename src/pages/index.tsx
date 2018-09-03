import * as React from 'react'
import { graphql } from 'gatsby'

import { Layout } from '../components/layout/index'
import { WelcomePage } from '../components/welcomePage'

export default ({ data }: any) => {
  return (
    <Layout
      title={data.site.siteMetadata.title}
      description="The personnal website of Voxylu.xyz."
    >
      <WelcomePage />
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
