// @flow

/* eslint-disable import/no-extraneous-dependencies */

import React from 'react'
// flow-disable-next-line
import { withStyles } from '@material-ui/core/styles'

const styles = {
  light: { fontWeight: 100 },
  bold: { fontWeight: 500 },
  bolder: { fontWeight: 900 },
}

const FontWeightJSX = ({
  classes,
  light,
  bolder,
  children,
  ...rest
}: {
  classes: Object,
  light?: boolean,
  bolder?: boolean,
  children: any,
}) => {
  let className = classes.bold
  if (light) {
    className = classes.light
  }
  if (bolder) {
    className = classes.bolder
  }
  return (
    <span {...{ className }} {...rest}>
      {children}
    </span>
  )
}

const FontWeight = withStyles(styles)(FontWeightJSX)

export default FontWeight
