// @flow

import React from 'react'

import withStyles from '@material-ui/core/styles/withStyles'

import atomicStyles, { transformRest } from './atomicStyles'

const B = ({ children, ...rest }: Object) => <b {...transformRest(rest)}>{children}</b>

export default withStyles(atomicStyles)(B)
