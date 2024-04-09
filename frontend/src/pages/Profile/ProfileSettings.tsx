import IconTrashProfileSettings from "@/assets/icons/IconTrashProfileSettings";
import Button from "@/components/Button/Button";
import Switch from "@/components/Switch/Switch";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ProfileSettings.scss";
import Modal from "@/components/Modal/Modal";
import InputBase from "@/components/InputBase/InputBase";
import ConfirmModal from "@/components/Modal/ConfirmModal";

const ProfileSettings = () => {
  const [isChangePassword, setIsChangePassword] = useState(false);
  const [isConfirmDelete, setIsConfirmDelete] = useState(false);
  const [isSwitch, setIsSwitch] = useState(false);
  const clickRemoveDelete = () => {
    console.log("object");
  };
  return (
    <div className="p-settings">
      <Modal
        open={isChangePassword}
        title="Change password"
        className="modal-change-password"
        onClose={() => setIsChangePassword(false)}
      >
        <div className="change-password__inputs">
          <InputBase placeholder="Input text" label="New password" />
          <InputBase placeholder="Input text" label="Confirm password" />
        </div>
        <div className="change-password__btn">
          <Button type="success">Save</Button>
        </div>
      </Modal>
      <ConfirmModal
        open={isConfirmDelete}
        title="Are you sure to delete your account?"
        onClickRemove={clickRemoveDelete}
        onClose={() => setIsConfirmDelete(false)}
        onClickCancel={() => setIsConfirmDelete(false)}
      />
      <div className="p-settings__header">
        <div className="p-settings__header-title">Change password</div>
        <div className="p-settings__header-content">
          Click the button to be taken to the change password page.
        </div>
        <div className="p-settings__header-btn">
          <Button onClick={() => setIsChangePassword(true)}>
            Change Password
          </Button>
        </div>
      </div>
      <div className="p-settings__recruitment">
        <div className="p-settings__recruitment-title">Recruitment</div>
        <div className="p-settings__recruitment-content">
          Receive notifications from our recruiting team about new task
          opportunities that matches your profile.
        </div>
        <Switch label="Email" />
      </div>
      <div className="p-settings__updates">
        <div className="p-settings__updates-title">Community Updates</div>
        <div className="p-settings__updates-content">
          Receive notifications from our recruiting team about new task
          opportunities that matches your profile.
        </div>
        <Switch label="Email" />
      </div>
      <div className="p-settings__link">
        <div className="p-settings__link-title">Terms & Consent</div>
        <Link to="#" className="p-settings__link-text">
          Review all the terms, policy, consent forms and privacy documents.
        </Link>
      </div>
      <div className="p-settings__form-delete">
        <div className="p-settings__form-delete-title">Delete your account</div>
        <div className="p-settings__form-delete-btn">
          <Button
            iconPosition="left"
            type="hot"
            icon={<IconTrashProfileSettings />}
            onClick={() => setIsConfirmDelete(true)}
          >
            <div>Delete</div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
