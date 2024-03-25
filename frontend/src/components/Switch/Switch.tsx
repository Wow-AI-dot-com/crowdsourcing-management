import React from "react";
import "./Switch.scss";

type SwitchProps = {
  onChange?: (isChecked: boolean) => void;
  checked?: boolean | undefined;
  size?: "small" | "medium" | "large";
  label?: string;
  desc?: string;
};

const Switch: React.FC<SwitchProps> = ({
  onChange,
  checked = false,
  size = "small",
  label,
  desc,
}) => {
  const handleToggle = () => {
    onChange?.(!checked);
  };

  return (
    <div className="c-switch__wrapper">
      <label className={`c-switch ${size}`}>
        <input type="checkbox" checked={checked} onChange={handleToggle} />
        <span className="slider round"></span>
      </label>
      <div className="c-switch__content">
        {label && <span className="c-switch__title">{label}</span>}
        {desc && <span className="c-switch__desc">{desc}</span>}
      </div>
    </div>
  );
};

export default Switch;
