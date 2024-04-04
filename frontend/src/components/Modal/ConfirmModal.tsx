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
}

export default function ConfirmModal({
  open,
  onClose,
  onClickCancel,
  onClickRemove,
}: TypeConfirmModal) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      iconTitle={<IconWarningModal />}
      className="container-confirm-modal"
      title="Are you certain you want to cancel this project?"
    >
      <div>
        <div className="confirm-title">
          Everything in Tetrisly contains Auto Layout. Moreover, we’ve redefined
          all variants and we have created brand-new components.
        </div>
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
            Remove
          </Button>
        </div>
      </div>
    </Modal>
  );
}
