import * as React from 'react'
import { RouteComponentProps } from '@reach/router'

import { Layout } from '../components/layout/index'
import { WelcomePage } from '../components/welcomePage'

export default () => {
  return (
    <Layout title="Voxylu.xyz">
      <WelcomePage />
    </Layout>
  )
}
