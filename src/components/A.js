// @flow

import React from 'react'

import withStyles from '@material-ui/core/styles/withStyles'

import atomicStyles, { transformRest } from './atomicStyles'

const A = ({ children, ...rest }: Object) => <a {...transformRest(rest)}>{children}</a>

export default withStyles(atomicStyles)(A)
