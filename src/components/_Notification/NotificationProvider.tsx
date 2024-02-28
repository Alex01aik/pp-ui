import React, { FC, PropsWithChildren, createContext, useState } from "react";
import { NotificationContextType } from "./types/NotificationContextType";
import { NotificationType } from "./types/NotificationType";
import NotificationBoundary from "./NotificationBoundary";

export const NotificationContext = createContext<
  NotificationContextType | undefined
>(undefined);

const NotificationProvider: FC<PropsWithChildren> = ({
  children,
  ...props
}) => {
  const [notifications, setNotifications] = useState<NotificationType[]>([]);

  const open = (args: Omit<NotificationType, "key">) => {
    setNotifications((prevNotifications) => [
      ...prevNotifications,
      { ...args, key: new Date().getTime().toString() },
    ]);
  };

  const close = (key: string) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((n) => n.key !== key)
    );
  };

  const contextValue: NotificationContextType = {
    notifications,
    open,
    close,
  };

  return (
    <NotificationContext.Provider {...props} value={contextValue}>
      {children}
      <NotificationBoundary />
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
