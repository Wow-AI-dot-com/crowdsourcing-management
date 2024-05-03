import React, {
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import "./SelectDropdown.scss";
import IconArrowLeft from "@/assets/icons/IconArrowLeft";
import useOnClickOutside from "@/hooks/useOnClickOutside";
import IconArrowLearnMore from "@/assets/icons/IconArrowLearnMore";
import { OptionsType } from "@/pages/Project/FormApply/apply";
import { IdType } from "@/pages/Project/FormApply/apply";
type TypeSelectDropdown = {
  options: OptionsType[];
  className?: string;
  icon?: ReactNode;
  iconPosition?: string;
  value?: IdType;
  placeholder?: string;
  onChange?: (value: IdType) => void;
};

export default function SelectDropdown({
  options,
  className = "",
  icon,
  iconPosition,
  value,
  placeholder,
  onChange,
}: TypeSelectDropdown) {
  const [isShowSelect, setIsShowSelect] = useState<boolean>(false);
  const [Label, setLabel] = useState<IdType | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const dlRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = useCallback(() => {
    if (!dropdownRef.current || !isShowSelect) return false;
    setIsShowSelect(false);
  }, [isShowSelect]);
  useOnClickOutside(dropdownRef, handleClickOutside);

  const clickExtend = () => {
    setIsShowSelect(!isShowSelect);
  };

  const handleClickOption = (value: IdType) => {
    setLabel(value);
    onChange?.(value);
  };

  return (
    <div
      className={`select-dropdown-wrapper ${className}`}
      onClick={clickExtend}
      ref={dropdownRef}
    >
      <div className="select-dropdown-content">
        <div className="select-dropdown-content__label">
          {iconPosition === "left" && icon}
          <div className="label">
            {Label !== null
              ? options.find((f) => f.id === Label)?.name
              : value
              ? options.find((f) => f.id === value)?.name
              : placeholder}
          </div>
          {iconPosition === "right" && icon}
        </div>
        <div
          className={`select-dropdown-content__arrow${
            !isShowSelect ? "-normal" : "-down"
          }`}
        >
          <IconArrowLeft />
        </div>
      </div>
      {isShowSelect && (
        <div className={`select-dropdown-list `} ref={dlRef}>
          <ul className={`list-options`}>
            {options.map((m) => {
              return (
                <li
                  className="option"
                  key={m.id}
                  onClick={() => handleClickOption(m.id)}
                >
                  {m.name}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
