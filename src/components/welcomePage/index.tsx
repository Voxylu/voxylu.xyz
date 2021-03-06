import * as React from 'react'

import Particles from 'react-particles-js'
import { settings } from './particles'

import icon from '../../media/icon.svg'
import styles from './welcomePage.module.scss'
import { Arrow } from '../arrow'

// The main component
export const WelcomePage = () => (
  <>
    <div className={styles.wrapper}>
      <div className={styles.topContainer}>
        <div className={styles.mainContainer}>
          <div className={styles.leftContainer}>
            <Arrow
              direction="left"
              from="index"
              to="/about"
              stylesObject={styles}
              withStyle
              text="About"
            />
          </div>
          <div className={styles.centerContainer}>
            <img src={icon} alt="Icon" />
            <h1>Voxyulu</h1>
          </div>
          <div className={styles.rightContainer}>
            <Arrow
              direction="right"
              from="index"
              to="/projects"
              text="Projects"
              stylesObject={styles}
              withStyle
            />
          </div>
        </div>
      </div>
      <div className={styles.bottomContainer}>
        <Arrow
          direction="down"
          from="index"
          to="/blog"
          text="Blog"
          stylesObject={styles}
          withStyle
        />
      </div>
    </div>
    {/* This is for particle background */}
    <Particles
      params={settings}
      style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}
    />
  </>
)
