// @flow

/* eslint-disable import/no-extraneous-dependencies */

import React from 'react'

// flow-disable-next-line
import withStyles from '@material-ui/core/styles/withStyles'

import atomicStyles, { transformRest } from './atomic-styles'

const Li = ({ children, ...rest }: Object) => <li {...transformRest(rest)}>{children}</li>

export default withStyles(atomicStyles)(Li)
