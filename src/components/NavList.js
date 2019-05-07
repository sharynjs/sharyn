// @flow

import React from 'react'

import List from '@material-ui/core/List'
import { Link } from 'react-router-dom'

import DrawerItem from './DrawerItem'
import cond from '../util/cond'

type RouteWithOptions = {
  path: string,
  title: string,
  icon?: Object,
  hardLink?: boolean,
  newTab?: boolean,
  component: any,
}

const mergeNavItems = (navItemPairs: any[]): RouteWithOptions[] =>
  navItemPairs.map(i => (Array.isArray(i) ? { ...i[0], ...i[1] } : i))

const NavList = ({ navItems }: { navItems: any[] }) => (
  <List>
    {mergeNavItems(navItems).map(
      ({ path, title: label, icon, hardLink, newTab, component: Component }, index) =>
        cond(
          [
            // eslint-disable-next-line react/no-array-index-key
            [Component, () => <Component key={index} />],
            [
              hardLink || newTab,
              () => (
                <a href={path} key={path} {...(newTab ? { target: '_blank' } : {})}>
                  <DrawerItem {...{ label, icon }} />
                </a>
              ),
            ],
          ],
          () => (
            <Link to={path} key={path}>
              <DrawerItem {...{ label, icon }} />
            </Link>
          ),
        ),
    )}
  </List>
)

export default NavList
