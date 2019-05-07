// @flow

import React from 'react'

import Progress from '@material-ui/core/CircularProgress'
import IconButton from '@material-ui/core/IconButton'
import withStyles from '@material-ui/core/styles/withStyles'
import RefreshIcon from '@material-ui/icons/Refresh'
import withStateHandlers from 'recompose/withStateHandlers'

const RefreshButtonJSX = ({
  classes: css,
  isRefreshing,
  refresh,
  alwaysShow,
}: {
  classes: Object,
  isRefreshing?: boolean,
  refresh?: Function,
  alwaysShow?: boolean,
}) =>
  isRefreshing ? (
    <Progress className={css.refreshProgress} color="inherit" size={20} thickness={6} />
  ) : (
    <IconButton
      color="inherit"
      onClick={refresh}
      className={alwaysShow ? undefined : css.onlyInStandalone}
    >
      <RefreshIcon className={css.refreshIcon} />
    </IconButton>
  )

export const RefreshButtonCmp = withStyles({
  refreshIcon: { fontSize: 30 },
  refreshProgress: { margin: 17 },
  onlyInStandalone: {
    display: 'none',
    '@media all and (display-mode: standalone)': { display: 'block' },
  },
})(RefreshButtonJSX)

const RefreshButton = withStateHandlers(
  { isRefreshing: false },
  { refresh: () => () => window.location.reload(true) || { isRefreshing: true } },
)(RefreshButtonCmp)

export default RefreshButton
