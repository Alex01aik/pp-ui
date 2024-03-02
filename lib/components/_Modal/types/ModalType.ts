import { ReactNode } from "react";

export type ModalType = {
  key: string;
  modal: ReactNode;
  closeProps?: {
    withClose?: boolean;
    closeButton?: ReactNode;
  };
};
