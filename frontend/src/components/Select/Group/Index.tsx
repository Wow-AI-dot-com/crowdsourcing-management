import { memo, useState } from "react";
import IconArrowLeft from "../../../assets/icons/IconArrowLeft";
import { DataSelect, SelectOption } from "../Select";
import { SelectedGroup } from "../SelectContent/SelectContent";
import Option from "../Option/Index";

interface IGroupProps {
  onSelectItem: (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    val: SelectOption
  ) => void;
  option: DataSelect;
  selectedGroup: SelectedGroup | null;
  isSelectGroup?: boolean;
}

const MemoizedGroup = (props: IGroupProps) => {
  const { option, selectedGroup, isSelectGroup, onSelectItem } = props;
  const [isShowOptionGroup, setShowOptionGroup] = useState<boolean>(false);

  const onToggleGroup = () => {
    setShowOptionGroup((prev) => !prev);
  };

  return (
    <div
      className={`c-select__group ${
        isShowOptionGroup || selectedGroup?.groupName === option.label
          ? "active"
          : ""
      }`}
    >
      {option.label && isSelectGroup && (
        <span className="c-select__group-label" onClick={() => onToggleGroup()}>
          {option.label}
          <IconArrowLeft />
        </span>
      )}
      {!isSelectGroup && (
        <Option
          onSelectItem={onSelectItem}
          options={option.options}
          selectedGroup={selectedGroup}
        />
      )}
      {isSelectGroup && isShowOptionGroup && (
        <Option
          onSelectItem={onSelectItem}
          options={option.options}
          selectedGroup={selectedGroup}
          isSelectGroup
        />
      )}
    </div>
  );
};

const Group = memo(MemoizedGroup);

export default Group;
