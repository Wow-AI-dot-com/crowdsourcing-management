import IconMessage from "@/assets/icons/IconMessage";
import IconNotePayment from "@/assets/icons/IconEditPayment";
import {
  IconTrashProfileSettings,
  IconTrashEmailTemplate,
  IconPlusEmailTemplate,
} from "@/assets/icons/Index";
import React, { useState } from "react";
import "./ProjectEmailTemplate.scss";
import Button from "@/components/Button/Button";
import Modal from "@/components/Modal/Modal";
import { Editor } from "@tinymce/tinymce-react";
import Dropdown from "@/components/Dropdown/Dropdown";
import IconApproveEmail from "@/assets/icons/IconApproveEmail";
import AlertSuccessful from "../../components/Alert/AlertSuccessful";
import ItemEmailTemplate from "./ItemEmailTemplate/ItemEmailTemplate";
import { useUserLayout } from "@/layouts/UserLayout";
export default function ProjectEmailTemplate() {
  const [isFormCreate, setIsFormCreate] = useState(false);
  const [isAlertSuccess, setIsAlertSuccess] = useState(false);
  const [isAlertSave, setIsAlertSave] = useState(false);
  const [status, setStatus] = useState<boolean | undefined>();
  const userLayout = useUserLayout();
  React.useEffect(() => {
    userLayout.setBreadcrumbs([{ label: "Email Template" }]);

    return () => {
      userLayout.clearBreadcrumbs();
    };
  }, [userLayout]);

  const clickTrash = () => {
    setIsAlertSuccess(true);
  };
  const clickBtnModal = () => {
    setIsFormCreate(false);
    setIsAlertSave(true);
  };
  const handleEditEmail = () => {
    setIsFormCreate(true);
    setStatus(true);
  };
  const handleAddMoreEmail = () => {
    setStatus(false);
    setIsFormCreate(true);
  };
  return (
    <div className="p-email-template">
      <Modal
        open={isFormCreate}
        iconTitle={
          <div className="icon-modal-email-template">
            <IconMessage />
          </div>
        }
        onClose={() => setIsFormCreate(false)}
        title={
          <div className="title-modal-email-template">Send Automatic Email</div>
        }
      >
        <div>
          <div className="header-modal-email-template">
            <div className="left">
              Subject: <input className="input-modal-email-template" />
            </div>
            <div className="right">
              <div>{}</div>
              <div>CC</div>
              <div>BCC</div>
            </div>
          </div>
          <div className="c-dropdow-modal-email-template">
            <Dropdown
              className="dropdow"
              label="Approve email"
              iconPosition="left"
              icon={<IconApproveEmail />}
            ></Dropdown>
          </div>
          <div className="c-editor-modal-email-template">
            <Editor></Editor>
          </div>
          <div className="btn-modal-email-template">
            <Button className="btn" onClick={clickBtnModal}>
              {status ? "Save" : "Add"}
            </Button>
          </div>
        </div>
      </Modal>
      <AlertSuccessful
        open={isAlertSuccess}
        title="Email is deleted successfully"
        autoHide={() => setIsAlertSuccess(false)}
      />
      <AlertSuccessful
        open={isAlertSave}
        title="Email is added successfully"
        autoHide={() => setIsAlertSave(false)}
      />
      <ItemEmailTemplate
        subject="Reaching Out"
        name="sdfasd"
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum..."
        clickIconEdit={handleEditEmail}
        clickIconTrash={clickTrash}
      />

      <div className="p-email-template__btn">
        <Button
          iconPosition="right"
          icon={<IconPlusEmailTemplate />}
          type="secondary"
          className="button"
          onClick={handleAddMoreEmail}
        >
          Add more email
        </Button>
      </div>
    </div>
  );
}
