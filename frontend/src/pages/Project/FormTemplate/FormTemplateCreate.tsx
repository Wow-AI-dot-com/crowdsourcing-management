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
import { set } from "date-fns";

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
};

type FormTemplate = {
  title: string;
  description: string;
  questions: QuestionType[];
  id: string | number;
};

const FormTemplateCreate = () => {
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
  ) => {};

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
          ? { ...question, typeQuestion: e.target.value }
          : question
      ),
    }));
  };

  const onAddImage = () => {
    setShowUpload(true);
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
      />

      {templateForm.questions.map((question) => (
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
        />
      ))}

      <div className="right-tool">
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
