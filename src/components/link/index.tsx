import * as React from 'react'

import { navigate } from 'gatsby'

interface LinkProps
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    > {
  to: string
}

export const Link = (prop: LinkProps) => {
  const { to, ...props } = prop
  return (
    <a
      href="#"
      {...props}
      onClick={(e) => {
        e.preventDefault()
        navigate(to)
      }}
    />
  )
}
