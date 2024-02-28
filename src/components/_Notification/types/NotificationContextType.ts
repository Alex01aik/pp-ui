import { NotificationType } from "./NotificationType";

export type NotificationContextType = {
  notifications: NotificationType[];
  open: (args: Omit<NotificationType, "key">) => void;
  close: (key: string) => void;
};
