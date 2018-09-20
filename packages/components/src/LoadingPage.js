// @flow

/* eslint-disable import/no-extraneous-dependencies */

import React from 'react'

// flow-disable-next-line
import { middle } from '@sharyn/css/util'

import withStyles from '@material-ui/core/styles/withStyles'
import DelayedProgress from './DelayedProgress'

import Page from './Page'

const LoadingPageJSX = ({ classes: css }: { classes: Object }) => (
  <Page maxWidth="100%" noPaper noPadding middle>
    <div className={css.middle}>
      <DelayedProgress thickness={4} size={70} />
    </div>
  </Page>
)

const LoadingPage = withStyles({ middle })(LoadingPageJSX)

export default LoadingPage
