import Modal from "../Modal/Modal";
import {createRoot} from "react-dom/client";
import React from "react";

type DialogProps = {
  message: React.ReactNode | string | string[];
  title?: string;
  iconTitle?: JSX.Element;
  submitText?: string;
  cancelText?: string | null;
  className?: string;
  onSubmit?: () => any | Promise<any>;
  onCancel?: () => void;
};

const createModal = ({
  message,
  title,
  iconTitle,
  submitText,
  cancelText,
  className,
  onSubmit,
  onCancel,
}: DialogProps) => {
  const rootDiv = document.createElement("div");
  document.body.appendChild(rootDiv);
  const root = createRoot(rootDiv);

  const closeModal = () => {
    root.unmount();
    rootDiv.remove();
  };

  root.render(
    <Modal
      title={title}
      iconTitle={iconTitle}
      open={true}
      submitText={submitText}
      cancelText={cancelText}
      className={className}
      onSubmit={() => {
        if (!onSubmit) {
          return;
        }

        const result = onSubmit();

        if (result instanceof Promise) {
          result.then(r => {
            if (r !== false) {
              closeModal();
            }
          });
        } else if (result !== false) {
          closeModal();
        }
      }}
      onCancel={() => {
        onCancel?.();
        closeModal();
      }}
    >
      {Array.isArray(message) ? message.join(", ") : message}
    </Modal>
  );
};

export const infoDialog = ({
  message,
  title = "Information",
  iconTitle,
  cancelText = "OK",
  className,
}: DialogProps) => {
  return createModal({ message, title, iconTitle, cancelText, className });
};

export const confirmDialog = ({
  message,
  title = "Confirm",
  iconTitle,
  submitText = "OK",
  cancelText = "Cancel",
  className,
  onSubmit,
  onCancel,
}: DialogProps) => {
  return createModal({ message, title, iconTitle, submitText, cancelText, className, onSubmit, onCancel });
};
