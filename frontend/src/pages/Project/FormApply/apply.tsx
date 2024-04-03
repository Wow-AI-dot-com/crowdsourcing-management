import React from "react";
import "./apply.scss";
import Modal from "@/components/Modal/Modal";
import InputBase from "@/components/InputBase/InputBase";
import IconAttackFile from "@/assets/icons/IconAttackFile";
export interface typeArrayOption {
  id: number;
  name: string;
}

export interface ApplyProps {
  open: boolean;
  onClose: () => void;
}

export default function Apply({ open, onClose }: ApplyProps) {
  const click = () => {
    console.log("object");
  };
  const arrayOption = [
    { id: 1, name: "France" },
    { id: 2, name: "Australia" },
    { id: 3, name: "America" },
  ];
  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Registration Form"
      onSubmit={click}
      submitText="Send"
    >
      <div className="container--apply">
        <div className="container--apply__header">
          <InputBase label="First Name" placeholder="First Name" />
          <InputBase label="Last Name" placeholder="Last Name" />
        </div>
        <div className="container--apply__phone">
          <InputBase label="Phone Number" placeholder="Phone Number" />
        </div>
        <div className="container--apply__email">
          <InputBase label="Email *" placeholder="First Name" />
        </div>
        <div className="container--apply__information">
          <InputBase
            label="Nationality"
            placeholder="Nationality"
            listOption={arrayOption}
          />
          <InputBase
            label="Language"
            placeholder="Language"
            listOption={arrayOption}
          />
        </div>
        <div className="container--apply__question">
          <InputBase label="Question number 1 ?" placeholder="Type here" />
        </div>
        <div className="container--apply__label">
          <InputBase label="label" placeholder="Input text" isMultipleLine />
        </div>
        <div className="container--apply__file">
          <span>Question number 1 ?</span>
          <label htmlFor="attack-file" className="custom-file-upload">
            <IconAttackFile />
            Attack file
          </label>
          <input id="attack-file" type="file" />
        </div>
      </div>
    </Modal>
  );
}
