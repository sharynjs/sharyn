// @flow

/* eslint-disable import/no-extraneous-dependencies */

import React from 'react'

// flow-disable-next-line
import withStyles from '@material-ui/core/styles/withStyles'

import atomicStyles, { transformRest } from './atomic-styles'

const I = ({ children, ...rest }: Object) => <i {...transformRest(rest)}>{children}</i>

export default withStyles(atomicStyles)(I)
