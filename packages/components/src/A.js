// @flow

/* eslint-disable import/no-extraneous-dependencies */

import React from 'react'

// flow-disable-next-line
import withStyles from '@material-ui/core/styles/withStyles'

import atomicStyles, { transformRest } from './atomic-styles'

const A = ({ children, ...rest }: Object) => <a {...transformRest(rest)}>{children}</a>

export default withStyles(atomicStyles)(A)
