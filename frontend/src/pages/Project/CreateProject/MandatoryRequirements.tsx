import IconPlusEmailTemplate from "@/assets/icons/IconPlusEmailTemplate";
import Button from "@/components/Button/Button";
import InputBase from "@/components/InputBase/InputBase";
import React, { useState } from "react";
import "./MandatoryRequirements.scss";
import IconBack from "@/assets/icons/IconBack";
import IconNext from "@/assets/icons/IconNext";
import ModalSelectLanguage from "./ModalSelectLanguage";
import { useNavigate } from "react-router-dom";

const proficiencyLevel = [
  {
    id: 1,
    name: "Native",
  },
  { id: 2, name: "Advanced" },
];

const listAgree = [
  { id: 1, name: "Yes" },
  { id: 2, name: "No" },
];

const listGender = [
  {
    id: 1,
    name: "Male",
  },
  { id: 2, name: "Female" },
  { id: 3, name: "Non Binary" },
];

export default function MandatoryRequirements() {
  const [modalSelectLanguage, setModalSelectLanguage] = useState(false);
  return (
    <div className="c-mandatory-requirements">
      <ModalSelectLanguage
        open={modalSelectLanguage}
        close={() => setModalSelectLanguage(false)}
        submit={() => setModalSelectLanguage(false)}
      />
      <div className="c-mandatory-requirements__body">
        <div className="c-mandatory-requirements__body-title">
          Mandatory Requirements
        </div>
        <div className="c-mandatory-requirements__body-top">
          <InputBase label="Location" placeholder="Type country code" />
          <div className="input-pair">
            <InputBase label="Language 1" placeholder="Type language code" />
            <InputBase
              label="Proficiency level"
              listOption={proficiencyLevel}
            />
          </div>
          <div className="input-pair">
            <InputBase label="Language 2" placeholder="Type language code" />
            <InputBase
              label="Proficiency level"
              listOption={proficiencyLevel}
            />
          </div>
        </div>
        <div className="c-mandatory-requirements__body-bottom">
          <div>
            <Button
              iconPosition="right"
              icon={<IconPlusEmailTemplate />}
              type="secondary"
              onClick={() => setModalSelectLanguage(true)}
              className="btn-add-more-language"
            >
              Add more language
            </Button>
          </div>
          <InputBase
            label="Audio Transcription experience"
            listOption={listAgree}
          />
          <InputBase label="Labeling experience" listOption={listAgree} />
          <InputBase label="Translation experience" listOption={listAgree} />
          <InputBase label="Voiceover artist" listOption={listAgree} />
          <div className="input-pair">
            <InputBase label="Age" placeholder="From" />
            <InputBase placeholder="To" />
          </div>
          <InputBase label="Gender" listOption={listGender} />
        </div>
      </div>
    </div>
  );
}
