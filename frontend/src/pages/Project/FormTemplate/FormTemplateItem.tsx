import React from "react";
import Title from "./Title";
import "./FormTemplateItem.scss";
import CreateQuestion from "./CreateQuestion";

const FormTemplateItem = () => {
  const [values, setValues] = React.useState({
    title: "",
    description: "",
    typeQuestion: "short-answer",
  });

  const onSetValues = (field: string, value: string) => {
    setValues({
      ...values,
      [field]: value,
    });
  };
  console.log(values);
  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSetValues(e.target.name, e.target.value);
  };

  const onchangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onSetValues(e.target.name, e.target.value);
  };

  return (
    <div id="form-template-item">
      {/* <Title
        title={values.title}
        description={values.description}
        onchangeDescription={onchangeDescription}
        onchangeTitle={onChangeTitle}
      /> */}
      <CreateQuestion
        onChangeTypeQuestion={(e) => {
          setValues((state) => ({ ...state, typeQuestion: e.target.value }));
          console.log(e);
        }}
        typeQuestion={values.typeQuestion}
      />
    </div>
  );
};

export default FormTemplateItem;
