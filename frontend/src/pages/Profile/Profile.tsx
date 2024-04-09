import React from "react";
import "./Profile.scss";
import Button from "@/components/Button/Button";
import IconCameraProfile from "@/assets/icons/IconCameraProfile";
import IconEarthProfile from "@/assets/icons/IconEarthProfile";
import IconLanguagesProfile from "@/assets/icons/IconLanguagesProfile";
import InputBase from "@/components/InputBase/InputBase";
import IconUploadProfile from "@/assets/icons/IconUploadProfile";
import Upload from "@/components/Upload/Upload";

export default function Profile() {
  const arrayLanguages = ["Vietnamese", " English"];
  const listOption = [
    { id: 1, name: "VietName" },
    { id: 2, name: "US" },
  ];

  return (
    <div className="c-profile">
      <div className="header">
        <div className="header-avatar">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPfO37MK81JIyR1ptwqr_vYO3w4VR-iC2wqQ&s"
            alt=""
            className="header-avatar-img"
          />
          <div className="header-avatar-icon">
            <IconCameraProfile />
          </div>
        </div>
        <div className="header-information">
          <div className="header-information__name">User01 (Freelancer)</div>
          <div className="header-information__email">user@wow-ai.com </div>
          <div className="header-information__box-nationality">
            <div className="nationality">
              <IconEarthProfile />
              <span>Viet Name</span>
            </div>
            <div className="languages">
              <IconLanguagesProfile />
              <span>{arrayLanguages.toString()}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="body">
        <div className="left">
          <InputBase label="First Name" placeholder="Input text" />
          <InputBase label="Last name" placeholder="Input text" />
          <InputBase
            label="Phone number"
            placeholder="Input text"
            type="number"
          />
          <InputBase
            label="About your self"
            placeholder="Input text"
            isMultipleLine
          />
        </div>
        <div className="right">
          <InputBase
            label="Nation"
            placeholder="Input text"
            listOption={listOption}
          />
          <div style={{ display: "flex", gap: "24px" }}>
            <InputBase label="First language" listOption={listOption} />
            <InputBase label="Proficiency level" listOption={listOption} />
          </div>
          <div style={{ display: "flex", gap: "24px" }}>
            <InputBase label="Second language" listOption={listOption} />
            <InputBase label="Proficiency level" listOption={listOption} />
          </div>
          <div className="upload-cv">
            <span className="upload-cv__title">Attach your CV</span>
            <div className="upload-cv__input">
              <Upload describe="JPG, GIF or PNG. Max size of 800K" />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          minWidth: "100px",
        }}
      >
        <Button type="success" className="btn-profile">
          Save
        </Button>
      </div>
    </div>
  );
}
