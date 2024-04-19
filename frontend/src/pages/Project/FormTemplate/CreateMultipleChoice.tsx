import React from "react";
import { OptionsType } from "@/pages/Project/FormApply/apply";
import "./CreateMultipleChoice.scss";
import { IconPlusEmailTemplate } from "@/assets/icons/Index";
import Button from "@/components/Button/Button";
import CreateOption from "./CreateOption";
import { IdType } from "@/pages/Project/FormApply/apply";

type CreateMultipleChoiceProps = {
  options: OptionsType[];
  removeOption: (questionId: IdType, value: IdType) => void;
  addOption: (questionId: IdType) => void;
  onUpdateOption: (questionId: IdType, name: string, id: IdType) => void;
  type: string;
  questionId: IdType;
  onClick: () => void;
  isEdit: boolean;
};

const CreateMultipleChoice = ({
  options,
  removeOption,
  addOption,
  onUpdateOption,
  type,
  questionId,
  onClick,
  isEdit,
}: CreateMultipleChoiceProps) => {
  return (
    <div className="create-multiple-choice" onClick={onClick}>
      {options.map((option, index) => (
        <CreateOption
          key={option.id}
          option={option}
          removeOption={(optionId) => removeOption(questionId, optionId)}
          onUpdateOption={(name: string, optionId: IdType) =>
            onUpdateOption(questionId, name, optionId)
          }
          showDelete={options.length > 1}
          index={index}
          options={options}
          type={type}
        />
      ))}
      {isEdit && (
        <div className="option">
          <Button
            iconPosition="right"
            icon={<IconPlusEmailTemplate />}
            type="secondary"
            className="button"
            onClick={() => addOption(questionId)}
            size="small"
          >
            Add more option
          </Button>
        </div>
      )}
    </div>
  );
};

export default CreateMultipleChoice;
