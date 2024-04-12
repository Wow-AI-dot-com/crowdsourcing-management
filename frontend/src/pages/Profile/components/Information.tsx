import {
  IconCameraProfile,
  IconEarthProfile,
  IconLanguagesProfile,
} from "@/assets/icons/Index";
import React from "react";
import "./Information.scss";
import Button from "@/components/Button/Button";

export interface TypeProfileInformation {
  img: string;
  name: string;
  email: string;
  nation: string;
  language: string;
  isButton?: boolean;
  occupation: string;
}
export default function ProfileInformation({
  img,
  name,
  email,
  nation,
  language,
  isButton,
  occupation,
}: TypeProfileInformation) {
  return (
    <div className="p-information">
      <div className="left">
        <div className="avatar">
          <img src={img} alt="avatar" className="avatar-img" />
          <div className="avatar-icon">
            <IconCameraProfile />
          </div>
        </div>
        <div className="information">
          <div className="information__name">
            {name} ({occupation})
          </div>
          <div className="information__email">{email}</div>
          <div className="information__box-nationality">
            <div className="nationality">
              <IconEarthProfile />
              <span>{nation}</span>
            </div>
            <div className="languages">
              <IconLanguagesProfile />
              <span>{language}</span>
            </div>
          </div>
        </div>
      </div>
      {isButton ? (
        <div className="right">
          <Button>Invite to Aplly</Button>
        </div>
      ) : null}
    </div>
  );
}
