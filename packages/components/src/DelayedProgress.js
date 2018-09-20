// @flow

/* eslint-disable import/no-extraneous-dependencies */

import React from 'react'

// flow-disable-next-line
import Progress from '@material-ui/core/CircularProgress'
// flow-disable-next-line
import withLifecycle from 'recompose/lifecycle'
// flow-disable-next-line
import withState from 'recompose/withState'
// flow-disable-next-line
import compose from 'recompose/compose'

const lifecycle = {
  componentDidMount() {
    setTimeout(() => this.props.setShow(true), this.props.delay ?? 200)
  },
}

const DelayedProgressJSX = ({ show, ...rest }: { show: boolean }) =>
  show ? <Progress {...rest} /> : null

const DelayedProgress = compose(
  withState('show', 'setShow', false),
  withLifecycle(lifecycle),
)(DelayedProgressJSX)

export default DelayedProgress
