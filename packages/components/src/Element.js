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
  el: userEl,
  m0,
  mv0,
  mh0,
  mt0,
  mr0,
  mb0,
  ml0,
  p0,
  pv0,
  ph0,
  pt0,
  pr0,
  pb0,
  pl0,
  m1,
  mv1,
  mh1,
  mt1,
  mr1,
  mb1,
  ml1,
  p1,
  pv1,
  ph1,
  pt1,
  pr1,
  pb1,
  pl1,
  m2,
  mv2,
  mh2,
  mt2,
  mr2,
  mb2,
  ml2,
  p2,
  pv2,
  ph2,
  pt2,
  pr2,
  pb2,
  pl2,
  m3,
  mv3,
  mh3,
  mt3,
  mr3,
  mb3,
  ml3,
  p3,
  pv3,
  ph3,
  pt3,
  pr3,
  pb3,
  pl3,
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
  el?: string,
  m0?: boolean,
  mv0?: boolean,
  mh0?: boolean,
  mt0?: boolean,
  mr0?: boolean,
  mb0?: boolean,
  ml0?: boolean,
  p0?: boolean,
  pv0?: boolean,
  ph0?: boolean,
  pt0?: boolean,
  pr0?: boolean,
  pb0?: boolean,
  pl0?: boolean,
  m1?: boolean,
  mv1?: boolean,
  mh1?: boolean,
  mt1?: boolean,
  mr1?: boolean,
  mb1?: boolean,
  ml1?: boolean,
  p1?: boolean,
  pv1?: boolean,
  ph1?: boolean,
  pt1?: boolean,
  pr1?: boolean,
  pb1?: boolean,
  pl1?: boolean,
  m2?: boolean,
  mv2?: boolean,
  mh2?: boolean,
  mt2?: boolean,
  mr2?: boolean,
  mb2?: boolean,
  ml2?: boolean,
  p2?: boolean,
  pv2?: boolean,
  ph2?: boolean,
  pt2?: boolean,
  pr2?: boolean,
  pb2?: boolean,
  pl2?: boolean,
  m3?: boolean,
  mv3?: boolean,
  mh3?: boolean,
  mt3?: boolean,
  mr3?: boolean,
  mb3?: boolean,
  ml3?: boolean,
  p3?: boolean,
  pv3?: boolean,
  ph3?: boolean,
  pt3?: boolean,
  pr3?: boolean,
  pb3?: boolean,
  pl3?: boolean,
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

  m0 && classNames.unshift(css.m0)
  mv0 && classNames.unshift(css.mv0)
  mh0 && classNames.unshift(css.mh0)
  mt0 && classNames.unshift(css.mt0)
  mr0 && classNames.unshift(css.mr0)
  mb0 && classNames.unshift(css.mb0)
  ml0 && classNames.unshift(css.ml0)

  p0 && classNames.unshift(css.p0)
  pv0 && classNames.unshift(css.pv0)
  ph0 && classNames.unshift(css.ph0)
  pt0 && classNames.unshift(css.pt0)
  pr0 && classNames.unshift(css.pr0)
  pb0 && classNames.unshift(css.pb0)
  pl0 && classNames.unshift(css.pl0)

  m1 && classNames.unshift(css.m1)
  mv1 && classNames.unshift(css.mv1)
  mh1 && classNames.unshift(css.mh1)
  mt1 && classNames.unshift(css.mt1)
  mr1 && classNames.unshift(css.mr1)
  mb1 && classNames.unshift(css.mb1)
  ml1 && classNames.unshift(css.ml1)

  p1 && classNames.unshift(css.p1)
  pv1 && classNames.unshift(css.pv1)
  ph1 && classNames.unshift(css.ph1)
  pt1 && classNames.unshift(css.pt1)
  pr1 && classNames.unshift(css.pr1)
  pb1 && classNames.unshift(css.pb1)
  pl1 && classNames.unshift(css.pl1)

  m2 && classNames.unshift(css.m2)
  mv2 && classNames.unshift(css.mv2)
  mh2 && classNames.unshift(css.mh2)
  mt2 && classNames.unshift(css.mt2)
  mr2 && classNames.unshift(css.mr2)
  mb2 && classNames.unshift(css.mb2)
  ml2 && classNames.unshift(css.ml2)

  p2 && classNames.unshift(css.p2)
  pv2 && classNames.unshift(css.pv2)
  ph2 && classNames.unshift(css.ph2)
  pt2 && classNames.unshift(css.pt2)
  pr2 && classNames.unshift(css.pr2)
  pb2 && classNames.unshift(css.pb2)
  pl2 && classNames.unshift(css.pl2)

  m3 && classNames.unshift(css.m3)
  mv3 && classNames.unshift(css.mv3)
  mh3 && classNames.unshift(css.mh3)
  mt3 && classNames.unshift(css.mt3)
  mr3 && classNames.unshift(css.mr3)
  mb3 && classNames.unshift(css.mb3)
  ml3 && classNames.unshift(css.ml3)

  p3 && classNames.unshift(css.p3)
  pv3 && classNames.unshift(css.pv3)
  ph3 && classNames.unshift(css.ph3)
  pt3 && classNames.unshift(css.pt3)
  pr3 && classNames.unshift(css.pr3)
  pb3 && classNames.unshift(css.pb3)
  pl3 && classNames.unshift(css.pl3)

  let el = userEl ?? 'span'

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

