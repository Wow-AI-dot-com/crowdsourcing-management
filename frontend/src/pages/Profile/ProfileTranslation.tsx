import IconTrash from "@/assets/icons/IconTrash";
import InputBase from "@/components/InputBase/InputBase";
import React, { useState } from "react";
import "./ProfileTranslation.scss";
import Button from "@/components/Button/Button";
import IconPlusProfileTranslation from "@/assets/icons/IconPlusProfileTranslation";
import ConfirmModal from "@/components/Modal/ConfirmModal";
import Switch from "@/components/Switch/Switch";
import { useUserLayout } from "@/layouts/UserLayout";

const ProfileTranslation = () => {
  const [isConfirm, setIsConFirm] = useState(false);
  const userLayout = useUserLayout();
  React.useEffect(() => {
    userLayout.setBreadcrumbs([{ label: "Personal Infomation" }]);

    return () => {
      userLayout.clearBreadcrumbs();
    };
  }, [userLayout]);

  const clickRemove = () => {
    console.log("object");
  };
  const arrayNation = [
    { id: 1, name: "VietNam" },
    { id: 2, name: "English" },
  ];
  return (
    <div className="c-profile-translation">
      <ConfirmModal
        open={isConfirm}
        title="Are you sure to delete your account?"
        onClose={() => setIsConFirm(false)}
        onClickCancel={() => setIsConFirm(false)}
        onClickRemove={clickRemove}
      />
      <div className="c-profile-translation__box">
        <div className="c-profile-translation__box-title">
          <span>Translation Pair 1</span>
          <div onClick={() => setIsConFirm(true)}>
            <IconTrash />
          </div>
        </div>
        <div className="c-profile-translation__box-input">
          <InputBase listOption={arrayNation} label="From" />
          <InputBase listOption={arrayNation} label="To" />
        </div>
        <Switch label="I can also do a reverse translation" />
      </div>
      <div className="c-profile-translation__btn">
        <Button iconPosition="left" icon={<IconPlusProfileTranslation />}>
          <div className="title">Create New Translation</div>
        </Button>
      </div>
    </div>
  );
};

export default ProfileTranslation;
