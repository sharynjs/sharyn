// @flow

/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'

import withStyles from '@material-ui/core/styles/withStyles'
import compose from 'recompose/compose'
import withState from 'recompose/withState'

const Dimensions = compose(
  withState('divHeight', 'setDivHeight', 0),
  withState('divWidth', 'setDivWidth', 0),
)(
  ({
    classes,
    children,
    setDivWidth,
    setDivHeight,
    divWidth,
    divHeight,
  }: {
    classes: Object,
    children: any,
    setDivWidth: Function,
    setDivHeight: Function,
    divWidth: number,
    divHeight: number,
  }) => (
    <div
      ref={el => {
        if (el) {
          el.clientWidth !== divWidth && setDivWidth(el.clientWidth)
          el.clientHeight !== divHeight && setDivHeight(el.clientHeight)
        }
      }}
      style={{ position: 'relative' }}
    >
      <div className={classes.dimensions}>
        {divWidth} x {divHeight}
      </div>
      {children}
    </div>
  ),
)

const StoryHostJSX = ({
  classes,
  border,
  width,
  dimensions,
  children,
  white,
}: {
  classes: Object,
  border?: boolean,
  width?: number | string,
  dimensions?: boolean,
  white?: boolean,
  children: any,
}) => (
  <div
    className={classes.container}
    style={{
      ...(white ? { background: 'white' } : {}),
    }}
  >
    {((border || width) && (
      <div
        style={{
          ...(border ? { border: '1px dashed #bbb' } : {}),
          ...(width ? { width } : {}),
        }}
      >
        {dimensions ? <Dimensions {...{ classes }}>{children}</Dimensions> : children}
      </div>
    )) ||
      (dimensions ? <Dimensions {...{ classes }}>{children}</Dimensions> : children)}
  </div>
)

const StoryHost = withStyles({
  container: {
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dimensions: {
    position: 'absolute',
    left: -1,
    top: -42,
    background: 'white',
    boxShadow:
      '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
    borderRadius: 4,
    padding: 10,
  },
})(StoryHostJSX)

export default StoryHost
