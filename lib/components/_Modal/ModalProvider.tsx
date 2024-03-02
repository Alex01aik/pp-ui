import { FC, PropsWithChildren, createContext, useState } from "react";
import ModalBoundary from "./ModalBoundary";
import { ModalContextType } from "./types/ModalContextType";
import { ModalType } from "./types/ModalType";

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined
);

const ModalProvider: FC<PropsWithChildren> = ({ children, ...props }) => {
  const [modals, setModals] = useState<ModalType[]>([]);

  const open = (args: Omit<ModalType, "key"> & { key?: string }) => {
    setModals((prevModals) => [
      ...prevModals,
      { ...args, key: args.key ?? new Date().getTime().toString() },
    ]);
  };

  const close = (key: string) => {
    setModals((prevModals) => prevModals.filter((m) => m.key !== key));
  };

  const closeAll = () => {
    setModals([]);
  };

  const contextValue: ModalContextType = {
    modals,
    open,
    close,
    closeAll,
  };

  return (
    <ModalContext.Provider {...props} value={contextValue}>
      {children}
      <ModalBoundary />
    </ModalContext.Provider>
  );
};

export default ModalProvider;
