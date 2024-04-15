import React from "react";
import Title from "./Title";
import "./FormTemplateItem.scss";

const FormTemplateItem = () => {
  const [values, setValues] = React.useState({
    title: "",
    description: "",
  });

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div id="form-template-item">
      <Title
        title={values.title}
        description={values.description}
        onchangeDescription={onChangeTitle}
        onchangeTitle={onChangeTitle}
      />
    </div>
  );
};

export default FormTemplateItem;
