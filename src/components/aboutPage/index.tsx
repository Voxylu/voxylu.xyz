import * as React from 'react'
import { navigate } from 'gatsby'

import { Redirect } from '@reach/router'

import icon from '../../media/icon.svg'
import logoRight from '../../media/arrow-right-solid.svg'
import styles from './index.module.scss'

export const AboutPage = () => {
  let wrapperClasses = styles.wrapper
  // @ts-ignore
  if (window.fromLocation && window.fromLocation === 'index') {
    // @ts-ignore
    window.fromLocation = undefined
    wrapperClasses += ' ' + styles.fromLeft
  }

  return (
    <>
      <div className={wrapperClasses}>
        <img src={icon} alt="icon" className={styles.icon} />
        <h1 className={styles.title}>Voxylu</h1>
        <div className={styles.decription}>
          <p className={styles.question}>Who am I ?</p>
          <br />
          <p>I'm a french guy who like web development.</p>
          <br />
          <span className={styles.question}>Things I like ?</span>
          <br />
          <p>
            <a
              href="https://nodejs.org/"
              className={styles.link}
              target="_blank"
            >
              Nodejs
            </a>
            ,{' '}
            <a
              href="https://reactjs.org/"
              className={styles.link}
              target="_blank"
            >
              React
            </a>
            ,{' '}
            <a
              href="https://graphql.org/"
              className={styles.link}
              target="_blank"
            >
              Graphql
            </a>{' '}
            and discovering / experimenting new things.
          </p>
        </div>
      </div>
      <img
        src={logoRight}
        alt="arrow-right"
        className={styles.arrowRight}
        style={{ cursor: 'pointer' }}
        onClick={() => {
          // @ts-ignore
          window.fromLocation = 'about'
          navigate('/')
        }}
      />
    </>
  )
}
