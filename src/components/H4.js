// @flow

import React from 'react'

import withStyles from '@material-ui/core/styles/withStyles'

import atomicStyles, { transformRest } from './atomicStyles'

const H4 = ({ children, ...rest }: Object) => <h4 {...transformRest(rest)}>{children}</h4>

export default withStyles(atomicStyles)(H4)
