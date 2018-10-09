// @flow

/* eslint-disable import/no-extraneous-dependencies */

import withStyles from '@material-ui/core/styles/withStyles'
import compose from 'recompose/compose'
import withProps from 'recompose/withProps'

const withCss = (params: any) =>
  compose(
    withStyles(params),
    withProps(({ classes }) => ({ css: classes })),
  )

export default withCss
