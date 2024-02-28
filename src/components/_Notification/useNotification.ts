import { useContext } from "react";
import { NotificationContext } from "./NotificationProvider";
import { NotificationContextType } from "./types/NotificationContextType";

export const useNotification = (): NotificationContextType => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      "useNotification must be used within a NotificationProvider"
    );
  }
  return context;
};
