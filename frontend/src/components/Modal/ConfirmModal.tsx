import React from "react";
import Modal from "./Modal";
import Button from "../Button/Button";
import "./ConfirmModal.scss";
import IconWarningModal from "@/assets/icons/IconWarningModal";

export interface TypeConfirmModal {
  open: boolean;
  onClose: () => void;
  onClickCancel: () => void;
  onClickRemove: () => void;
  title: string;
  content?: string;
}

export default function ConfirmModal({
  open,
  onClose,
  onClickCancel,
  onClickRemove,
  title,
  content,
}: TypeConfirmModal) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      iconTitle={<IconWarningModal />}
      className="container-confirm-modal"
      title={title}
    >
      {content && <div className="confirm-title">{content}</div>}

      <div className="confirm__btn">
        <Button
          className="confirm__btn-cancel"
          type="secondary"
          onClick={onClickCancel}
        >
          Cancel
        </Button>
        <Button
          className="confirm__btn-remove"
          type="hot"
          onClick={onClickRemove}
        >
          Delete
        </Button>
      </div>
    </Modal>
  );
}
