import * as React from 'react'
import Particles from 'react-particles-js'
import { settings } from './particles'
const logoDown = require('./arrow-down-solid.svg')
const logoLeft = require('./arrow-left-solid.svg')
const logoRight = require('./arrow-right-solid.svg')
const styles = require('./index.module.scss')
const icon = require('./icon.svg')

// console.log(styles)

const Arrow = ({ direction, name }: { direction: string; name: string }) => {
  let logo
  if (direction === 'down') {
    logo = logoDown
  } else if (direction === 'left') {
    logo = logoLeft
  } else if (direction === 'right') {
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
          style={direction === 'right' ? { marginLeft: '15px' } : {}}
        />
      </div>
    </div>
  )
}

export const WelcomePage = () => (
  <>
    <div className={styles.wrapper}>
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
    <Particles
      params={settings}
      style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}
    />
  </>
)
