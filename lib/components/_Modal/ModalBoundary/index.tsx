import React from "react";
import { useModal } from "../useModal";
import styles from "./styles.module.css";
import Close from "@/icons/Close";

const ModalBoundary: React.FC = () => {
  const modalManager = useModal();

  return modalManager.modals.length ? (
    <div className={styles.root}>
      {modalManager.modals.map(({ key, modal, closeProps }, index) => (
        <div className={styles.content} key={index}>
          {closeProps?.closeButton ??
            (closeProps?.withClose && (
              <Close
                className={styles.close}
                onClick={() => modalManager.close(key)}
              />
            ))}
          {modal}
        </div>
      ))}
      <div className={styles.cover} onClick={modalManager.closeAll} />
    </div>
  ) : null;
};

export default ModalBoundary;
