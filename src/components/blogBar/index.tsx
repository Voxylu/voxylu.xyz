import * as React from 'react'

import { Link } from '../link'
import styles from './blogBar.module.scss'

interface BlogBarProps {
  breadcrumb: string[]
}
interface BlogBarState {}

export class BlogBar extends React.Component<BlogBarProps, BlogBarState> {
  render() {
    return (
      <div className={styles.wrapper}>
        <nav className={styles.navbar}>
          <Link to="/blog" className={styles.brand}>
            Voxulu's Blog
          </Link>
          <Link to="/about" className={styles.about}>
            About Me
          </Link>
        </nav>
        <nav className={styles.breadcrumb}>
          <Link to="/" className={styles.breadcrumbItem}>
            Voxylu.xyz
          </Link>
          {this.props.breadcrumb.map((name) => (
            <Link
              key={name}
              to={`/${name}/`.toLowerCase()}
              className={styles.breadcrumbItem}
            >
              {name}
            </Link>
          ))}
        </nav>
        {this.props.children}
      </div>
    )
  }
}
