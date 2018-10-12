// @flow

/* eslint-disable import/no-extraneous-dependencies */

import React from 'react'

// flow-disable-next-line
import withStyles from '@material-ui/core/styles/withStyles'

import atomicStyles, { transformRest } from './atomic-styles'

const H2 = ({ children, ...rest }: Object) => <h2 {...transformRest(rest)}>{children}</h2>

export default withStyles(atomicStyles)(H2)
