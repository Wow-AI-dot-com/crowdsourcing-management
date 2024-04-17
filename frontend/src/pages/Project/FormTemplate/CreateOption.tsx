import React, { useRef } from "react";
import { OptionsType } from "../FormApply/apply";
import { IconClear } from "@/assets/icons/Index";
import useOnClickOutside from "@Hooks/useOnClickOutside";
import { IdType } from "@/pages/Project/FormApply/apply";

type CreateOptionProps = {
  options: OptionsType[];
  option: OptionsType;
  removeOption: (value: IdType) => void;
  onUpdateOption: (name: string, id: IdType) => void;
  showDelete: boolean;
  index: number;
  type: string;
};

const CreateOption = ({
  option,
  onUpdateOption,
  removeOption,
  showDelete,
  index,
  options,
  type,
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

  const renderType = () => {
    switch (type) {
      case "multiple-choice":
        return <input type="radio" disabled />;
      case "checkbox":
        return <input type="checkbox" disabled />;
      case "dropdown":
        return <div>{index + 1}.&nbsp;</div>;
      default:
        return <div>{index + 1}.&nbsp;</div>;
    }
  };

  return (
    <div key={option.id} className="option">
      {renderType()}
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
