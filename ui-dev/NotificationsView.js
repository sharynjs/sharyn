// @flow

import React from 'react'
import Notifications from '../packages/components/src/Notifications'

const notifications = [{ message: 'Hello' }, { message: 'World' }]
const handleDismissNotification = () => {
  notifications.shift()
}

const NotificationsView = () => <Notifications {...{ notifications, handleDismissNotification }} />

export default NotificationsView
