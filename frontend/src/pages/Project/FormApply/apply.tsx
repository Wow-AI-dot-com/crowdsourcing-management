import React from "react";
import "./apply.scss";
import Modal from "@/components/Modal/Modal";
import InputBase from "@/components/InputBase/InputBase";
import IconAttackFile from "@/assets/icons/IconAttackFile";
import RadioSimpleProps from "@/components/RadioSimple";
import SelectDropdown from "@/components/Dropdown/SelectDropdown";

export type IdType = number | string;
export interface OptionsType {
  id: IdType;
  name: string;
}

export interface ApplyProps {
  open: boolean;
  onClose?: () => void;
  onSubmit?: () => void;
}

export default function Apply({ open, onClose, onSubmit }: ApplyProps) {
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
      onSubmit={onSubmit}
      submitText="Send"
    >
      <div className="container--apply">
        <div className="container--apply__question">
          <InputBase label="Question number 1 ?" placeholder="Type here" />
        </div>
        <div className="container--apply__question">
          <InputBase label="Question number 2 ?" placeholder="Type here" />
        </div>

        <div className="container--apply__question">
          <RadioSimpleProps
            label="Question number 3 ?"
            options={[
              { id: 1, name: "Option 1" },
              { id: 2, name: "Option 2" },
              { id: 3, name: "Option 3" },
            ]}
            onChange={() => {}}
            value=""
            id="question3"
          />
        </div>

        <div className="container--apply__label">
          <InputBase
            label="Question number 4 ?"
            placeholder="Input text"
            isMultipleLine
          />
        </div>
        <div className="container--apply__information">
          <SelectDropdown
            size="small"
            label="Question number 5 ?"
            placeholder="Nationality"
            options={arrayOption}
          />
        </div>
        <div className="container--apply__file">
          <span>Question number 6 ?</span>
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
