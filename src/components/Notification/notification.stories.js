import React from 'react'
import Notification from './Notification'
import notes from './notification.md'

export default {
  title: 'Components/Notification',
  component: Notification,
  parameters: { docs: { description: { component: notes } } },
  argTypes: {},
}

export const NotificationExample = () => (
  <div>
    <Notification variant="success">Success</Notification>
    <Notification variant="warning">Warning</Notification>
    <Notification variant="info">Info</Notification>
    <Notification variant="error">Error</Notification>
    <Notification>Default</Notification>
  </div>
)
