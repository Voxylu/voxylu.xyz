import * as React from 'react'

import styles from './projectsPage.module.scss'
import { NavBar } from '../navBar'

export const ProjectsPage = () => (
  <div className={styles.wrapper}>
    <NavBar arrowDirection="left" from="projects" to="/" />
    <div className={styles.mainContainer}>
      <h1>Comming soon ...</h1>
      <p>I haven't finish yet ;)</p>
    </div>
  </div>
)
