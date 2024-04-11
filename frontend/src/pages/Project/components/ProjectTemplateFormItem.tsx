import React from "react";
import {
  IconNotePayment,
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
        <div>
          <IconFormTemplate />
          <div>
            <div>{name}</div>
            <div>Created {createdDate}</div>
          </div>
        </div>
      </div>
      <div className="right-part">
        <div onClick={() => onEdit(id)}>
          <IconNotePayment />
        </div>
        <div onClick={() => onDelete(id)}>
          <IconTrashEmailTemplate />
        </div>
      </div>
    </div>
  );
};

export default ProjectTemplateFormItem;
