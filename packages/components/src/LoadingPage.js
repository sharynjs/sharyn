// @flow

/* eslint-disable import/no-extraneous-dependencies */

import React from 'react'

// flow-disable-next-line
import { middle } from '@sharyn/css/util'

import Progress from '@material-ui/core/CircularProgress'
import withStyles from '@material-ui/core/styles/withStyles'

import Page from './Page'

const LoadingPageJSX = ({ classes: css }: { classes: Object }) => (
  <Page maxWidth="100%" noPaper noPadding middle>
    <div className={css.middle}>
      <Progress thickness={4} size={70} />
    </div>
  </Page>
)

const LoadingPage = withStyles({ middle })(LoadingPageJSX)

export default LoadingPage
