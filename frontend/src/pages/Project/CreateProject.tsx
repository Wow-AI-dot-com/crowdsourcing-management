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
import React, { useState } from "react";
import { useUserLayout } from "@/layouts/UserLayout";
import { useNavigate } from "react-router-dom";
import CreateProjectDetail from "./CreateProject/CreateProjectDetail";
import MandatoryRequirements from "./CreateProject/MandatoryRequirements";
import RegistrationForm from "./CreateProject/RegistrationForm";
import CreateProjectEmail from "./CreateProject/CreateProjectEmail";

const listStep = [
  { name: "Project detail", id: 1 },
  { name: "User detail", id: 2 },
  { name: "Registration form", id: 3 },
  { name: "Email", id: 4 },
];

const CreateProject = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    "Data collection"
  );
  const userLayout = useUserLayout();
  React.useEffect(() => {
    userLayout.setBreadcrumbs([{ label: "Create a new project" }]);

    return () => {
      userLayout.clearBreadcrumbs();
    };
  }, [userLayout]);

  const handleClickBack = () => {
    if (currentStep === 1) {
      return;
    }
    setCurrentStep((state) => state - 1);
  };

  const handleClickNext = () => {
    setCurrentStep((state) => state + 1);
  };

  function renderContent() {
    switch (currentStep) {
      case 1:
        return <CreateProjectDetail />;

      case 2:
        return <MandatoryRequirements />;
      case 3:
        return <RegistrationForm />;
      case 4:
        return <CreateProjectEmail />;
      default:
        break;
    }
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
      {renderContent()}
      <div className="footer">
        <div className="footer--back" onClick={handleClickBack}>
          <IconBack />
          <span>Back</span>
        </div>
        <div className="footer--next">
          <Button size="small" className="btn-next" onClick={handleClickNext}>
            Next
            <IconNext />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateProject;
