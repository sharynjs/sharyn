// @flow

/* eslint-disable import/no-extraneous-dependencies */

import React from 'react'
import throttle from 'lodash.throttle'
import withState from 'recompose/withState'
import withLifecycle from 'recompose/lifecycle'
import compose from 'recompose/compose'
// flow-disable-next-line
import withStyles from '@material-ui/core/styles/withStyles'

const styles = ({ breakpoints }) => ({
  root: { transition: 'margin-top 0.2s', [breakpoints.up('sm')]: { marginTop: '0 !important' } },
})

const lifecycle = {
  componentDidMount() {
    const { updateIsVisible, updateHeight } = this.props
    const cmp = document.getElementsByClassName('hide-on-scroll')[0]
    if (!cmp) {
      throw Error('You use hideOnScroll but no element with the hide-on-scroll was found')
    }
    const getFullHeight = () => cmp.clientHeight + 11 // The Material UI box-shadow height
    const getHeight = () => cmp.clientHeight
    updateHeight(getFullHeight())
    window.onresize = throttle(() => updateHeight(getFullHeight()))

    const headroom = 20
    let current = window.scrollY
    const initial = current
    let last = current
    let lowest = current
    let highest = current
    let goingUp
    let goingDown
    window.onscroll = throttle(() => {
      current = window.scrollY
      goingUp = current < last
      goingDown = !goingUp

      if (initial !== current) {
        if (current < getHeight()) {
          updateIsVisible(true)
        } else {
          if (current < lowest - headroom) {
            updateIsVisible(true)
          }
          if (current > highest + headroom) {
            updateIsVisible(false)
          }
        }
      }

      last = current

      if (goingDown) {
        if (current > lowest) {
          lowest = current
        }
        if (current > highest + headroom) {
          highest = current - headroom
        }
      }
      if (goingUp) {
        if (current < highest) {
          highest = current
        }
        if (current < lowest - headroom) {
          lowest = current + headroom
        }
      }
    }, 10)
  },
}

const hideOnScroll = (Cmp: Function) => {
  const AutoHideCmp = ({
    classes,
    children,
    height,
    isVisible,
    style,
    updateIsVisible, // Just to take it out from ...rest
    updateHeight, // Just to take it out from ...rest
    ...rest
  }: {
    classes: Object,
    children: any,
    isVisible: boolean,
    style?: Object,
    height?: number,
    updateIsVisible: Function,
    updateHeight: Function,
  }) => (
    <Cmp
      classes={classes}
      style={{
        ...style,
        // eslint-disable-next-line no-nested-ternary
        marginTop: isVisible ? 0 : height ? 0 - height : 0,
      }}
      {...rest}
    >
      {children}
    </Cmp>
  )

  return compose(
    withState('isVisible', 'updateIsVisible', true),
    withState('height', 'updateHeight', null),
    withLifecycle(lifecycle),
    withStyles(styles),
  )(AutoHideCmp)
}

export default hideOnScroll
