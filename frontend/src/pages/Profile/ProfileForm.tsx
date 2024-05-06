import SelectDropdown from "@/components/Dropdown/SelectDropdown";
import "./Profile.scss";
import Button from "@/components/Button/Button";
import InputBase from "@/components/InputBase/InputBase";
import Upload from "@/components/Upload/Upload";
import { useLocation } from "react-router-dom";

export type TProfileForm = {
  isMatchingUserScreen?: boolean;
};
export default function ProfileForm({ isMatchingUserScreen }: TProfileForm) {
  const listOption = [
    { id: 1, name: "VietNamese" },
    { id: 2, name: "US" },
  ];

  return (
    <>
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
          <SelectDropdown
            size="small"
            options={listOption}
            label="Nation"
            placeholder="Input text"
          />
          <div style={{ display: "flex", gap: "24px" }}>
            <SelectDropdown
              size="small"
              options={listOption}
              label="First language"
            />
            <SelectDropdown
              size="small"
              options={listOption}
              label="Proficiency level"
            />
          </div>
          <div style={{ display: "flex", gap: "24px" }}>
            <SelectDropdown
              size="small"
              options={listOption}
              label="Second language"
            />
            <SelectDropdown
              size="small"
              options={listOption}
              label="Proficiency level"
            />
          </div>
          <div className="upload-cv">
            <span className="upload-cv__title">Attach your CV</span>
            <div className="upload-cv__input">
              <Upload describe="JPG, GIF or PNG. Max size of 800K" />
            </div>
          </div>
        </div>
      </div>

      {!isMatchingUserScreen && (
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
      )}
    </>
  );
}
