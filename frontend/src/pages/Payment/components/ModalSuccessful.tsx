import Modal from "@/components/Modal/Modal";
import React from "react";
import "./ModalSuccessful.scss";
import Button from "@/components/Button/Button";

export interface TypeModalSuccessful {
  open: boolean;
  clickDone: () => void;
  clickSkip: () => void;
}
export default function ModalSuccessful({
  open,
  clickDone,
  clickSkip,
}: TypeModalSuccessful) {
  return (
    <Modal open={open} displayClose={false} className="c-modal-successful">
      <div className="content-modal-successful">
        <div className="content-modal-successful__title">
          Withdraw Successful!
        </div>
        <Button
          type="success"
          className="content-modal-successful__btn-done"
          onClick={clickDone}
        >
          DONE
        </Button>
        <button
          className="content-modal-successful__btn-skip"
          onClick={clickSkip}
        >
          Skip for now
        </button>
      </div>
    </Modal>
  );
}
