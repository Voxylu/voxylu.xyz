import * as React from 'react'

import styles from './navBar.module.scss'
import dropdown from '../../media/chevron-circle-down-solid.svg'
import { Arrow } from '../arrow'

interface NavBarProps {
  arrowDirection: string
  from: string
  to: string
}

interface NavBarState {
  active: boolean
}

export class NavBar extends React.Component<NavBarProps, NavBarState> {
  state = {
    active: false,
  }

  handleClick = () => {
    this.setState(({ active }) => ({ active: !active }))
  }

  render() {
    let burgerClasses = styles.menuBurger
    let listClasses = styles.menuList
    if (this.state.active) {
      burgerClasses = styles.activeMenuBurger
      listClasses = styles.activeMenuList
    }
    return (
      <>
        <nav className={styles.navbar}>
          <Arrow
            direction={this.props.arrowDirection}
            from={this.props.from}
            to={this.props.to}
            className={styles.arrowLeft}
          />
          <h1 className={styles.brand}>Projects</h1>
          <img
            src={dropdown}
            alt="menu-burger"
            className={burgerClasses}
            onClick={this.handleClick}
          />
        </nav>
        <ol className={listClasses}>
          <li>Comming soon ...</li>
        </ol>
      </>
    )
  }
}
