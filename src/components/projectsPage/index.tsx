import * as React from 'react'

import styles from './index.module.scss'
import { NavBar } from '../navBar'

export const ProjectsPage = () => {
  let wrapperClasses = styles.wrapper
  // @ts-ignore
  if (window.fromLocation && window.fromLocation === 'index') {
    // @ts-ignore
    window.fromLocation = undefined
    wrapperClasses += ' ' + styles.fromRight
  }

  return (
    <div className={wrapperClasses}>
      <NavBar arrowDirection="left" from="projects" to="/" />
      <div className={styles.mainContainer}>
        <h1>Comming soon ...</h1>
        <p>I haven't finish yet ;)</p>
      </div>
    </div>
  )
}
