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
  className,
  ...rest
}: {
  classes: Object,
  light?: boolean,
  bolder?: boolean,
  className?: string,
  children: any,
}) => {
  let fwClassName = classes.bold
  if (light) {
    fwClassName = classes.light
  }
  if (bolder) {
    fwClassName = classes.bolder
  }
  return (
    <span className={className ? `${fwClassName} ${className}` : fwClassName} {...rest}>
      {children}
    </span>
  )
}

const FontWeight = withStyles(styles)(FontWeightJSX)

export default FontWeight
