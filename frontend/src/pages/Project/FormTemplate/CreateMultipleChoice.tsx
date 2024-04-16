import React from "react";
import { OptionsType } from "@/pages/Project/FormApply/apply";
import "./CreateMultipleChoice.scss";
import { IconPlusEmailTemplate } from "@/assets/icons/Index";
import Button from "@/components/Button/Button";
import CreateOption from "./CreateOption";

type CreateMultipleChoiceProps = {
  options: OptionsType[];
  removeOption: (value: number | string) => void;
  addOption: () => void;
  onUpdateOption: (name: string, id: number | string) => void;
};

const CreateMultipleChoice = ({
  options,
  removeOption,
  addOption,
  onUpdateOption,
}: CreateMultipleChoiceProps) => {
  return (
    <div className="create-multiple-choice">
      {options.map((option, index) => (
        <CreateOption
          key={option.id}
          option={option}
          removeOption={removeOption}
          onUpdateOption={onUpdateOption}
          showDelete={options.length === 1}
          index={index}
          options={options}
        />
      ))}
      <div className="option">
        <Button
          iconPosition="right"
          icon={<IconPlusEmailTemplate />}
          type="secondary"
          className="button"
          onClick={addOption}
          size="small"
        >
          Add more option
        </Button>
      </div>
    </div>
  );
};

export default CreateMultipleChoice;
