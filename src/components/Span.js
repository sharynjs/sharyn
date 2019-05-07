// @flow

import React from 'react'

import withStyles from '@material-ui/core/styles/withStyles'

import atomicStyles, { transformRest } from './atomicStyles'

const Span = ({ children, ...rest }: Object) => <span {...transformRest(rest)}>{children}</span>

export default withStyles(atomicStyles)(Span)
