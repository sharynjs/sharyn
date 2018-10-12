// @flow

/* eslint-disable import/no-extraneous-dependencies */

import React from 'react'

// flow-disable-next-line
import withStyles from '@material-ui/core/styles/withStyles'

import atomicStyles, { transformRest } from './atomic-styles'

const H5 = ({ children, ...rest }: Object) => <h5 {...transformRest(rest)}>{children}</h5>

export default withStyles(atomicStyles)(H5)
