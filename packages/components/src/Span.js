// @flow

/* eslint-disable import/no-extraneous-dependencies */

import React from 'react'

// flow-disable-next-line
import withStyles from '@material-ui/core/styles/withStyles'

import atomicStyles, { transformRest } from './atomic-styles'

const Span = ({ children, ...rest }: Object) => <span {...transformRest(rest)}>{children}</span>

export default withStyles(atomicStyles)(Span)
