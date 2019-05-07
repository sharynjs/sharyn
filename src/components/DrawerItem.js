// @flow

import React from 'react'

import withStyles from '@material-ui/core/styles/withStyles'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

const styles = { label: { '& > span': { textDecoration: 'none', display: 'inline-block' } } }

const DrawerItemJSX = ({
  classes,
  label,
  icon: Icon,
  ...rest
}: {
  classes: Object,
  label: string,
  icon?: Function,
}) => (
  <ListItem button {...rest}>
    {Icon && (
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
    )}
    <ListItemText primary={label} className={classes.label} />
  </ListItem>
)

const DrawerItem = withStyles(styles)(DrawerItemJSX)

export default DrawerItem
