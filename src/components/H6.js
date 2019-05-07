// @flow

import React from 'react'

import withStyles from '@material-ui/core/styles/withStyles'

import atomicStyles, { transformRest } from './atomicStyles'

const H6 = ({ children, ...rest }: Object) => <h6 {...transformRest(rest)}>{children}</h6>

export default withStyles(atomicStyles)(H6)
