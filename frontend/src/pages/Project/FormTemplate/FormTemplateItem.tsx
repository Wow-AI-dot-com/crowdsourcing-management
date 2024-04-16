import React from "react";
import Title from "./Title";
import "./FormTemplateItem.scss";
import CreateQuestion from "./CreateQuestion";
import Upload from "@/components/Upload/Upload";
import Modal from "@/components/Modal/Modal";
import { randomString } from "@/utils/random";
import { OptionsType } from "@/pages/Project/FormApply/apply";

const TYPE_QUESTION_HAVE_OPTIONS = ["multiple-choice", "checkbox", "dropdown"];

export type QuestionType = {
  title: string;
  description: string;
  typeQuestion: string;
  options: OptionsType[];
};

const FormTemplateItem = () => {
  const [showUpload, setShowUpload] = React.useState(false);
  const [values, setValues] = React.useState<QuestionType>({
    title: "",
    description: "",
    typeQuestion: "short-answer",
    options: [],
  });

  const onSetValues = (field: string, value: string) => {
    setValues({
      ...values,
      [field]: value,
    });
  };

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSetValues(e.target.name, e.target.value);
  };

  const onchangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onSetValues(e.target.name, e.target.value);
  };

  const addOption = () => {
    const newItem = {
      name: `option ${values.options.length + 1}`,
      id: randomString(),
    };
    setValues((state) => ({
      ...state,
      options: [...state.options, newItem],
    }));
  };

  const removeOption = (id: number | string) => {
    setValues((state) => ({
      ...state,
      options: state.options.filter((option) => option.id !== id),
    }));
  };

  const onUpdateOption = (name: string, id: number | string) => {
    setValues((state) => ({
      ...state,
      options: state.options.map((option) =>
        option.id === id ? { ...option, name } : option
      ),
    }));
  };

  const onChangeTypeQuestion = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((state) => ({
      ...state,
      typeQuestion: e.target.value,
      options: TYPE_QUESTION_HAVE_OPTIONS.includes(e.target.value)
        ? state.options
        : [
            { name: "option 1", id: randomString() },
            { name: "option 2", id: randomString() },
          ],
    }));
  };

  return (
    <div id="form-template-item">
      <Modal open={showUpload} onClose={() => setShowUpload(false)}>
        <Upload describe="JPG, GIF or PNG. Max size of 800K" />
      </Modal>

      {/* <Title
        title={values.title}
        description={values.description}
        onchangeDescription={onchangeDescription}
        onchangeTitle={onChangeTitle}
      /> */}
      <CreateQuestion
        onChangeTypeQuestion={onChangeTypeQuestion}
        typeQuestion={values.typeQuestion}
        onAddImage={() => setShowUpload(true)}
        removeOption={removeOption}
        addOption={addOption}
        onUpdateOption={onUpdateOption}
        question={values}
      />
    </div>
  );
};

export default FormTemplateItem;
