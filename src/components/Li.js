// @flow

import React from 'react'

import withStyles from '@material-ui/core/styles/withStyles'

import atomicStyles, { transformRest } from './atomicStyles'

const Li = ({ children, ...rest }: Object) => <li {...transformRest(rest)}>{children}</li>

export default withStyles(atomicStyles)(Li)
