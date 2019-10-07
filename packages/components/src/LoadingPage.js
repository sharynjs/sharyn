// @flow

/* eslint-disable import/no-extraneous-dependencies */

import React from 'react'

// flow-disable-next-line
import { middle } from '@sharyn/css/util'

import Progress from '@material-ui/core/CircularProgress'
import withStyles from '@material-ui/core/styles/withStyles'
import DelayedProgress from './DelayedProgress'

const LoadingPageJSX = ({ classes: css, noDelay }: { classes: Object, noDelay?: boolean }) => (
  <div className={css.middle} data-testid="loading-page">
    {noDelay ? <Progress thickness={4} size={70} /> : <DelayedProgress thickness={4} size={70} />}
  </div>
)

const LoadingPage = withStyles({ middle })(LoadingPageJSX)

export default LoadingPage
