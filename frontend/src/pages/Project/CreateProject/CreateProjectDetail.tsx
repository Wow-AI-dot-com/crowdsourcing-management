import IconCalendarCreatePJ from "@/assets/icons/IconCalendarCreatePJ";
import IconClockCreatePJ from "@/assets/icons/IconClockCreatePJ";
import IconDownload from "@/assets/icons/IconDownload";
import Checkbox from "@/components/Checkbox/Checkbox";
import HtmlEditor from "@/components/HtmlEditor/HtmlEditor";
import InputBase from "@/components/InputBase/InputBase";
import Upload from "@/components/Upload/Upload";
import React, { useState } from "react";
import "./CreateProjectDetail.scss";
import SelectDropdown from "@/components/Dropdown/SelectDropdown";
interface Option {
  id: number;
  name: string;
}

interface CheckboxOption {
  label: string;
  id: number;
}
const listOption: Option[] = [
  { id: 1, name: "Data collection" },
  { id: 2, name: "Annotation Projects" },
  { id: 3, name: "Transcription" },
  { id: 4, name: "Crowd sourcing" },
];

const categoryCheckboxes: Record<string, CheckboxOption[]> = {
  "Data collection": [
    { label: "Image collection", id: 1 },
    { label: "Audio collection", id: 2 },
    { label: "Video collection", id: 3 },
    { label: "Document collection", id: 4 },
    { label: "Text collection", id: 5 },
    { label: "OTS datasets collection", id: 6 },
    { label: "Other data collection", id: 7 },
  ],
  "Annotation Projects": [
    { label: "Image Annotation", id: 1 },
    { label: "Text annotation", id: 2 },
    { label: "Video annotation", id: 3 },
  ],
  Transcription: [
    { label: "Audio transcription", id: 1 },
    { label: "Video transcription", id: 2 },
    { label: "Image transcription", id: 3 },
  ],
};

export default function CreateProjectDetail() {
  const [selectedCategory, setSelectedCategory] = useState<
    string | number | null
  >("Data collection");
  function generateUid() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const paddedHours = hours.toString().padStart(2, "0");
    const paddedMinutes = minutes.toString().padStart(2, "0");
    const paddedSeconds = seconds.toString().padStart(2, "0");
    const timeString = `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
    const unitID = parseInt(timeString.replace(/:/g, ""), 10);
    return unitID;
  }
  return (
    <div className="create-container__wrapper">
      <div className="project-name">
        <InputBase label="Project’s name" placeholder="Input text" />
        <div className="project-name--field-id">
          <span>ID: {generateUid()}</span>
        </div>
      </div>
      {/* {renderContent()} */}
      <div className="project-timeline">
        <label id="checkOneTime">
          <div className="project-timeline--block">
            <div className="project-timeline--block__title">
              <IconClockCreatePJ />
              One-time task
            </div>
            <input name="tickInputRadio" type="radio" id="checkOneTime" />
          </div>
        </label>
        <label id="checkLongTerm">
          <div className="project-timeline--block">
            <div className="project-timeline--block__title">
              <IconCalendarCreatePJ />
              Long term task
            </div>
            <input name="tickInputRadio" type="radio" id="checkLongTerm" />
          </div>
        </label>
      </div>

      <div className="project-category">
        <SelectDropdown
          size="small"
          label="Project category"
          placeholder="Select category"
          options={listOption}
          onChange={(e) => setSelectedCategory(e)}
        />
        <div className="project-category--wrapper">
          <div className="project-category--wrapper__columns">
            {selectedCategory &&
              selectedCategory !== "Crowd sourcing" &&
              categoryCheckboxes[selectedCategory]?.map((checkbox) => (
                <Checkbox
                  key={checkbox.id}
                  size="sm"
                  label={checkbox.label}
                  classNameLabel="label-category"
                />
              ))}
          </div>
        </div>
      </div>

      <div className="project-description">
        <div className="project-description__title">
          <span>Job description</span>
          <HtmlEditor />
        </div>
      </div>

      <div className="project-contract">
        <div className="project-contract--contract-box">
          <span className="project-contract--contract-box__title">
            Contract for vendors
          </span>
          <Upload describe="PDF or Word. Max size of 500Mb" />
          <div className="project-contract--contract-box--download">
            <IconDownload />
            <span className="txt">Download contract template</span>
          </div>
        </div>
      </div>
      <div className="project-upload">
        <div className="project-upload--upload-box">
          <span>
            Upload all project-related docs here (for internal storage)
          </span>
          <div className="project-upload--upload-box__input">
            <Upload describe="PDF or Word. Max size of 500Mb" />
          </div>
        </div>
      </div>
      <div className="project-upload">
        <div className="project-upload--upload-box">
          <span>
            Upload Guideline (but only show for users who pass the test)
          </span>
          <div className="project-upload--upload-box__input">
            <Upload describe="PDF or Word. Max size of 500Mb" />
          </div>
        </div>
      </div>

      <div className="project-rate">
        <div className="project-rate__title">
          <p>Rate Unit</p>
          <span>Total amount the applier will see</span>
        </div>
        <div className="project-rate__price">
          <InputBase placeholder="$20.00" />
          <span>/task</span>
        </div>
      </div>
    </div>
  );
}
