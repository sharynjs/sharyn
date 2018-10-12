// @flow

/* eslint-disable import/no-extraneous-dependencies */

import React from 'react'

// flow-disable-next-line
import withStyles from '@material-ui/core/styles/withStyles'

import atomicStyles, { transformRest } from './atomic-styles'

const H4 = ({ children, ...rest }: Object) => <h4 {...transformRest(rest)}>{children}</h4>

export default withStyles(atomicStyles)(H4)
