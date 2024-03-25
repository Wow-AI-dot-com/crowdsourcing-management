import {
  IconLineSubMenu,
  IconLineSubMenuLast,
} from "../../../assets/icons/IconSubMenu";
import { SelectOption } from "../Select";
import { SelectedGroup } from "../SelectContent/SelectContent";

interface IOptionProps {
  onSelectItem: (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    val: SelectOption
  ) => void;
  options: SelectOption[];
  selectedGroup: SelectedGroup | null;
  isSelectGroup?: boolean;
}

const Option = (props: IOptionProps) => {
  return (
    <div className="c-select__group-content">
      {props.options.map((item, index) => (
        <li
          onClick={(e) => props.onSelectItem(e, item)}
          className={`c-select__item ${
            index === props.options.length ? "last" : ""
          } ${
            props.selectedGroup?.value === item.value
              ? "c-select__item--selected"
              : ""
          }`}
          key={`option-key-${item.label}`}
        >
          {props.isSelectGroup &&
            (index !== props.options.length - 1 ? (
              <IconLineSubMenu />
            ) : (
              <IconLineSubMenuLast />
            ))}
          {item.label && <p className="c-select__item-value">{item.label}</p>}
        </li>
      ))}
    </div>
  );
};

export default Option;
