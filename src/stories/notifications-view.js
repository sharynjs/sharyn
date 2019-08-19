// @flow

import React from 'react'
import Button from '@material-ui/core/Button'
import Notifications from '../../packages/components/src/Notifications'

const notifications = [
  { message: 'First quick', autoHideDuration: 2000 },
  {
    message: 'Second with action',
    mainAction: (
      <Button
        color="primary"
        onClick={() =>
          // eslint-disable-next-line no-console
          console.log(
            'Clicked. Using a console log because alert causes the following notification to autohide',
          )
        }
      >
        Action
      </Button>
    ),
  },
  { message: 'Third permanent', autoHideDuration: null, dismissable: false },
]
const handleDismissNotification = () => {
  notifications.shift()
}

const NotificationsView = () => <Notifications {...{ notifications, handleDismissNotification }} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} />

export default NotificationsView
