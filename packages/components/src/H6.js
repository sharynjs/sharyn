// @flow

/* eslint-disable import/no-extraneous-dependencies */

import React from 'react'

// flow-disable-next-line
import withStyles from '@material-ui/core/styles/withStyles'

import atomicStyles, { transformRest } from './atomic-styles'

const H6 = ({ children, ...rest }: Object) => <h6 {...transformRest(rest)}>{children}</h6>

export default withStyles(atomicStyles)(H6)
