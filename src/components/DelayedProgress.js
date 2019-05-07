// @flow

import React from 'react'

import Progress from '@material-ui/core/CircularProgress'
import withLifecycle from 'recompose/lifecycle'
import withState from 'recompose/withState'
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
