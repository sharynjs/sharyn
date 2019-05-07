// @flow

import React from 'react'

import withStyles from '@material-ui/core/styles/withStyles'

import atomicStyles, { transformRest } from './atomicStyles'

const P = ({ children, ...rest }: Object) => <p {...transformRest(rest)}>{children}</p>

export default withStyles(atomicStyles)(P)
