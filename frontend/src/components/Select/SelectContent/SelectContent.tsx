import React from "react";
import Group from "../Group/Index";
import { DataSelect, SelectOption, SelectStyle } from "../Select";

type Ref = React.Ref<HTMLDivElement> | null;

interface IListOptionsProps {
  className: string;
  style: SelectStyle;
  slRef: Ref;
  data: DataSelect[];
  isCreatePortal?: boolean;
  onChange: (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    val: SelectOption
  ) => void;
  selectedOptions?: SelectOption[];
  isSelectGroup?: boolean;
}

export interface SelectedGroup {
  groupName: string;
  value: string;
}

const SelectContent = (props: IListOptionsProps) => {
  const {
    className,
    style,
    slRef,
    data,
    isCreatePortal,
    selectedOptions,
    onChange,
    isSelectGroup,
  } = props;
  const onSelectItem = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    item: SelectOption
  ) => {
    onChange(e, item);
    // Other action
  };

  const selectedGroup: SelectedGroup | null = React.useMemo(() => {
    if (!selectedOptions || selectedOptions.length === 0) {
      return null;
    }

    const value = selectedOptions[0].value;
    let val: SelectedGroup = { groupName: "", value: "" };

    data.forEach((category) => {
      const selectedOption = category.options.find(
        (option) => option.value === value
      );
      if (selectedOption) {
        val = { groupName: category.label ?? "", value };
      }
    });

    return val;
  }, [selectedOptions, data]);

  return (
    <div
      className="c-select__list"
      ref={slRef}
      style={
        isCreatePortal
          ? undefined
          : {
              top: `${style.top}px`,
              left: `${style.left}px`,
              width: `${
                typeof style.width === "string"
                  ? style.width
                  : style.width + "px"
              }`,
            }
      }
    >
      <ul className={`${className ? className : ""}`}>
        {data?.map((opt, index) => (
          <Group
            key={`group-key${index}-${opt.label}`}
            onSelectItem={onSelectItem}
            option={opt}
            selectedGroup={selectedGroup}
            isSelectGroup={isSelectGroup}
          />
        ))}
      </ul>
    </div>
  );
};

export default SelectContent;
