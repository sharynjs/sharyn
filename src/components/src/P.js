// @flow

/* eslint-disable import/no-extraneous-dependencies */

import React from 'react'

// flow-disable-next-line
import withStyles from '@material-ui/core/styles/withStyles'

import atomicStyles, { transformRest } from './atomic-styles'

const P = ({ children, ...rest }: Object) => <p {...transformRest(rest)}>{children}</p>

export default withStyles(atomicStyles)(P)
