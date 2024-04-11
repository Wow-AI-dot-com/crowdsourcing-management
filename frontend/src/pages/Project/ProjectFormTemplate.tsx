import IconMessage from "@/assets/icons/IconMessage";
import IconNotePayment from "@/assets/icons/IconNotePayment";
import IconTrashProfileSettings from "@/assets/icons/IconTrashProfileSettings";
import React, { useState } from "react";
import "./ProjectFormTemplate.scss";
import IconTrashEmailTemplate from "@/assets/icons/IconTrashEmailTemplate";
import Button from "@/components/Button/Button";
import IconPlusEmailTemplate from "@/assets/icons/IconPlusEmailTemplate";
import Modal from "@/components/Modal/Modal";
import { Editor } from "@tinymce/tinymce-react";
import Dropdown from "@/components/Dropdown/Dropdown";
import IconApproveEmail from "@/assets/icons/IconApproveEmail";
import ConfirmModal from "@/components/Modal/ConfirmModal";
import AlertSuccessful from "../../components/Alert/AlertSuccessful";
import ProjectTemplateFormItem from "./components/ProjectTemplateFormItem";

const LIST_FORM_TEMPLATE = [
  { name: "Form template name 1", createdDate: "2021-09-01", id: 1 },
  { name: "Form template name 2", createdDate: "2021-09-02", id: 2 },
  { name: "Form template name 3", createdDate: "2021-09-03", id: 3 },
];

export default function ProjectFormTemplate() {
  const [isFormCreate, setIsFormCreate] = useState(false);
  const [isAlertSuccess, setIsAlertSuccess] = useState(false);
  const [isAlertSave, setIsAlertSave] = useState(false);

  const clickTrash = () => {
    setIsAlertSuccess(true);
  };
  const clickBtnModal = () => {
    setIsFormCreate(false);
    setIsAlertSave(true);
  };
  return (
    <div className="p-form-template">
      <AlertSuccessful
        open={isAlertSuccess}
        title="Form is deleted successfully"
        autoHide={() => setIsAlertSuccess(false)}
      />
      <AlertSuccessful
        open={isAlertSave}
        title="Form is added successfully"
        autoHide={() => setIsAlertSave(false)}
      />

      <div className="list_form_template">
        {LIST_FORM_TEMPLATE.map((item) => (
          <ProjectTemplateFormItem
            {...item}
            onDelete={() => null}
            onEdit={() => null}
          />
        ))}
      </div>

      <div className="p-form-template__btn">
        <Button
          iconPosition="right"
          icon={<IconPlusEmailTemplate />}
          type="secondary"
          className="button"
        >
          Add more form
        </Button>
      </div>
    </div>
  );
}
