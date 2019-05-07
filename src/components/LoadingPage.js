// @flow

import React from 'react'

import Progress from '@material-ui/core/CircularProgress'
import withStyles from '@material-ui/core/styles/withStyles'

import { middle } from '../css/util'
import DelayedProgress from './DelayedProgress'

const LoadingPageJSX = ({ classes: css, noDelay }: { classes: Object, noDelay?: boolean }) => (
  <div className={css.middle}>
    {noDelay ? <Progress thickness={4} size={70} /> : <DelayedProgress thickness={4} size={70} />}
  </div>
)

const LoadingPage = withStyles({ middle })(LoadingPageJSX)

export default LoadingPage
