import InputBase from "@/components/InputBase/InputBase";
import Modal from "@/components/Modal/Modal";
import Upload from "@/components/Upload/Upload";
import React, { useState } from "react";
import "./ModalInvoices.scss";
import SelectDropdown from "@/components/Dropdown/SelectDropdown";
import { IdType } from "@/pages/Project/FormApply/apply";

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
  const [value, setValue] = useState<IdType>(1);

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
        <SelectDropdown
          options={status}
          label="Status"
          size="small"
          value={value}
          onChange={(e) => setValue(e)}
        />
      </div>
    </Modal>
  );
}
