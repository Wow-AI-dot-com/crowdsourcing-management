import { Fragment, memo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  IconArrowLeft,
  IconLineSubMenu,
  IconLineSubMenuLast,
} from "@Assets/icons/Index";
import { openNewTab } from "@Utils/openNewTab";
import { SidebarItem } from "../Sidebar";

interface ISidebarItemProps {
  item: SidebarItem;
  isExpand: boolean;
  setMethod?: (val: boolean) => void;
}

const MemoizedSidebarItem = (props: ISidebarItemProps) => {
  const { item, isExpand, setMethod } = props;
  const [isShowSidebarItems, setShowSidebarItems] = useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();

  const onToggleSidebarItem = (path: string) => {
    setShowSidebarItems((prev) => !prev);
  };

  const isActive = (
    path: string,
    activeChecker?: (path: string) => boolean
  ) => {
    if (activeChecker && activeChecker(location.pathname)) {
      return "active";
    }
    
    return location.pathname.startsWith(path) ? "active" : "";
  };

  const onChildItemClick = (
    item: SidebarItem,
    e: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    if (item.path === "/switch") {
      e.stopPropagation();
      setMethod?.(true);
    } else {
      item.path && navigate(item.path);
    }
  };

  const handleItemClick = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <li
        key={item.path}
        className={`c-sidebar__item ${
          isActive(item.path, item.activeChecker) || ""
        } ${item.children ? "child" : ""}`}
        onClick={() =>
          item?.children
            ? onToggleSidebarItem(item.path)
            : "/notebook/" !== item.path
            ? handleItemClick(item.path)
            : openNewTab(window.APP_SETTINGS.hostname + "notebook/")
        }
      >
        <div
          className={`c-sidebar__item-content ${
            isShowSidebarItems ? "active" : ""
          }`}
        >
          <div className="c-sidebar__item-title">
            {item.icon}
            {isExpand ? item.label : null}
          </div>
          {item?.children &&
          isExpand &&
          isActive(item.path, item.activeChecker) ? (
            <IconArrowLeft />
          ) : null}
        </div>
      </li>
      {isShowSidebarItems &&
        item?.children?.map((child, index) => (
          <Fragment key={`key-${child.label}`}>
            {isExpand && (
              <li
                key={`key-${child.label}`}
                className={`c-sidebar__item child ${isActive(child.path) || ""}`}
                onClick={(e) => onChildItemClick(child, e)}
              >
                {item.children && item.children?.length - 1 !== index ? (
                  <IconLineSubMenu />
                ) : (
                  <IconLineSubMenuLast />
                )}
                <p>{child.label}</p>
              </li>
            )}
          </Fragment>
        ))}
    </>
  );
};

const ItemSidebar = memo(MemoizedSidebarItem);

export default ItemSidebar;
