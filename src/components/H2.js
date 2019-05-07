// @flow

import React from 'react'

import withStyles from '@material-ui/core/styles/withStyles'

import atomicStyles, { transformRest } from './atomicStyles'

const H2 = ({ children, ...rest }: Object) => <h2 {...transformRest(rest)}>{children}</h2>

export default withStyles(atomicStyles)(H2)
