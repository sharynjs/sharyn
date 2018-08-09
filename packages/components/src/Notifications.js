// @flow

/* eslint-disable import/no-extraneous-dependencies */

import React from 'react'
import withState from 'recompose/withState'

import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

const handleClose = (updateIsOpen, keepClickAway, reason) => {
  if (keepClickAway || reason !== 'clickaway') {
    updateIsOpen(false)
  }
}

const handleExited = (updateIsOpen, handleDismissNotification) => {
  handleDismissNotification()
  updateIsOpen(true)
}

const NotificationsJSX = ({
  notifications,
  handleDismissNotification,
  keepClickAway,
  dismissable = true,
  isOpen,
  updateIsOpen,
}: {
  notifications: Object[],
  handleDismissNotification: Function,
  currentSnackbar?: Object,
  keepClickAway?: boolean,
  dismissable?: boolean,
  isOpen: boolean,
  updateIsOpen: Function,
}) => {
  const currentSnackbar = notifications[0]
  if (currentSnackbar) {
    const { mainAction, ...muiProps } = currentSnackbar
    const actions = mainAction
      ? [
          // eslint-disable-next-line
          <div key="main" role="button" onClick={() => handleClose(updateIsOpen, keepClickAway)}>
            {mainAction}
          </div>,
        ]
      : []
    if (dismissable) {
      actions.push(
        <IconButton
          key="dismiss"
          color="inherit"
          onClick={() => handleClose(updateIsOpen, keepClickAway)}
        >
          <CloseIcon />
        </IconButton>,
      )
    }
    return (
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={isOpen}
        onClose={(e, reason) => handleClose(updateIsOpen, keepClickAway, reason)}
        onExited={() => handleExited(updateIsOpen, handleDismissNotification)}
        autoHideDuration={6000}
        action={actions}
        {...muiProps}
      />
    )
  }
  return null
}

const Notifications = withState('isOpen', 'updateIsOpen', true)(NotificationsJSX)

export default Notifications
