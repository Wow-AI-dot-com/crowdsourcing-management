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
  value?: IdType;
  placeholder?: string;
  label?: string;
  size?: "small" | "medium" | "large";
  onChange?: (value: IdType) => void;
};

export default function SelectDropdown({
  options,
  className = "",
  value,
  placeholder,
  label,
  size = "medium",
  onChange,
}: TypeSelectDropdown) {
  const [isShowSelect, setIsShowSelect] = useState<boolean>(false);
  const [name, setName] = useState<IdType | undefined>(value);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const dlRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = useCallback(() => {
    if (!dropdownRef.current || !isShowSelect) return false;
    setIsShowSelect(!isShowSelect);
  }, [isShowSelect]);
  useOnClickOutside(dropdownRef, handleClickOutside);

  const clickExtend = () => {
    setIsShowSelect(!isShowSelect);
  };

  const handleClickOption = (e: IdType) => {
    setName(e);
    onChange?.(e);
    setIsShowSelect(false);
  };

  return (
    <div className={`select-dropdown-wrapper `} ref={dropdownRef}>
      {label ? <div className="select-dropdown-label">{label}</div> : null}
      <div
        className={`select-dropdown-content ${className} ${size}`}
        onClick={clickExtend}
      >
        <div className="select-dropdown-content__name">
          {name
            ? options.find((f) => f.id === name)?.name
            : placeholder
            ? placeholder
            : options[0].name}
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
