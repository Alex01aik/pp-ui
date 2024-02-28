import React, { FC } from "react";
import { useModal } from "@/components/_Modal/useModal";

const ModalButton: FC = (props) => {
  const modal = useModal();
  return (
    <button
      onClick={() => {
        modal.open({
          modal: (
            <div
              style={{
                background: "white",
                display: "flex",
                width: 200,
                height: 200,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              first
              <button
                onClick={() => {
                  modal.open({
                    modal: (
                      <div
                        style={{
                          background: "white",
                          display: "flex",
                          width: 200,
                          height: 200,
                        }}
                      >
                        second
                      </div>
                    ),
                    closeProps: {
                      withClose: true,
                    },
                  });
                }}
              >
                open second
              </button>
            </div>
          ),
        });
      }}
    >
      open modal
    </button>
  );
};

export default ModalButton;
