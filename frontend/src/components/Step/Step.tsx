import IconCircleChecked from "@/assets/icons/IconCircleChecked";
import IconCircleSuccess from "@/assets/icons/IconCircleSuccess";
import IconNextStep from "@/assets/icons/IconNextStep";
import "./Step.scss";

type TStep = {
  isActive: boolean;
  stepName: string;
  isLastStep: boolean;
  stepNumber: number;
  onClick: (value: number) => void;
};

export default function Step({
  isActive,
  stepName,
  isLastStep,
  stepNumber,
  onClick = () => {},
}: TStep) {
  return (
    <>
      <div
        onClick={() => onClick(stepNumber)}
        className={`menu-step__tab menu-step__tab${isActive && "--active"}`}
      >
        {isActive ? <IconCircleSuccess /> : <IconCircleChecked />}
        <span>{`${stepNumber}. ${stepName}`}</span>
      </div>
      {!isLastStep && <IconNextStep />}
    </>
  );
}
