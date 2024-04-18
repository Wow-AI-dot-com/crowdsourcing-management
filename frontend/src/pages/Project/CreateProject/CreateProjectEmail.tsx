import React from "react";
import ItemEmailTemplate from "../ItemEmailTemplate/ItemEmailTemplate";
import "./CreateProjectEmail.scss";
import ProjectEmailTemplate from "../ProjectEmailTemplate";

export default function CreateProjectEmail() {
  return (
    <div className="c-project-email">
      <ProjectEmailTemplate />
    </div>
  );
}
