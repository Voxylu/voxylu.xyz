import * as React from 'react'
import './index.scss'
import 'typeface-lato'

interface LayoutProps {}
interface LayoutState {}

export class Layout extends React.Component<LayoutProps, LayoutState> {
  render() {
    return this.props.children
  }
}
