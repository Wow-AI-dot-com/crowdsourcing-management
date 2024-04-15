import React from "react";
import {
  IconEditPayment,
  IconTrashEmailTemplate,
  IconFormTemplate,
} from "@Assets/icons/Index";
import "./ProjectTemplateFormItem.scss";

type ProjectTemplateFormItemProps = {
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  id: number;
  name: string;
  createdDate: string;
};

const ProjectTemplateFormItem = ({
  onEdit,
  onDelete,
  id,
  name,
  createdDate,
}: ProjectTemplateFormItemProps) => {
  return (
    <div className="project-template-form-item">
      <div className="left-part">
        <IconFormTemplate />
        <div className="text-content">
          <div className="name">{name}</div>
          <div className="created-date">Created {createdDate}</div>
        </div>
      </div>
      <div className="right-part">
        <div onClick={() => onEdit(id)} className="icon edit">
          <IconEditPayment />
        </div>
        <div onClick={() => onDelete(id)} className="icon delete">
          <IconTrashEmailTemplate />
        </div>
      </div>
    </div>
  );
};

export default ProjectTemplateFormItem;
