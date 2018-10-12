// @flow

/* eslint-disable import/no-extraneous-dependencies */

import React from 'react'

// flow-disable-next-line
import withStyles from '@material-ui/core/styles/withStyles'

import atomicStyles, { transformRest } from './atomic-styles'

const El = ({ children, tag, ...rest }: Object) =>
  React.createElement(tag, transformRest(rest), children)

export default withStyles(atomicStyles)(El)
