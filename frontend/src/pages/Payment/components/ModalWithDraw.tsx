import React, { useState } from "react";
import "./ModalWithDraw.scss";
import Modal from "@/components/Modal/Modal";
import InputBase from "@/components/InputBase/InputBase";
import Button from "@/components/Button/Button";
import IconQR from "@/assets/icons/IconQR";
import IconPrice from "@/assets/icons/IconPrice";
import IconArrowLeft from "@/assets/icons/IconArrowLeft";

const listNetWork = [
  { id: 1, name: "BNB" },
  { id: 2, name: "Polygon" },
];

export interface TypeModalWithDraw {
  open: boolean;
  clickBack: () => void;
  clickWithDraw: () => void;
  onClose: () => void;
}

export default function ModalWithDraw({
  open,
  clickBack,
  clickWithDraw,
  onClose,
}: TypeModalWithDraw) {
  const [valueOption, setValueOption] = useState("");

  const onChangeSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueOption(e.target.value);
  };
  return (
    <Modal
      open={open}
      title="Withdraw with AXB"
      className="modal-withdraw"
      onClose={onClose}
    >
      <div className="c-modal-withdraw">
        <div className="header">
          <InputBase label="Address" placeholder="Type something" />
          <div className="icon">
            <IconQR />
          </div>
        </div>
        <div>
          <InputBase
            label="Network"
            listOption={listNetWork}
            onChange={onChangeSelect}
          />
          <div className={`information-network`}>
            <div className="title">{valueOption} Smart Chain</div>
            <div className="information">
              <span>Free 1.00 USDT</span>
              <span>Minimum withdrawal 10 USDT</span>
              <span>Arrival time = 2 mins</span>
            </div>
          </div>
        </div>
        <div className="c-amount">
          <InputBase label="Withdrawal Amount" placeholder="Type something" />
          <button className="button">
            <span className="axb">AXB</span>
            <span className="max">Max</span>
          </button>
        </div>
        <div className="footer-withdraw">
          <Button
            type="white"
            iconPosition="left"
            icon={<IconArrowLeft />}
            className="footer-withdraw-btn__back"
            onClick={clickBack}
          >
            Back
          </Button>
          <Button
            iconPosition="right"
            icon={<IconPrice />}
            onClick={clickWithDraw}
          >
            {" "}
            Withdraw
          </Button>
        </div>
      </div>
    </Modal>
  );
}
