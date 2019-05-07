// @flow

import forOwn from 'lodash/forOwn'

const atomicStyles = ({ spacing }: Object) => ({
  light: { fontWeight: 'lighter' },
  fontWeightNormal: { fontWeight: 'normal' },
  bold: { fontWeight: 500 },
  bolder: { fontWeight: 'bolder' },
  italic: { fontStyle: 'italic' },
  noDecoration: { textDecoration: 'none' },
  underline: { textDecoration: 'underline' },
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
  m1: { margin: spacing() },
  mv1: { marginTop: spacing(), marginBottom: spacing() },
  mh1: { marginRight: spacing(), marginLeft: spacing() },
  mt1: { marginTop: spacing() },
  mr1: { marginRight: spacing() },
  mb1: { marginBottom: spacing() },
  ml1: { marginLeft: spacing() },
  p1: { padding: spacing() },
  pv1: { paddingTop: spacing(), paddingBottom: spacing() },
  ph1: { paddingRight: spacing(), paddingLeft: spacing() },
  pt1: { paddingTop: spacing() },
  pr1: { paddingRight: spacing() },
  pb1: { paddingBottom: spacing() },
  pl1: { paddingLeft: spacing() },
  m2: { margin: spacing(2) },
  mv2: { marginTop: spacing(2), marginBottom: spacing(2) },
  mh2: { marginRight: spacing(2), marginLeft: spacing(2) },
  mt2: { marginTop: spacing(2) },
  mr2: { marginRight: spacing(2) },
  mb2: { marginBottom: spacing(2) },
  ml2: { marginLeft: spacing(2) },
  p2: { padding: spacing(2) },
  pv2: { paddingTop: spacing(2), paddingBottom: spacing(2) },
  ph2: { paddingRight: spacing(2), paddingLeft: spacing(2) },
  pt2: { paddingTop: spacing(2) },
  pr2: { paddingRight: spacing(2) },
  pb2: { paddingBottom: spacing(2) },
  pl2: { paddingLeft: spacing(2) },
  m3: { margin: spacing(3) },
  mv3: { marginTop: spacing(3), marginBottom: spacing(3) },
  mh3: { marginRight: spacing(3), marginLeft: spacing(3) },
  mt3: { marginTop: spacing(3) },
  mr3: { marginRight: spacing(3) },
  mb3: { marginBottom: spacing(3) },
  ml3: { marginLeft: spacing(3) },
  p3: { padding: spacing(3) },
  pv3: { paddingTop: spacing(3), paddingBottom: spacing(3) },
  ph3: { paddingRight: spacing(3), paddingLeft: spacing(3) },
  pt3: { paddingTop: spacing(3) },
  pr3: { paddingRight: spacing(3) },
  pb3: { paddingBottom: spacing(3) },
  pl3: { paddingLeft: spacing(3) },
})

export const atomicProps: string[] = Object.keys(atomicStyles({ spacing: () => 0 }))

export const transformRest = (props: Object) => {
  const { className: userClassName, classes, ...newProps } = { ...props }
  let newClassName = ''
  forOwn(newProps, (propValue, propName) => {
    const foundProp = atomicProps.find(x => x === propName)
    if (foundProp) {
      newClassName = newClassName.concat(` ${classes[propName]}`)
      delete newProps[propName]
    }
  })
  if (userClassName) {
    newClassName = newClassName.concat(` ${userClassName}`)
  }
  return { className: newClassName, ...newProps }
}

export default atomicStyles
