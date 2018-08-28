import * as React from 'react'
import { Helmet } from 'react-helmet'

import './index.scss'
import 'typeface-lato'

interface LayoutProps {
  title: string
}
interface LayoutState {}

export class Layout extends React.Component<LayoutProps, LayoutState> {
  render() {
    return (
      <>
        <Helmet>
          <title>{this.props.title}</title>
        </Helmet>
        {this.props.children}
      </>
    )
  }
}
