// @flow

import React from 'react'

import withStyles from '@material-ui/core/styles/withStyles'

import atomicStyles, { transformRest } from './atomicStyles'

const El = ({ children, tag, component, ...rest }: Object) =>
  React.createElement(component ?? tag, transformRest(rest), children)

export default withStyles(atomicStyles)(El)
