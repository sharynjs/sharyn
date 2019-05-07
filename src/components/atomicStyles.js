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
})

export const atomicProps: string[] = Object.keys(atomicStyles({ spacing: { unit: 0 } }))

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
