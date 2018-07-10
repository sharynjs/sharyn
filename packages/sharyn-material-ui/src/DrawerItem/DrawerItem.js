import React from 'react'
import PropTypes from 'prop-types'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

const DrawerItem = ({ label, icon: Icon }) => (
  <ListItem button>
    {Icon && (
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
    )}
    <ListItemText primary={label} />
  </ListItem>
)

DrawerItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.func,
}

export default DrawerItem
