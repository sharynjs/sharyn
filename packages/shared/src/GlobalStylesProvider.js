// @flow

/* eslint-disable import/no-extraneous-dependencies */

// eslint-disable-next-line no-unused-vars
import React from 'react'

import withStyles from '@material-ui/core/styles/withStyles'
// flow-disable-next-line
import defaultGlobalStyles from '@sharyn/css/global'

const GlobalStylesProvider = ({
  children,
  globalStyles = defaultGlobalStyles,
}: {
  children: any,
  globalStyles?: any,
}) => {
  const Cmp = withStyles(globalStyles)(() => <>{children}</>)
  return <Cmp />
}

export default GlobalStylesProvider
