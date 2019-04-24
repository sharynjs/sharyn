// @flow

/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'

import withStyles from '@material-ui/core/styles/withStyles'
import compose from 'recompose/compose'
import withState from 'recompose/withState'

const StoryHostJSX = ({
  classes,
  border,
  width,
  dimensions,
  setDivWidth,
  setDivHeight,
  divWidth,
  divHeight,
  children,
  white,
}: {
  classes: Object,
  border?: boolean,
  width?: number | string,
  dimensions?: boolean,
  setDivWidth: Function,
  setDivHeight: Function,
  divWidth: number,
  divHeight: number,
  white?: boolean,
  children: any,
}) => (
  <div
    className={classes.container}
    style={{
      ...(white ? { background: 'white' } : {}),
    }}
  >
    {border || width ? (
      <div
        ref={e => {
          if (e) {
            e.clientWidth !== divWidth && setDivWidth(e.clientWidth)
            e.clientHeight !== divHeight && setDivHeight(e.clientHeight)
          }
        }}
        style={{
          ...(border ? { border: '1px dashed #bbb', position: 'relative' } : {}),
          ...(width ? { width } : {}),
        }}
      >
        {border && dimensions ? (
          <div className={classes.dimensions}>
            {divWidth} x {divHeight}
          </div>
        ) : null}
        {children}
      </div>
    ) : (
      children
    )}
  </div>
)

const StoryHostCmp = withStyles({
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

const StoryHost = compose(
  withState('divHeight', 'setDivHeight', 0),
  withState('divWidth', 'setDivWidth', 0),
)(StoryHostCmp)

export default StoryHost
