import { ReactNode } from "react";

export type NotificationType = {
  key: string;
  notification: ReactNode;
  closeDelay?: number;
  autoClose?: boolean;
};
