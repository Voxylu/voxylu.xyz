import * as React from 'react'

import styles from './index.module.scss'
import arrowLeft from '../../media/arrow-left-solid.svg'
import { navigate } from 'gatsby'

export const ProjectsPage = () => {
  let wrapperClasses = styles.wrapper
  // @ts-ignore
  if (window.fromLocation && window.fromLocation === 'index') {
    // @ts-ignore
    window.fromLocation = undefined
    wrapperClasses += ' ' + styles.fromRight
  }

  return (
    <>
      <div className={wrapperClasses}>
        <h1>Projects</h1>
      </div>
      <img
        src={arrowLeft}
        className={styles.arrowLeft}
        alt="arrow-left"
        style={{ cursor: 'pointer' }}
        onClick={() => {
          // @ts-ignore
          window.fromLocation = 'projects'
          navigate('/')
        }}
      />
    </>
  )
}
