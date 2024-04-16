import React, { useRef } from "react";
import { OptionsType } from "../FormApply/apply";
import { IconClear } from "@/assets/icons/Index";
import useOnClickOutside from "@Hooks/useOnClickOutside";
import { on } from "events";

type CreateOptionProps = {
  options: OptionsType[];
  option: OptionsType;
  removeOption: (value: number | string) => void;
  onUpdateOption: (name: string, id: number | string) => void;
  showDelete: boolean;
  index: number;
};

const CreateOption = ({
  option,
  onUpdateOption,
  removeOption,
  showDelete,
  index,
  options,
}: CreateOptionProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDuplicate, setIsDuplicate] = React.useState(false);
  const [onFocus, setOnFocus] = React.useState(false);

  useOnClickOutside(inputRef, () => {
    if (!onFocus) {
      return;
    }
    if (inputRef.current?.value === "") {
      removeOption(option.id);
    }
    if (isDuplicate) {
      const check = options.some(
        (option) => option.name === `option ${index + 1}`
      );
      if (!check) {
        onUpdateOption(`option ${index + 1}`, option.id);
        setIsDuplicate(false);
      }
    }
    setOnFocus(false);
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const check = options.some((option) => option.name === e.target.value);
    if (check) {
      setIsDuplicate(true);
    } else {
      setIsDuplicate(false);
    }
    onUpdateOption(e.target.value, option.id);
  };

  return (
    <div key={option.id} className="option">
      <input type="radio" value={option.id} disabled />
      <input
        className={`input-text ${isDuplicate ? "duplicate" : ""}`}
        name="title"
        placeholder="Option name"
        type="text"
        value={option.name}
        onChange={onChange}
        ref={inputRef}
        onClick={() => setOnFocus(true)}
      />
      {showDelete ? (
        <button className="delete-icon" onClick={() => removeOption(option.id)}>
          <IconClear />
        </button>
      ) : null}
    </div>
  );
};

export default CreateOption;
