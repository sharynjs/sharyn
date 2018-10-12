// @flow

/* eslint-disable import/no-extraneous-dependencies */

import React from 'react'

// flow-disable-next-line
import withStyles from '@material-ui/core/styles/withStyles'

import atomicStyles, { transformRest } from './atomic-styles'

const H1 = ({ children, ...rest }: Object) => <h1 {...transformRest(rest)}>{children}</h1>

export default withStyles(atomicStyles)(H1)
