import InputBase from "@/components/InputBase/InputBase";
import Modal from "@/components/Modal/Modal";
import Upload from "@/components/Upload/Upload";
import React from "react";
import "./ModalInvoices.scss";

const status = [
  { id: 1, name: "Done" },
  { id: 2, name: "Pending" },
  { id: 3, name: "Fail" },
];
export interface TypeModalInvoices {
  open: boolean;
  submit: () => void;
  close: () => void;
}
export default function ModalInvoices({
  submit,
  close,
  open,
}: TypeModalInvoices) {
  return (
    <Modal
      open={open}
      title="Add Invoices"
      onSubmit={submit}
      submitText="Add"
      className="modal-invoices"
      onClose={close}
    >
      <div className="c-modal-invoices">
        <InputBase placeholder="Type here" label="Job ID" />
        <InputBase placeholder="Type here" label="Client name" />
        <InputBase placeholder="Type here" label="Invoice ID" />
        <InputBase placeholder="Type here" label="Due date" />
        <div>
          <div>Attach Invoice</div>
          <Upload describe="JPG or PNG. Max size of 800K" />
        </div>
        <InputBase label="Status" listOption={status} />
      </div>
    </Modal>
  );
}
