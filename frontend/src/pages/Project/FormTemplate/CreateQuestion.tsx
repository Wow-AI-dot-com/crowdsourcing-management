import React from "react";
import { IconGalleryAdd } from "@Assets/icons/Index";
import InputBase from "@/components/InputBase/InputBase";
import SimpleEditor from "@Components/HtmlEditor/SimpleEditor";
import { IconDelete, IconCopy } from "@Assets/icons/Index";
import Switch from "@/components/Switch/Switch";

import "./CreateQuestion.scss";

const TYPE_QUESTION = [
  {
    id: "short-answer",
    name: "Short answer",
  },
  {
    id: "long-answer",
    name: "Long answer",
  },
  {
    id: "multiple-choice",
    name: "Multiple choice",
  },
  {
    id: "checkbox",
    name: "Checkbox",
  },
  {
    id: "dropdown",
    name: "Dropdown",
  },
  {
    id: "linear-scale",
    name: "Linear scale",
  },
  {
    id: "file-upload",
    name: "File upload",
  },
  {
    id: "date",
    name: "Date",
  },
  {
    id: "time",
    name: "Time",
  },
];

type CreateQuestionProps = {
  onChangeTypeQuestion: (e: React.ChangeEvent<HTMLInputElement>) => void;
  typeQuestion: string;
};

const CreateQuestion = ({
  onChangeTypeQuestion,
  typeQuestion,
}: CreateQuestionProps) => {
  const renderContentQuestion = () => {
    switch (typeQuestion) {
      case "short-answer":
        return (
          <div>
            <input
              className="input-text"
              name="title"
              placeholder="Short answer text"
              disabled
            />
          </div>
        );
      case "long-answer":
        return (
          <div>
            <input
              className="input-text"
              name="title"
              placeholder="Long answer text"
              disabled
            />
          </div>
        );
      case "multiple-choice":
        return <div>multiple-choice</div>;
      case "checkbox":
        return <div>checkbox</div>;
      case "dropdown":
        return <div>dropdown</div>;
      case "linear-scale":
        return <div>linear-scale</div>;
      case "file-upload":
        return <div>file-upload</div>;
      case "date":
        return (
          <div>
            <input
              className="input-text"
              name="title"
              placeholder="Date"
              disabled
              type="date"
            />
          </div>
        );
      case "time":
        return (
          <div>
            <input
              className="input-text"
              name="title"
              placeholder="Time"
              disabled
              type="time"
            />
          </div>
        );
      default:
        return <div>short-answer</div>;
    }
  };

  return (
    <div className="create-form-question">
      <div className="top-question">
        <div className="left-title-question">
          <SimpleEditor placeholder="Question title" />
        </div>
        <div className="right-title-question">
          <IconGalleryAdd />
          <InputBase
            listOption={TYPE_QUESTION}
            onChange={onChangeTypeQuestion}
          />
        </div>
      </div>
      <div className="content-question">{renderContentQuestion()}</div>
      <div className="actions">
        <div className="action-item">
          <IconDelete width={20} />
        </div>
        <div className="action-item">
          <IconCopy width={20} />
        </div>
        <div className="action-item">
          <Switch label="Required" />
        </div>
      </div>
    </div>
  );
};

export default CreateQuestion;
