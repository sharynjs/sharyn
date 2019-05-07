// @flow

import React from 'react'

import withStyles from '@material-ui/core/styles/withStyles'

import atomicStyles, { transformRest } from './atomicStyles'

const H3 = ({ children, ...rest }: Object) => <h3 {...transformRest(rest)}>{children}</h3>

export default withStyles(atomicStyles)(H3)
