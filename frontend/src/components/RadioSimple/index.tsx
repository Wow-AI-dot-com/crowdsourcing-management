import React from "react";
import "./index.scss";

type RadioSimpleProps = {
  label: string;
  options: { id: number; name: string }[];
  onChange: (value: string) => void;
  value: string;
  id: string;
};
const RadioSimple = ({
  label,
  options,
  onChange,
  value,
  id,
}: RadioSimpleProps) => {
  return (
    <div className="radio-group-simple">
      <label className="c-input-base__label">
        <span>{label}</span>
      </label>
      <div className="wrap-list-radio">
        {options.map((option) => (
          <div key={option.id} className="c-input-radio-item">
            <input
              type="radio"
              id={option.name}
              name={id}
              value={option.name}
              checked={value === option.name}
              onChange={() => onChange(option.name)}
            />
            <label htmlFor={option.name}>{option.name}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioSimple;
