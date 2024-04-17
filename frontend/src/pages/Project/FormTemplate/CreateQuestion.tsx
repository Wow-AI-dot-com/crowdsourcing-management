import React from "react";
import { IconGalleryAdd } from "@Assets/icons/Index";
import InputBase from "@/components/InputBase/InputBase";
import SimpleEditor from "@Components/HtmlEditor/SimpleEditor";
import { IconDelete, IconCopy } from "@Assets/icons/Index";
import Switch from "@/components/Switch/Switch";
import CreateMultipleChoice from "./CreateMultipleChoice";
import "./CreateQuestion.scss";
import { QuestionType } from "./FormTemplateCreate";
import { IdType } from "@/pages/Project/FormApply/apply";

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
  // {
  //   id: "linear-scale",
  //   name: "Linear scale",
  // },
  // {
  //   id: "file-upload",
  //   name: "File upload",
  // },
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
  onChangeTypeQuestion: (
    questionId: IdType,
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  typeQuestion: string;
  onAddImage: () => void;
  removeOption: (questionId: IdType, value: IdType) => void;
  addOption: (questionId: IdType) => void;
  onUpdateOption: (questionId: IdType, name: string, id: IdType) => void;
  question: QuestionType;
  title: string;
  onDeleteQuestion: (questionId: IdType) => void;
  onChangeRequired: (questionId: IdType, checked: boolean) => void;
  onDuplicateQuestion: (questionId: IdType) => void;
  onChangeQuestionTitle: (questionId: IdType, e: string) => void;
  updatePositionRightTool: (position: number, questionId: IdType) => void;
};

const CreateQuestion = ({
  onChangeTypeQuestion,
  typeQuestion,
  onAddImage,
  removeOption,
  addOption,
  onUpdateOption,
  question,
  onDeleteQuestion,
  onChangeRequired,
  onDuplicateQuestion,
  title,
  onChangeQuestionTitle,
  updatePositionRightTool,
}: CreateQuestionProps) => {
  const questionRef = React.useRef<HTMLDivElement>(null);
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
        return (
          <div>
            <CreateMultipleChoice
              options={question.options}
              removeOption={removeOption}
              addOption={addOption}
              onUpdateOption={onUpdateOption}
              type="multiple-choice"
              questionId={question.id}
              onClick={() => getPositionOfQuestion()}
            />
          </div>
        );
      case "checkbox":
        return (
          <div>
            <CreateMultipleChoice
              options={question.options}
              removeOption={removeOption}
              addOption={addOption}
              onUpdateOption={onUpdateOption}
              type="checkbox"
              questionId={question.id}
              onClick={() => getPositionOfQuestion()}
            />
          </div>
        );
      case "dropdown":
        return (
          <div>
            <CreateMultipleChoice
              options={question.options}
              removeOption={removeOption}
              addOption={addOption}
              onUpdateOption={onUpdateOption}
              type="dropdown"
              questionId={question.id}
              onClick={() => getPositionOfQuestion()}
            />
          </div>
        );
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

  const getPositionOfQuestion = () => {
    if (!questionRef?.current) {
      updatePositionRightTool(0, question.id);
      return;
    }
    updatePositionRightTool(questionRef.current.offsetTop, question.id);
    return;
  };

  return (
    <div
      className="create-form-question"
      ref={questionRef}
      onClick={() => getPositionOfQuestion()}
    >
      <div className="top-question">
        <div className="left-title-question">
          <SimpleEditor
            placeholder="Question title"
            value={title}
            onChange={(e) => {
              onChangeQuestionTitle(question.id, e);
              getPositionOfQuestion();
            }}
          />
        </div>
        <div className="right-title-question">
          <div onClick={onAddImage} className="add-image">
            <IconGalleryAdd />
          </div>
          <InputBase
            listOption={TYPE_QUESTION}
            onChange={(e) => {
              onChangeTypeQuestion(question.id, e);
              getPositionOfQuestion();
            }}
          />
        </div>
      </div>
      <div className="content-question">{renderContentQuestion()}</div>
      <div className="actions">
        <div
          className="action-item"
          onClick={() => onDeleteQuestion(question.id)}
        >
          <IconDelete width={20} />
        </div>
        <div
          className="action-item"
          onClick={() => onDuplicateQuestion(question.id)}
        >
          <IconCopy width={20} />
        </div>
        <div className="action-item">
          <Switch
            label="Required"
            checked={question.isRequired}
            onChange={(checked) => {
              onChangeRequired(question.id, checked);
              getPositionOfQuestion();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateQuestion;
