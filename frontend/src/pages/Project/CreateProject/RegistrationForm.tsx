import React from "react";
import ProjectTemplateFormItem from "../components/ProjectTemplateFormItem";
import "./RegistrationForm.scss";

export default function RegistrationForm() {
  return (
    <div className="c-registration-form">
      <ProjectTemplateFormItem
        id={1}
        createdDate="2021-09-01"
        name="Form template name 1"
        onEdit={() => console.log("object")}
        onDelete={() => console.log("object")}
      />
    </div>
  );
}
