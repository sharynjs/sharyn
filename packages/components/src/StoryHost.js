// @flow

/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'

const StoryHost = ({
  border,
  width,
  children,
  white,
}: {
  border?: boolean,
  width?: number | string,
  white?: boolean,
  children: any,
}) => (
  <div
    style={{
      display: 'flex',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      ...(white ? { background: 'white' } : {}),
    }}
  >
    {border || width ? (
      <div
        style={{ ...(border ? { border: '1px dashed #bbb' } : {}), ...(width ? { width } : {}) }}
      >
        {children}
      </div>
    ) : (
      children
    )}
  </div>
)

export default StoryHost
