// @flow

/* eslint-disable import/no-extraneous-dependencies */

import React from 'react'

// flow-disable-next-line
import withStyles from '@material-ui/core/styles/withStyles'

import atomicStyles, { transformRest } from './atomic-styles'

const Ul = ({ children, ...rest }: Object) => <ul {...transformRest(rest)}>{children}</ul>

export default withStyles(atomicStyles)(Ul)
