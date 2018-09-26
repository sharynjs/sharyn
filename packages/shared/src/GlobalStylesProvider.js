// @flow

/* eslint-disable import/no-extraneous-dependencies */

// eslint-disable-next-line no-unused-vars
import React from 'react'

import withStyles from '@material-ui/core/styles/withStyles'
// flow-disable-next-line
import defaultGlobalStyles from '@sharyn/css/global'

const GlobalStylesProvider = ({ globalStyles = defaultGlobalStyles }: { globalStyles?: any }) =>
  withStyles(globalStyles)(({ children }) => <>{children}</>)

export default GlobalStylesProvider
