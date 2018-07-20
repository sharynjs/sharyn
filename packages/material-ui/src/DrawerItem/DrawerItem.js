import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

const styles = { label: { textDecoration: 'none', display: 'inline-block' } }

const DrawerItem = ({ classes, label, icon: Icon }) => (
  <ListItem button>
    {Icon && (
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
    )}
    <ListItemText primary={label} className={classes.label} />
  </ListItem>
)

DrawerItem.propTypes = {
  classes: PropTypes.shape({ label: PropTypes.string }).isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.func,
}

DrawerItem.defaultProps = {
  icon: null,
}

export default withStyles(styles)(DrawerItem)
