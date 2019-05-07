// @flow

import React from 'react'

import withStyles from '@material-ui/core/styles/withStyles'

import atomicStyles, { transformRest } from './atomicStyles'

const H5 = ({ children, ...rest }: Object) => <h5 {...transformRest(rest)}>{children}</h5>

export default withStyles(atomicStyles)(H5)
