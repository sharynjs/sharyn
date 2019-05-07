// @flow

import React from 'react'

import withStyles from '@material-ui/core/styles/withStyles'

import atomicStyles, { transformRest } from './atomicStyles'

const I = ({ children, ...rest }: Object) => <i {...transformRest(rest)}>{children}</i>

export default withStyles(atomicStyles)(I)
