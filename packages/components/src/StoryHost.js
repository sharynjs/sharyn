// @flow

/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'

const StoryHost = ({
  border,
  width,
  children,
}: {
  border?: boolean,
  width?: number | string,
  children: any,
}) => (
  <div
    style={{
      display: 'flex',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
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