const Element = withStyles(({ spacing }) => ({
  noDecoration: { textDecoration: 'none' },
  underline: { textDecoration: 'underline' },
  italic: { fontStyle: 'italic' },
  thin: { fontWeight: 'lighter' },
  bold: { fontWeight: 500 },
  bolder: { fontWeight: 'bolder' },
  normal: { fontWeight: 'normal' },
  m0: { margin: 0 },
  mv0: { marginTop: 0, marginBottom: 0 },
  mh0: { marginRight: 0, marginLeft: 0 },
  mt0: { marginTop: 0 },
  mr0: { marginRight: 0 },
  mb0: { marginBottom: 0 },
  ml0: { marginLeft: 0 },
  p0: { padding: 0 },
  pv0: { paddingTop: 0, paddingBottom: 0 },
  ph0: { paddingRight: 0, paddingLeft: 0 },
  pt0: { paddingTop: 0 },
  pr0: { paddingRight: 0 },
  pb0: { paddingBottom: 0 },
  pl0: { paddingLeft: 0 },
  m1: { margin: spacing.unit },
  mv1: { marginTop: spacing.unit, marginBottom: spacing.unit },
  mh1: { marginRight: spacing.unit, marginLeft: spacing.unit },
  mt1: { marginTop: spacing.unit },
  mr1: { marginRight: spacing.unit },
  mb1: { marginBottom: spacing.unit },
  ml1: { marginLeft: spacing.unit },
  p1: { padding: spacing.unit },
  pv1: { paddingTop: spacing.unit, paddingBottom: spacing.unit },
  ph1: { paddingRight: spacing.unit, paddingLeft: spacing.unit },
  pt1: { paddingTop: spacing.unit },
  pr1: { paddingRight: spacing.unit },
  pb1: { paddingBottom: spacing.unit },
  pl1: { paddingLeft: spacing.unit },
  m2: { margin: spacing.unit * 2 },
  mv2: { marginTop: spacing.unit * 2, marginBottom: spacing.unit * 2 },
  mh2: { marginRight: spacing.unit * 2, marginLeft: spacing.unit * 2 },
  mt2: { marginTop: spacing.unit * 2 },
  mr2: { marginRight: spacing.unit * 2 },
  mb2: { marginBottom: spacing.unit * 2 },
  ml2: { marginLeft: spacing.unit * 2 },
  p2: { padding: spacing.unit * 2 },
  pv2: { paddingTop: spacing.unit * 2, paddingBottom: spacing.unit * 2 },
  ph2: { paddingRight: spacing.unit * 2, paddingLeft: spacing.unit * 2 },
  pt2: { paddingTop: spacing.unit * 2 },
  pr2: { paddingRight: spacing.unit * 2 },
  pb2: { paddingBottom: spacing.unit * 2 },
  pl2: { paddingLeft: spacing.unit * 2 },
  m3: { margin: spacing.unit * 3 },
  mv3: { marginTop: spacing.unit * 3, marginBottom: spacing.unit * 3 },
  mh3: { marginRight: spacing.unit * 3, marginLeft: spacing.unit * 3 },
  mt3: { marginTop: spacing.unit * 3 },
  mr3: { marginRight: spacing.unit * 3 },
  mb3: { marginBottom: spacing.unit * 3 },
  ml3: { marginLeft: spacing.unit * 3 },
  p3: { padding: spacing.unit * 3 },
  pv3: { paddingTop: spacing.unit * 3, paddingBottom: spacing.unit * 3 },
  ph3: { paddingRight: spacing.unit * 3, paddingLeft: spacing.unit * 3 },
  pt3: { paddingTop: spacing.unit * 3 },
  pr3: { paddingRight: spacing.unit * 3 },
  pb3: { paddingBottom: spacing.unit * 3 },
  pl3: { paddingLeft: spacing.unit * 3 },
}))(ElementJSX)

export default Element
