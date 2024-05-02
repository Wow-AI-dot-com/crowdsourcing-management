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

export interface TypeChildren {
  id: number;
  name: string;
}

type TypeSelectDropdown = {
  children: TypeChildren[];
  className?: string;
  icon?: ReactNode;
  iconPosition?: string;
  onClick?: (value: TypeChildren | null) => void;
};

export default function SelectDropdown({
  children,
  className,
  icon,
  iconPosition,
  onClick,
}: TypeSelectDropdown) {
  const [isShowSelect, setIsShowSelect] = useState<boolean>(false);
  const [valueLabel, setValueLabel] = useState<string>("");
  const [height, setHeight] = useState<number>(0);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const dlRef = useRef<HTMLDivElement | null>(null);
  const MAX_HEIGHT_DROPDOWN = 400;

  useEffect(() => {
    if (dropdownRef.current && isShowSelect) {
      const dList = dlRef.current;

      if (dList) {
        setHeight(dList.clientHeight);
      }
    }
  }, [isShowSelect]);

  const handleClickOutside = useCallback(() => {
    if (!dropdownRef.current || !isShowSelect) return false;
    setIsShowSelect(false);
  }, [isShowSelect]);
  useOnClickOutside(dropdownRef, handleClickOutside);

  const clickExtend = () => {
    setIsShowSelect(!isShowSelect);
  };
  const handleClickOption = (value: TypeChildren) => {
    setValueLabel(value.name);
    onClick?.(value);
  };
  return (
    <div
      className={`select-dropdown-wrapper ${className ? className : ""}`}
      onClick={clickExtend}
      ref={dropdownRef}
    >
      <div className="select-dropdown-content">
        <div className="select-dropdown-content__label">
          {iconPosition === "left" && icon}
          <div className="label">
            {valueLabel ? valueLabel : children[0].name}
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
        <div
          className={`select-dropdown-list ${
            height >= MAX_HEIGHT_DROPDOWN ? "scrollbar-y" : ""
          }`}
          ref={dlRef}
        >
          <ul className="list-options">
            {children.map((m) => {
              return (
                <li
                  className="option"
                  key={m.id}
                  onClick={() => handleClickOption(m)}
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
