import Modal from "@/components/Modal/Modal";
import React from "react";
import "./AddPayment.scss";
import InputBase from "@/components/InputBase/InputBase";

export interface TypeAddPayment {
  onClose: () => void;
  open: boolean;
  onSubmit: () => void;
}

export default function AddPayment({
  onClose,
  open,
  onSubmit,
}: TypeAddPayment) {
  return (
    <Modal
      open={open}
      title="Add payment"
      onClose={onClose}
      onSubmit={onSubmit}
      submitText="Create"
    >
      <div className="container--addpayment">
        <div className="container--addpayment__header">
          <div className="container--addpayment__header-box-radio">
            <input name="tickInputRadio" type="radio" id="bankTransfer" />
            <label htmlFor="bankTransfer">Bank Transfer</label>
          </div>
          <div className="container--addpayment__header-box-radio">
            <input name="tickInputRadio" type="radio" id="payoneer" />
            <label htmlFor="payoneer">Payoneer</label>
          </div>
          <div className="container--addpayment__header-box-radio">
            <input name="tickInputRadio" type="radio" id="paypal" />
            <label htmlFor="paypal">Paypal</label>
          </div>
        </div>
        <div className="container--addpayment__body">
          <InputBase label="Name of the recipient" placeholder="Input text" />
          <InputBase label="Email" placeholder="Input text" type="email" />
          <InputBase label="Bank name" placeholder="Input text" />
          <InputBase label="IBAN" placeholder="Input text" />
          <InputBase label="Account number" placeholder="Input text" />
        </div>
      </div>
    </Modal>
  );
}
