import IconNotePayment from "@/assets/icons/IconNotePayment";
import IconTrash from "@/assets/icons/IconTrash";
import React from "react";
import "./ItemPaymentMethod.scss";

export interface TypeItemPayment {
  bankName: string;
  bankNumber: string | number;
  onClickNote: () => void;
  onClickTrash: () => void;
}

export default function ItemPaymentMethod({
  bankName,
  bankNumber,
  onClickNote,
  onClickTrash,
}: TypeItemPayment) {
  return (
    <div className="item-payment">
      <div className="item-payment__bank">
        <div className="item-payment__bank-name">{bankName}</div>
        <div className="item-payment__bank-number">{bankNumber}</div>
      </div>
      <div className="item-payment__icons">
        <div onClick={onClickNote}>
          <IconNotePayment />
        </div>
        <div onClick={onClickTrash}>
          <IconTrash />
        </div>
      </div>
    </div>
  );
}
