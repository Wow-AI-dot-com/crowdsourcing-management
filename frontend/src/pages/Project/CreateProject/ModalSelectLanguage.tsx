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
  submit: (listActive: string[]) => void;
}
export default function ModalSelectLanguage({
  open,
  close,
  submit,
}: TypeModalSelectLanguage) {
  const [listActive, setListActive] = useState<string[]>([]);
  const handleClickActive = (name: string) => {
    if (!listActive.includes(name)) {
      setListActive((state) => [...state, name]);
    } else {
      setListActive(listActive.filter((f) => f !== name));
    }
  };

  return (
    <Modal
      open={open}
      title="Languages"
      onClose={close}
      onSubmit={() => submit(listActive)}
      submitText="Submit"
      className="modal-select-language"
    >
      <div className="c-modal-select-language__body">
        {listLanguage.map((m) => {
          return (
            <div
              className={`c-modal-select-language__item${
                listActive.includes(m.name) ? "-active" : ""
              }`}
              onClick={() => handleClickActive(m.name)}
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
