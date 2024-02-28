import React, { FC } from "react";
import { useNotification } from "@/components/_Notification/useNotification";

const NotificationButton: FC = (props) => {
  const notification = useNotification();
  return (
    <button
      onClick={() => {
        notification.open({
          notification: <div>pizda{new Date().getTime()}</div>,
          autoClose: true,
        });
      }}
    >
      open notification
    </button>
  );
};

export default NotificationButton;
