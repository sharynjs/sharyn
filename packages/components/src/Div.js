// @flow

/* eslint-disable import/no-extraneous-dependencies */

import React from 'react'

// flow-disable-next-line
import withStyles from '@material-ui/core/styles/withStyles'

import atomicStyles, { transformRest } from './atomic-styles'

const Div = ({ children, ...rest }: Object) => <div {...transformRest(rest)}>{children}</div>

export default withStyles(atomicStyles)(Div)
