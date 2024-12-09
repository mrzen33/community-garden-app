import React, { useEffect, useState, createContext } from 'react';
import { registerForPushNotificationsAsync, setupNotificationHandlers } from '../services/notificationService';

export const NotificationContext = createContext({
  expoPushToken: null,
});

export function NotificationProvider({ children }) {
  const [expoPushToken, setExpoPushToken] = useState(null);

  useEffect(() => {
    (async () => {
      setupNotificationHandlers();
      const token = await registerForPushNotificationsAsync();
      if (token) setExpoPushToken(token);
    })();
  }, []);

  return (
    <NotificationContext.Provider value={{ expoPushToken }}>
      {children}
    </NotificationContext.Provider>
  );
}
