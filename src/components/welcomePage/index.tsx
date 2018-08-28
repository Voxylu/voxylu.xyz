import * as React from 'react'

import { navigate } from 'gatsby'
import { WindowLocation } from '@reach/router'
import Particles from 'react-particles-js'
import { settings } from './particles'

// I use require(...) because typescript wont throw errors
import logoDown from '../../media/arrow-down-solid.svg'
import logoLeft from '../../media/arrow-left-solid.svg'
import logoRight from '../../media/arrow-right-solid.svg'
import icon from '../../media/icon.svg'
import styles from './index.module.scss'

// Create the arrow conatiner with text and the svg
const Arrow = ({ direction, name }: { direction: string; name: string }) => {
  let path = `/${name.toLowerCase()}`
  let style: React.CSSProperties = { cursor: 'pointer ' }
  let logo
  if (direction === 'down') {
    logo = logoDown
  } else if (direction === 'left') {
    logo = logoLeft
    style = {
      ...style,
      position: 'absolute',
      top: 'calc(50vh - 25px)',
      left: 'calc(10px)',
    }
  } else if (direction === 'right') {
    style = {
      ...style,
      position: 'absolute',
      top: 'calc(50vh - 25px)',
      left: 'calc(100vw - 60px)',
    }
    logo = logoRight
  }
  return (
    <div className={styles.arrowContainer}>
      <div>
        <p className={styles.arrowTitle}>{name}</p>
        {/* <br /> */}
        <img
          src={logo}
          alt={`arrow-${direction}`}
          className={styles.arrow}
          style={style}
          onClick={() => {
            // @ts-ignore
            window.fromLocation = 'index'
            navigate(path)
          }}
        />
      </div>
    </div>
  )
}

// The main component
export const WelcomePage = () => {
  let wrapperClasses = styles.wrapper
  // @ts-ignore
  if (window.fromLocation && window.fromLocation === 'about') {
    // @ts-ignore
    window.fromLocation = undefined
    wrapperClasses += ' ' + styles.fromRight
  }
  // @ts-ignore
  if (window.fromLocation && window.fromLocation === 'projects') {
    // @ts-ignore
    window.fromLocation = undefined
    wrapperClasses += ' ' + styles.fromLeft
  }

  return (
    <>
      <div className={wrapperClasses}>
        <div className={styles.topContainer}>
          <div className={styles.mainContainer}>
            <div className={styles.leftContainer}>
              <Arrow direction="left" name="About" />
            </div>
            <div className={styles.centerContainer}>
              <img src={icon} alt="Icon" />
              <h1>Voxyulu</h1>
            </div>
            <div className={styles.rightContainer}>
              <Arrow direction="right" name="Projects" />
            </div>
          </div>
        </div>
        <div className={styles.bottomContainer}>
          <Arrow direction="down" name="Blog" />
        </div>
      </div>
      {/* This is for particle background */}
      <Particles
        params={settings}
        style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}
      />
    </>
  )
}
