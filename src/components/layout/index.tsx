import * as React from 'react'
import { Helmet } from 'react-helmet'

import './index.scss'
import 'typeface-lato'

interface LayoutProps {
  title: string
  description: string
  keywords?: string[]
}
interface LayoutState {}

export class Layout extends React.Component<LayoutProps, LayoutState> {
  render() {
    let keywords = ['IT', 'Voxylu', 'Javascript', 'React']

    if (this.props.keywords) {
      keywords = keywords.concat(this.props.keywords)
    }

    return (
      <>
        <Helmet>
          <meta name="description" content={this.props.description} />
          <meta name="keywords" content={keywords.join(',')} />
          <meta name="author" content="Voxylu" />
          <meta property="og:title" content={this.props.title} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://voxylu.xyz" />
          <title>{this.props.title}</title>
        </Helmet>
        {this.props.children}
      </>
    )
  }
}
