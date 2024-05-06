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
import SelectDropdown from "@/components/Dropdown/SelectDropdown";

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
  onChangeTypeQuestion: (questionId: IdType, value: string) => void;
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
  updatePositionRightTool: (
    position: number,
    questionId: IdType,
    isDelete?: boolean
  ) => void;
  changeEditQuestion: (position: IdType, value: boolean) => void;
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
  changeEditQuestion,
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
              isEdit={question.isEdit}
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
              isEdit={question.isEdit}
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
              isEdit={question.isEdit}
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

  const getPositionOfQuestion = (isDelete?: boolean) => {
    changeEditQuestion(question.id, true);
    setTimeout(() => {
      if (!questionRef?.current) {
        updatePositionRightTool(0, question.id);
        return;
      }
      updatePositionRightTool(
        questionRef.current.offsetTop,
        question.id,
        isDelete
      );
    }, 100);
  };
  // useOnClickOutside(
  //   questionRef,
  //   () => question.isEdit && changeEditQuestion(question.id, false)
  // );

  return (
    <div
      className="create-form-question"
      ref={questionRef}
      onClick={() => getPositionOfQuestion()}
    >
      <div className="top-question">
        <div className="left-title-question">
          {question.isEdit ? (
            <SimpleEditor
              placeholder="Question title"
              value={title}
              onChange={(e) => {
                onChangeQuestionTitle(question.id, e);
                getPositionOfQuestion();
              }}
            />
          ) : (
            <div dangerouslySetInnerHTML={{ __html: title }} />
          )}
        </div>
        {question.isEdit && (
          <div className="right-title-question">
            <div onClick={onAddImage} className="add-image">
              <IconGalleryAdd />
            </div>
            <SelectDropdown
              size="small"
              options={TYPE_QUESTION}
              onChange={(e) => {
                onChangeTypeQuestion(question.id, e.toString());
                getPositionOfQuestion();
              }}
            />
          </div>
        )}
      </div>
      <div className="content-question">{renderContentQuestion()}</div>
      {question.isEdit && (
        <div className="actions">
          <div
            className="action-item"
            onClick={(e) => {
              e.stopPropagation();
              onDeleteQuestion(question.id);
              getPositionOfQuestion(true);
            }}
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
      )}
    </div>
  );
};

export default CreateQuestion;
