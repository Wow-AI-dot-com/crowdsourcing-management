import IconMessage from "@/assets/icons/IconMessage";
import IconNotePayment from "@/assets/icons/IconNotePayment";
import IconTrashProfileSettings from "@/assets/icons/IconTrashProfileSettings";
import React, { useState } from "react";
import "./ProjectEmailTemplate.scss";
import IconTrashEmailTemplate from "@/assets/icons/IconTrashEmailTemplate";
import Button from "@/components/Button/Button";
import IconPlusEmailTemplate from "@/assets/icons/IconPlusEmailTemplate";
import Modal from "@/components/Modal/Modal";
import { Editor } from "@tinymce/tinymce-react";
import Dropdown from "@/components/Dropdown/Dropdown";
import IconApproveEmail from "@/assets/icons/IconApproveEmail";
import ConfirmModal from "@/components/Modal/ConfirmModal";
import AlertSuccessful from "./AlertSuccessful";
export default function ProjectEmailTemplate() {
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
    <div className="p-email-template">
      <Modal
        open={isFormCreate}
        iconTitle={
          <div className="icon-modal">
            <IconMessage />
          </div>
        }
        onClose={() => setIsFormCreate(false)}
        title={<div className="title-modal">Send Automatic Email</div>}
      >
        <div>
          <div className="header">
            <div className="left">
              Subject: <input className="input-modal" />
            </div>
            <div className="right">
              <div>{}</div>
              <div>CC</div>
              <div>BCC</div>
            </div>
          </div>
          <div className="c-dropdow">
            <Dropdown
              className="dropdow"
              label="Approve email"
              iconPosition="left"
              icon={<IconApproveEmail />}
            ></Dropdown>
          </div>
          <div className="c-editor">
            <Editor></Editor>
          </div>
          <div className="btn-modal">
            <Button className="btn" onClick={clickBtnModal}>
              Save
            </Button>
          </div>
        </div>
      </Modal>
      <AlertSuccessful
        open={isAlertSuccess}
        title="Email is deleted successfully"
      />
      <AlertSuccessful open={isAlertSave} title="Email is added successfully" />
      <div className="p-email-template__box">
        <div className="p-email-template__box-header">
          <div className="left">
            <div className="icon">
              <IconMessage />
            </div>
            <span>Approve Email</span>
          </div>
          <div className="right">
            <div onClick={() => setIsFormCreate(true)}>
              <IconNotePayment />
            </div>
            <div onClick={clickTrash}>
              <IconTrashEmailTemplate />
            </div>
          </div>
        </div>
        <div className="p-email-template__box-body">
          Subject: <span>Reaching Out</span>
        </div>
        <div className="p-email-template__box-footer">
          <div className="title">
            Hey <span className="text">First Name ,</span>
          </div>
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum...
          </span>
        </div>
      </div>
      <div className="p-email-template__btn">
        <Button
          iconPosition="right"
          icon={<IconPlusEmailTemplate />}
          type="secondary"
          className="button"
          onClick={() => setIsFormCreate(true)}
        >
          Add more email
        </Button>
      </div>
    </div>
  );
}
