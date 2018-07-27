// @flow

/* eslint-disable import/no-extraneous-dependencies */

import React from 'react'
import { Route, Switch as RRSwitch } from 'react-router'

const Switch = ({ routesAndCmps }: { routesAndCmps: Object[] }) => (
  <RRSwitch>
    {routesAndCmps.map(({ route, component: Component }) => {
      const { path, exact, ...rest } = route
      return (
        <Route
          key={path || 'not-found-key'}
          path={path}
          exact={exact}
          render={props => <Component {...props} {...rest} />}
        />
      )
    })}
  </RRSwitch>
)

export default Switch
