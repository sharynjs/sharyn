// @flow

import React from 'react'

import withStyles from '@material-ui/core/styles/withStyles'

import atomicStyles, { transformRest } from './atomicStyles'

const Ul = ({ children, ...rest }: Object) => <ul {...transformRest(rest)}>{children}</ul>

export default withStyles(atomicStyles)(Ul)
