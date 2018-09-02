import * as React from 'react'

import { navigate } from 'gatsby'
import logoDown from '../../media/arrow-down-solid.svg'
import logoLeft from '../../media/arrow-left-solid.svg'
import logoRight from '../../media/arrow-right-solid.svg'
import logoUp from '../../media/arrow-up-solid.svg'

interface BaseProps {
  to: string
  from: string
  direction: string
  text?: string
  withStyle?: boolean
  stylesObject?: any
}

type ArrowProps = BaseProps &
  React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >

// Create the arrow conatiner with text and the svg
export const Arrow = ({
  direction,
  to,
  from,
  withStyle,
  stylesObject,
  text,
  ...props
}: ArrowProps) => {
  let style: React.CSSProperties = { cursor: 'pointer ' }
  let logo
  if (direction === 'down') {
    logo = logoDown
  } else if (direction === 'left') {
    logo = logoLeft
    if (withStyle) {
      style = {
        ...style,
        position: 'absolute',
        top: 'calc(50vh - 25px)',
        left: 'calc(10px)',
      }
    }
  } else if (direction === 'right') {
    logo = logoRight
    if (withStyle) {
      style = {
        ...style,
        position: 'absolute',
        top: 'calc(50vh - 25px)',
        left: 'calc(100vw - 60px)',
      }
    }
  } else if (direction === 'up') {
    logo = logoUp
  }
  if (withStyle) {
    return (
      <div className={stylesObject.arrowContainer}>
        <div>
          <p className={stylesObject.arrowTitle}>{text}</p>

          <img
            {...props}
            src={logo}
            alt={`arrow-${direction}`}
            className={stylesObject.arrow}
            style={style}
            onClick={() => navigate(to)}
          />
        </div>
      </div>
    )
  } else {
    return (
      <img
        {...props}
        src={logo}
        alt={`arrow-${direction}`}
        style={style}
        onClick={() => navigate(to)}
      />
    )
  }
}
