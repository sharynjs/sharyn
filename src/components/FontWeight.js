// @flow

import React from 'react'

import withStyles from '@material-ui/core/styles/withStyles'

const styles = {
  light: { fontWeight: 100 },
  bold: { fontWeight: 500 },
  bolder: { fontWeight: 900 },
  normal: { fontWeight: 'normal' },
}

const FontWeightJSX = ({
  classes,
  light,
  bolder,
  normal,
  children,
  className,
  ...rest
}: {
  classes: Object,
  light?: boolean,
  bolder?: boolean,
  normal?: boolean,
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
  if (normal) {
    fwClassName = classes.normal
  }
  return (
    <span className={className ? `${fwClassName} ${className}` : fwClassName} {...rest}>
      {children}
    </span>
  )
}

const FontWeight = withStyles(styles)(FontWeightJSX)

export default FontWeight
