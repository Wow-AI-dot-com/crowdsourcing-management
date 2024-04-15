import "./CreateProject.scss";
import InputBase from "@/components/InputBase/InputBase";
import Checkbox from "@/components/Checkbox/Checkbox";
import Upload from "@/components/Upload/Upload";
import IconBack from "@/assets/icons/IconBack";
import IconNext from "@/assets/icons/IconNext";
import Button from "@/components/Button/Button";
import HtmlEditor from "@/components/HtmlEditor/HtmlEditor";
import IconClockCreatePJ from "@/assets/icons/IconClockCreatePJ";
import IconCalendarCreatePJ from "@/assets/icons/IconCalendarCreatePJ";
import IconDownload from "@/assets/icons/IconDownload";
import Step from "@/components/Step/Step";
import { useState } from "react";

const listOption = [{ id: 1, name: "Data collection" },
  { id: 2, name: "Annotation Projects" },
  { id: 3, name: "Transcription" },
  { id: 4, name: "Crowd sourcing" },
];

const listStep = [
  { name: "Project detail", id: 1 },
  { name: "Registration form", id: 2 },
  { name: "Email", id: 3 },
];

const CreateProject = () => {
  const [currentStep, setCurrentStep] = useState(1);

  function generateUid() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const paddedHours = hours.toString().padStart(2, '0');
    const paddedMinutes = minutes.toString().padStart(2, '0');
    const paddedSeconds = seconds.toString().padStart(2, '0');
    const timeString = `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
    const unitID = parseInt(timeString.replace(/:/g, ''), 10);
    return unitID;
  }

  return (
    <div className="create-project">
      <div className="menu-step">
        {listStep.map((step, index) => (
          <Step
            key={step.id}
            onClick={() => setCurrentStep(step.id)}
            isLastStep={index === listStep.length - 1}
            isActive={currentStep === step.id}
            stepName={step.name}
            stepNumber={step.id}
          />
        ))}
      </div>
      <div className="create-container__wrapper">
        <div className="project-name">
          <InputBase label="Project’s name" placeholder="Input text" />
          <div className="project-name--field-id">
            <span>ID: {generateUid()}</span>
          </div>
        </div>

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
          <InputBase
            listOption={listOption}
            label="Project category"
            placeholder="Input text"
          />
          <div className="project-category--wrapper">
            <div className="project-category--wrapper__columns">
              <Checkbox
                size="sm"
                label="Image collection"
                classNameLabel="label-category"
              />
              <Checkbox
                size="sm"
                label="Audio collection"
                classNameLabel="label-category"
              />
              <Checkbox
                size="sm"
                label="Video collection"
                classNameLabel="label-category"
              />
            </div>
            <div className="project-category--wrapper__columns">
              <Checkbox
                size="sm"
                label="Text collection"
                classNameLabel="label-category"
              />
              <Checkbox
                size="sm"
                label="OTS datasets collection"
                classNameLabel="label-category"
              />
              <Checkbox
                size="sm"
                label="Other data collection"
                classNameLabel="label-category"
              />
            </div>
            <div className="project-category--wrapper__columns">
              <Checkbox
                size="sm"
                label="Document collection"
                classNameLabel="label-category"
              />
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

      <div className="footer">
        <div className="footer--back">
          <IconBack />
          <span>Back</span>
        </div>
        <div className="footer--next">
          <Button size="small" className="btn-next">
            Next
            <IconNext />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateProject;
