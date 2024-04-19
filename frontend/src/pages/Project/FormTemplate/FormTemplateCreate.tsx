import React from "react";
import "./FormTemplateCreate.scss";
import {
  IconAddCircle,
  IconSmallCaps,
  IconGalleryAdd,
  IconVideoAdd,
  IconRowVertical,
} from "@Assets/icons/Index";
import RightToolItem from "./RightToolItem";
import Title from "./Title";
import { randomString } from "@/utils/random";
import Upload from "@/components/Upload/Upload";
import Modal from "@/components/Modal/Modal";
import { IdType, OptionsType } from "@/pages/Project/FormApply/apply";
import CreateQuestion from "./CreateQuestion";

const RIGHT_TOOL_ITEMS = [
  {
    icon: <IconAddCircle />,
    tooltip: "Add question",
    id: "add-question",
  },
  // {
  //   icon: <IconSmallCaps />,
  //   tooltip: "Add title and description",
  //   id: "add-title-description",
  // },
  {
    icon: <IconGalleryAdd />,
    tooltip: "Add image",
    id: "add-image",
  },
  {
    icon: <IconVideoAdd />,
    tooltip: "Add video",
    id: "add-video",
  },
  // {
  //   icon: <IconRowVertical />,
  //   tooltip: "Add part",
  //   id: "add-part",
  // },
];

const TYPE_QUESTION_HAVE_OPTIONS = ["multiple-choice", "checkbox", "dropdown"];

export type QuestionType = {
  title: string;
  id: number | string;
  typeQuestion: string;
  options: OptionsType[];
  isRequired?: boolean;
  isEdit: boolean;
};

type FormTemplate = {
  title: string;
  description: string;
  questions: QuestionType[];
  id: string | number;
};

