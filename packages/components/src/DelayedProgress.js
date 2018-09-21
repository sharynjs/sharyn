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

let timerId

const lifecycle = {
  componentDidMount() {
    timerId = setTimeout(() => this.props.setShow(true), this.props.delay ?? 200)
  },
  componentWillUnmount() {
    clearTimeout(timerId)
  },
}

const DelayedProgressJSX = ({ show, setShow, ...rest }: { show: boolean, setShow: Function }) =>
  show ? <Progress {...rest} /> : null

const DelayedProgress = compose(
  withState('show', 'setShow', false),
  withLifecycle(lifecycle),
)(DelayedProgressJSX)

export default DelayedProgress
