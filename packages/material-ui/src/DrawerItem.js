// @flow

/* eslint-disable import/no-extraneous-dependencies */

import React from 'react'
// flow-disable-next-line
import { withStyles } from '@material-ui/core/styles'
// flow-disable-next-line
import ListItem from '@material-ui/core/ListItem'
// flow-disable-next-line
import ListItemIcon from '@material-ui/core/ListItemIcon'
// flow-disable-next-line
import ListItemText from '@material-ui/core/ListItemText'

const styles = { label: { '& > span': { textDecoration: 'none', display: 'inline-block' } } }

const DrawerItemJSX = ({
  classes,
  label,
  icon: Icon,
}: {
  classes: Object,
  label: string,
  icon?: Function,
}) => (
  <ListItem button>
    {Icon && (
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
    )}
    <ListItemText primary={label} className={classes.label} />
  </ListItem>
)

const DrawerItem = withStyles(styles)(DrawerItemJSX)

module.exports = DrawerItem
