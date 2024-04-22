import IconTrashProfileSettings from "@/assets/icons/IconTrashProfileSettings";
import Button from "@/components/Button/Button";
import Switch from "@/components/Switch/Switch";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ProfileSettings.scss";
import Modal from "@/components/Modal/Modal";
import InputBase from "@/components/InputBase/InputBase";
import ConfirmModal from "@/components/Modal/ConfirmModal";
import ConfirmSwitch from "./components/ConfirmSwitch";
import { useUserLayout } from "@/layouts/UserLayout";

const ProfileSettings = () => {
  const [isChangePassword, setIsChangePassword] = useState(false);
  const [isConfirmDelete, setIsConfirmDelete] = useState(false);
  const [isSwitch, setIsSwitch] = useState(false);
  const userLayout = useUserLayout();
  React.useEffect(() => {
    userLayout.setBreadcrumbs([{ label: "Profile" }, { label: "Setting" }]);

    return () => {
      userLayout.clearBreadcrumbs();
    };
  }, [userLayout]);

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
        content="If you decide to delete your account, keep in mind that after the procedure is complete, you will be unable to restore it, which means that all of your data, preferences, and related information will be permanently gone"
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
      <ConfirmSwitch
        title="Recruitment"
        content="Receive notifications from our recruiting team about new task opportunities that matches your profile."
      />
      <ConfirmSwitch
        title="Community Updates"
        content="Receive notifications from our recruiting team about new task opportunities that matches your profile."
      />
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
