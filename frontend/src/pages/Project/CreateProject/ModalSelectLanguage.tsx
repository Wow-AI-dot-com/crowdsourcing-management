import Modal from "@/components/Modal/Modal";
import React, { useState } from "react";
import "./ModalSelectLanguage.scss";

const listLanguage = [
  { id: 1, name: "VietNamese" },
  { id: 2, name: "English" },
  { id: 3, name: "French" },
  { id: 4, name: "German" },
];

export interface TypeModalSelectLanguage {
  open: boolean;
  close: () => void;
  submit: () => void;
}
export default function ModalSelectLanguage({
  open,
  close,
  submit,
}: TypeModalSelectLanguage) {
  const [listActive, setListActive] = useState<number[]>([]);
  const handleClickActive = (id: number) => {
    if (listActive.find((f) => f === id) === undefined) {
      setListActive((state) => [...state, id]);
    } else {
      setListActive(listActive.filter((f) => f !== id));
    }
  };

  return (
    <Modal
      open={open}
      title="Languages"
      onClose={close}
      onSubmit={submit}
      submitText="Submit"
      className="modal-select-language"
    >
      <div className="c-modal-select-language__body">
        {listLanguage.map((m) => {
          return (
            <div
              className={`c-modal-select-language__item${
                listActive.includes(m.id) ? "-active" : ""
              }`}
              onClick={() => handleClickActive(m.id)}
              key={m.id}
            >
              {m.name}
            </div>
          );
        })}
      </div>
    </Modal>
  );
}
