// @flow

/* eslint-disable import/no-extraneous-dependencies */

import React from 'react'

// flow-disable-next-line
import withStyles from '@material-ui/core/styles/withStyles'

import atomicStyles, { transformRest } from './atomic-styles'

const H3 = ({ children, ...rest }: Object) => <h3 {...transformRest(rest)}>{children}</h3>

export default withStyles(atomicStyles)(H3)
