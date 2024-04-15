import React from "react";
import "./Profile.scss";
import Button from "@/components/Button/Button";
import IconCameraProfile from "@/assets/icons/IconCameraProfile";
import IconEarthProfile from "@/assets/icons/IconEarthProfile";
import IconLanguagesProfile from "@/assets/icons/IconLanguagesProfile";
import InputBase from "@/components/InputBase/InputBase";
import IconUploadProfile from "@/assets/icons/IconUploadProfile";
import Upload from "@/components/Upload/Upload";
import Information from "./components/Information";
import EnterInformation from "./components/EnterInformation";

export default function Profile() {
  return (
    <div className="c-profile">
      <Information
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPfO37MK81JIyR1ptwqr_vYO3w4VR-iC2wqQ&s"
        email="user@wow-ai.com"
        name="User01"
        language="VietNamese, English"
        nation="VietNam"
        occupation="Freelancer"
      />
      <div className="line"></div>
      <EnterInformation />
      <div className="c-btn">
        <Button type="success" className="btn-profile">
          Save
        </Button>
      </div>
    </div>
  );
}
