import React, { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { IconArrowLeft } from "../../assets/icons/Index";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import "./Select.scss";
import ListOptions from "./SelectContent/SelectContent";
import Spin from "../Spin/Spin";

export type SelectStyle = {
  top: number;
  left: number;
  width: number | string;
};

export type SelectOption = {
  label: string;
  value: string;
  data?: any | undefined;
};

export type DataSelect = {
  label?: string | undefined;
  options: SelectOption[];
};

export type TSelectProps = {
  className?: string;
  defaultValue?: SelectOption | SelectOption[] | null;
  label?: string;
  data: DataSelect[];
  status?: "" | "error" | "warning" | "success";
  withContent?: string;
  disabled?: boolean;
  isCreatePortal?: boolean; // use with component dropdown => value is false
  iconWithLabel?: React.ReactNode;
  onChange?: (e: SelectOption) => void;
  isMultiple?: boolean;
  onMultipleChange?: (e: SelectOption[]) => void;
  labelClass?: string;
  isSelectGroup?: boolean;
  isLoading?: boolean;
  error?: string | null;
};

const Select: React.FC<TSelectProps> = (props) => {
  const {
    className,
    defaultValue,
    label,
    data,
    status = "",
    withContent,
    disabled,
    isCreatePortal = true,
    iconWithLabel = <IconArrowLeft/>,
    isMultiple,
    onMultipleChange,
    onChange,
    labelClass,
    isSelectGroup,
    isLoading,
    error,
  } = props;

  const selectRef = useRef<HTMLDivElement | null>(null);
  const slRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);
  const [isShowListOption, setShowListOption] = useState<boolean>(false);
  const [selectedOptions, setSelectedOptions] = useState<SelectOption[]>(
    defaultValue
      ? Array.isArray(defaultValue)
        ? defaultValue
        : [defaultValue]
      : []
  );
  const [style, setStyle] = useState<SelectStyle>({
    top: 0,
    left: 0,
    width: 0,
  });

  const MAX_HEIGHT = 400;

  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(e.target as Node) &&
        slRef.current &&
        !slRef.current.contains(e.target as Node)
      ) {
        setShowListOption(false);
      }
    },
    [selectRef, slRef]
  );

  const handleOpenSelect = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setShowListOption((prev) => !prev);
  }

  const handleSelectOption = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    val: SelectOption
  ) => {
    e.stopPropagation();
    setShowListOption((prev) => !prev);

    if (isMultiple) {
      let newOptions;

      if (selectedOptions.find(o => o.value === val.value)) {
        newOptions = selectedOptions.filter(o => o.value !== val.value);
      } else {
        newOptions = [...selectedOptions, val];
      }

      setSelectedOptions(newOptions.filter(f => f.value));
      onMultipleChange?.(newOptions.filter(f => f.value));
    } else {
      setSelectedOptions([val]);
      onChange?.(val);
    }
  };

  useEffect(() => {
    setSelectedOptions(
      defaultValue
        ? Array.isArray(defaultValue)
          ? defaultValue
          : [defaultValue]
        : []
    );
  }, [defaultValue, label])

  useEffect(() => {
    if (selectRef.current && isShowListOption) {
      const sList = slRef.current;

      if (sList && slRef) {
        const wrapperRect = selectRef.current.getBoundingClientRect();
        setHeight(slRef.current.clientHeight);

        setStyle({
          top: wrapperRect.top + window.scrollY + selectRef.current.clientHeight + 10,
          left: wrapperRect.left,
          width: withContent ? withContent : selectRef.current.clientWidth,
        });
      }
    }
  }, [isShowListOption, withContent]);

  useOnClickOutside(slRef, handleClickOutside);

  return (
    <>
      <div
        className={`c-select ${className ? className : null} ${
          disabled ? "disabled" : ""
        }`}
        ref={selectRef}
        onClick={(e) => handleOpenSelect(e)}
      >
        {label && <label className={labelClass ? labelClass : "c-select__label"}>{label}</label>}
        <div className={`c-select__content ${status} ${isShowListOption ? "active" : ""}`}>
          <div className="c-select--action">
            {isLoading && <Spin loading={isLoading} />}
            <label className="c-select__placeholder">{selectedOptions.map(opt => opt.label).join(", ")}</label>
            {iconWithLabel}
          </div>
        </div>
        {error && error.length > 0 && <div className="c-select__error">{error}</div>}
      </div>
      {isShowListOption && !isLoading &&
      (isCreatePortal ? (
        createPortal(
          <ListOptions
            className={`${
              height >= MAX_HEIGHT - 10
                ? "scrollbar select-scroll"
                : "c-select__list-content"
            } ${className ? className : ""}`}
            style={style}
            slRef={slRef}
            data={data}
            onChange={handleSelectOption}
            selectedOptions={selectedOptions}
            isSelectGroup={isSelectGroup}
          />,
          document.body
        )
      ) : (
        <ListOptions
          className={`${
            height >= MAX_HEIGHT - 10
              ? "scrollbar select-scroll"
              : "c-select__list-content"
          } ${className ? className : ""}`}
          style={style}
          slRef={slRef}
          data={data}
          isCreatePortal
          onChange={handleSelectOption}
          selectedOptions={selectedOptions}
          isSelectGroup={isSelectGroup}
        />
      ))}
    </>
  );
};

export default Select;
