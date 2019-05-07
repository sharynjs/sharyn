// @flow

import React from 'react'

import withStyles from '@material-ui/core/styles/withStyles'

import atomicStyles, { transformRest } from './atomicStyles'

const H1 = ({ children, ...rest }: Object) => <h1 {...transformRest(rest)}>{children}</h1>

export default withStyles(atomicStyles)(H1)
