import InputBase from "@/components/InputBase/InputBase";
import Upload from "@/components/Upload/Upload";
import "./EnterInformation.scss";
import Checkbox from "@/components/Checkbox/Checkbox";
import { IconEditThick } from "@/assets/icons/Index";
import { Link, useLocation } from "react-router-dom";

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
  const location = useLocation();
  const isMatchingUsers = location?.state?.isMatchingUser || false;
  const listAgree = [
    { id: 1, name: "No" },
    { id: 2, name: "Yes" },
  ];
  const listAreYou = [
    {
      id: 1,
      name: "A non-USA individual",
    },
    { id: 2, name: "USA individual/ entity" },
    {
      id: 3,
      name: "Non-USA entity (only choose this if you have a valid tax ID)",
    },
  ];
  return (
    <div className={`enter-information ${!isMatchingUsers ? "line" : ""}`}>
      <div className="body-profile">
        <div className="left">
          <InputBase label="Name" placeholder="Input text" />
          <InputBase
            label="Do you have experience with data labeling such as image annotation, video annotation, etc?"
            listOption={listAgree}
          />
          <InputBase
            label="Do you have experience with audio transcription?"
            placeholder="Input text"
            listOption={listAgree}
          />
          {!isMatchingUsers ? (
            <div className="translate-input-link">
              <div>Do you have experience with translation tasks?</div>
              <Link to="/profile/translation">
                <IconEditThick />
              </Link>
            </div>
          ) : null}

          <div className={`are-you${isMatchingUsers ? "-hide" : ""}`}>
            <div className="are-you-title">Are you:</div>
            <div className="are-you-checkbox">
              {listAreYou.map((m) => {
                return (
                  <div className="are-you-checkbox-item">
                    <Checkbox size="sm" />{" "}
                    <div key={m.id} className="are-you-checkbox-item__name">
                      {m.name}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
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
          <div className={`upload-cv${isMatchingUsers ? "-hide" : ""}`}>
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
      <div className={`upload-cv${!isMatchingUsers ? "-hide" : ""}`}>
        <span className="upload-cv__title">Attach your CV</span>
        <div className="upload-cv__input">
          <Upload
            handleClickDownLoad={() => console.log("object")}
            isDownLoad
            describe="JPG, GIF or PNG"
          />
        </div>
      </div>
    </div>
  );
}
