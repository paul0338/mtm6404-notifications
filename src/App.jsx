import React, { useState } from 'react'
import notificationsData from './notifications'
import reactLogo from './assets/react.svg'
import './App.css'

const Notification = ({ id, clearNotification, children }) => {
  return (
    <div className="notification-item">
      <div>{children}</div>
      <button onClick={() => clearNotification(id)}>Clear</button>
    </div>
  )
}

const NotificationsList = ({ notifications, clearNotification }) => {
  return (
    <div className="notification-list">
      {notifications.map(notification => (
        <Notification key={notification.id} id={notification.id} clearNotification={clearNotification}>
          <p><strong>{notification.name}:</strong> {notification.message}</p>
        </Notification>
      ))}
    </div>
  )
}

const App = () => {
  const [notifications, setNotifications] = useState(notificationsData)

  const clearNotification = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id))
  }

  const clearAllNotifications = () => {
    setNotifications([])
  }

  return (
    <div className="app">
      <div className="logos">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Notifications ({notifications.length})</h1>
      <button onClick={clearAllNotifications}>Clear All</button>
      <NotificationsList notifications={notifications} clearNotification={clearNotification} />
    </div>
  )
}

export default App
