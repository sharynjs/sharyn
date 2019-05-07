// @flow

import React from 'react'

const favicons = (color: string, path?: string = '/static/img/favicon/') => [
  <link
    key="apple-touch-icon"
    rel="apple-touch-icon"
    sizes="180x180"
    href={`${path}apple-touch-icon.png`}
  />,
  <link
    key="favicon-32"
    rel="icon"
    type="image/png"
    sizes="32x32"
    href={`${path}favicon-32x32.png`}
  />,
  <link
    key="favicon-16"
    rel="icon"
    type="image/png"
    sizes="16x16"
    href={`${path}favicon-16x16.png`}
  />,
  <link key="safari-pinned" rel="mask-icon" href={`${path}safari-pinned-tab.svg`} color={color} />,
  <link key="favicon" rel="shortcut icon" href={`${path}favicon.ico`} />,
  <meta key="ms-tile" name="msapplication-TileColor" content={color} />,
  <meta key="ms-tile-config" name="msapplication-config" content={`${path}browserconfig.xml`} />,
  <meta key="theme" name="theme-color" content={color} />,
]

export default favicons
