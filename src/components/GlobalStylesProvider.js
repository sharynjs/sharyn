// @flow

import React from 'react'

import withStyles from '@material-ui/core/styles/withStyles'

import defaultGlobalStyles from '../css/global'

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
