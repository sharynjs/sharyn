// @flow

import React from 'react'

import withStyles from '@material-ui/core/styles/withStyles'

import atomicStyles, { transformRest } from './atomicStyles'

const Div = ({ children, ...rest }: Object) => <div {...transformRest(rest)}>{children}</div>

export default withStyles(atomicStyles)(Div)