const FormTemplateCreate = () => {
  const rightToolRef = React.useRef<HTMLDivElement>(null);
  const [showUpload, setShowUpload] = React.useState(false);
  const [templateForm, setTemplateForm] = React.useState<FormTemplate>({
    title: "",
    description: "",
    id: randomString(),
    questions: [],
  });

  const handleClickRightToolItem = (id: string) => {
    switch (id) {
      case "add-question":
        const newItem = {
          title: "",
          id: randomString(),
          typeQuestion: "short-answer",
          options: [],
          isEdit: true,
        };
        setTemplateForm((state) => ({
          ...state,
          questions: [...state.questions, newItem],
        }));
        break;
      case "add-title-description":
        console.log("add-title-description");
        break;
      case "add-image":
        console.log("add-image");
        break;
      case "add-video":
        console.log("add-video");
        break;
      case "add-part":
        console.log("add-part");
        break;
      default:
        break;
    }
  };

  const onSetValues = (field: string, value: string) => {
    setTemplateForm((state) => ({
      ...state,
      [field]: value,
    }));
  };

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSetValues(e.target.name, e.target.value);
  };

  const onchangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onSetValues(e.target.name, e.target.value);
  };

  const addOption = (questionId: IdType) => {
    const oldOptions = templateForm.questions.find(
      (question) => question.id === questionId
    );
    if (!oldOptions) {
      return;
    }

    const newItem = {
      name: `option ${oldOptions.options.length + 1}`,
      id: randomString(),
    };

    setTemplateForm((state) => ({
      ...state,
      questions: state.questions.map((question) =>
        question.id === questionId
          ? { ...question, options: [...question.options, newItem] }
          : question
      ),
    }));
  };

  const removeOption = (questionId: IdType, id: number | string) => {
    const oldOptions = templateForm.questions.find(
      (question) => question.id === questionId
    );
    if (!oldOptions) {
      return;
    }
    setTemplateForm((state) => ({
      ...state,
      questions: state.questions.map((question) =>
        question.id === questionId
          ? {
              ...question,
              options: question.options.filter((option) => option.id !== id),
            }
          : question
      ),
    }));
  };

  const onUpdateOption = (
    questionId: IdType,
    name: string,
    id: number | string
  ) => {
    const question = templateForm.questions.find(
      (question) => question.id === questionId
    );
    if (!question) {
      return;
    }
    setTemplateForm((state) => ({
      ...state,
      questions: state.questions.map((question) =>
        question.id === questionId
          ? {
              ...question,
              options: question.options.map((option) =>
                option.id === id ? { ...option, name } : option
              ),
            }
          : question
      ),
    }));
  };

  const onChangeTypeQuestion = (
    questionId: IdType,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const oldOptions = templateForm.questions.find(
      (question) => question.id === questionId
    );
    if (!oldOptions) {
      return;
    }
    setTemplateForm((state) => ({
      ...state,
      questions: state.questions.map((question) =>
        question.id === questionId
          ? {
              ...question,
              typeQuestion: e.target.value,
              options: TYPE_QUESTION_HAVE_OPTIONS.includes(e.target.value)
                ? [
                    { name: "option 1", id: randomString() },
                    { name: "option 2", id: randomString() },
                  ]
                : [],
            }
          : question
      ),
    }));
  };

  const onAddImage = () => {
    setShowUpload(true);
  };

  const onDeleteQuestion = (questionId: IdType) => {
    setTemplateForm((state) => ({
      ...state,
      questions: state.questions.filter(
        (question) => question.id !== questionId
      ),
    }));
  };

  const onChangeRequired = (questionId: IdType, checked: boolean) => {
    setTemplateForm((state) => ({
      ...state,
      questions: state.questions.map((question) =>
        question.id === questionId
          ? { ...question, isRequired: checked }
          : question
      ),
    }));
  };

  const onDuplicateQuestion = (questionId: IdType) => {
    const question = templateForm.questions.find(
      (question) => question.id === questionId
    );
    if (!question) {
      return;
    }
    setTemplateForm((state) => ({
      ...state,
      questions: [
        ...state.questions,
        { ...question, id: randomString(), title: `${question.title} copy` },
      ],
    }));
  };

  const onChangeQuestionTitle = (questionId: IdType, e: string) => {
    setTemplateForm((state) => ({
      ...state,
      questions: state.questions.map((question) =>
        question.id === questionId ? { ...question, title: e } : question
      ),
    }));
  };

  const updatePositionRightTool = (
    position: number,
    questionId: IdType,
    isDelete?: boolean
  ) => {
    if (rightToolRef.current) {
      const isLastQuestion =
        templateForm.questions[templateForm.questions.length - 1].id ===
        questionId;
      if (isLastQuestion && isDelete) {
        rightToolRef.current.style.top = "0px";
      } else {
        rightToolRef.current.style.top = `${position}px`;
      }
    }
  };

  const changeEditQuestion = (questionId: IdType, isEdit: boolean) => {
    setTemplateForm((state) => ({
      ...state,
      questions: state.questions.map((question) => {
        if (question.id === questionId && question.title !== "") {
          return { ...question, isEdit };
        }
        if (question.title !== "") {
          return { ...question, isEdit: false };
        }
        return question;
      }),
    }));
  };

  return (
    <div id="form-template-create">
      <Modal open={showUpload} onClose={() => setShowUpload(false)}>
        <Upload describe="JPG, GIF or PNG. Max size of 800K" />
      </Modal>
      <Title
        title={templateForm.title}
        description={templateForm.description}
        onchangeDescription={onchangeDescription}
        onchangeTitle={onChangeTitle}
        onClick={() => {
          if (rightToolRef.current) {
            rightToolRef.current.style.top = "0px";
          }
        }}
      />

      {templateForm.questions.map((question, index) => (
        <CreateQuestion
          onChangeTypeQuestion={onChangeTypeQuestion}
          typeQuestion={question.typeQuestion}
          onAddImage={onAddImage}
          removeOption={removeOption}
          addOption={addOption}
          onUpdateOption={onUpdateOption}
          question={question}
          key={question.id}
          title={question.title}
          onDeleteQuestion={onDeleteQuestion}
          onChangeRequired={onChangeRequired}
          onDuplicateQuestion={onDuplicateQuestion}
          onChangeQuestionTitle={onChangeQuestionTitle}
          updatePositionRightTool={updatePositionRightTool}
          changeEditQuestion={changeEditQuestion}
        />
      ))}

      <div className="right-tool" ref={rightToolRef}>
        {RIGHT_TOOL_ITEMS.map((item) => (
          <RightToolItem
            key={item.id}
            icon={item.icon}
            tooltip={item.tooltip}
            onClick={handleClickRightToolItem}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default FormTemplateCreate;
