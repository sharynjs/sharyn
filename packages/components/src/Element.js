// @flow

/* eslint-disable import/no-extraneous-dependencies */

import React from 'react'
// flow-disable-next-line
import withStyles from '@material-ui/core/styles/withStyles'

const ElementJSX = ({
  classes: css,
  children,
  underline,
  noDecoration,
  italic,
  thin,
  normal,
  bold,
  bolder,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  p,
  div,
  li,
  className: userClassName = '',
  ...rest
}: {
  classes: Object,
  children: any,
  underline?: boolean,
  noDecoration?: boolean,
  italic?: boolean,
  thin?: boolean,
  normal?: boolean,
  bold?: boolean,
  bolder?: boolean,
  h1?: boolean,
  h2?: boolean,
  h3?: boolean,
  h4?: boolean,
  h5?: boolean,
  h6?: boolean,
  a?: boolean,
  p?: boolean,
  div?: boolean,
  li?: boolean,
  className?: string,
}) => {
  const classNames = [userClassName]

  underline && classNames.unshift(css.underline)
  noDecoration && classNames.unshift(css.noDecoration)

  italic && classNames.unshift(css.italic)

  thin && classNames.unshift(css.thin)
  normal && classNames.unshift(css.normal)
  bold && classNames.unshift(css.bold)
  bolder && classNames.unshift(css.bolder)

  let el = 'span'

  if (h1) {
    el = 'h1'
  } else if (h2) {
    el = 'h2'
  } else if (h3) {
    el = 'h3'
  } else if (h4) {
    el = 'h4'
  } else if (h5) {
    el = 'h5'
  } else if (h6) {
    el = 'h6'
  } else if (a) {
    el = 'a'
  } else if (p) {
    el = 'p'
  } else if (div) {
    el = 'div'
  } else if (li) {
    el = 'li'
  } else if (bold || bolder) {
    el = 'strong'
  } else if (italic) {
    el = 'em'
  }

  const joinedClassNames = classNames.join(' ')

  return React.createElement(
    el,
    { ...(joinedClassNames !== '' ? { className: joinedClassNames } : {}), ...rest },
    children,
  )
}

const Element = withStyles({
  noDecoration: { textDecoration: 'none' },
  underline: { textDecoration: 'underline' },
  italic: { fontStyle: 'italic' },
  thin: { fontWeight: 'lighter' },
  bold: { fontWeight: 500 },
  bolder: { fontWeight: 'bolder' },
  normal: { fontWeight: 'normal' },
})(ElementJSX)

export default Element
