import { ModalType } from "./ModalType";

export type ModalContextType = {
  modals: ModalType[];
  open: (args: Omit<ModalType, "key"> & { key?: string }) => void;
  close: (key: string) => void;
  closeAll: () => void;
};
