import InputBase from "@/components/InputBase/InputBase";
import Upload from "@/components/Upload/Upload";
import React from "react";
import "./EnterInformation.scss";

const listOption = [
  { id: 1, name: "VietName" },
  { id: 2, name: "US" },
];
export interface TypeEnterInformation {
  isDownLoad?: boolean;
}
export default function EnterInformation({
  isDownLoad = false,
}: TypeEnterInformation) {
  return (
    <div className="body-profile">
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
        <div className="input-pair">
          <InputBase label="First language" listOption={listOption} />
          <InputBase label="Proficiency level" listOption={listOption} />
        </div>
        <div className="input-pair">
          <InputBase label="Second language" listOption={listOption} />
          <InputBase label="Proficiency level" listOption={listOption} />
        </div>
        <div className="upload-cv">
          <span className="upload-cv__title">Attach your CV</span>
          <div className="upload-cv__input">
            {isDownLoad ? (
              <Upload
                handleClickDownLoad={() => console.log("object")}
                isDownLoad
                describe="JPG, GIF or PNG"
              />
            ) : (
              <Upload describe="JPG, GIF or PNG. Max size of 800K" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
