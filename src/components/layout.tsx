import * as React from 'react'

interface LayoutProps {}
interface LayoutState {}

export class Layout extends React.Component<LayoutProps, LayoutState> {
  render() {
    return this.props.children
  }
}
