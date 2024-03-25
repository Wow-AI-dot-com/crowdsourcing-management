import React, { Dispatch, SetStateAction, useState, useRef, useCallback, useMemo } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { TUserModel } from "../../models/user";
import "./Navbar.scss";
import { IconUnExpand, IconExpand, IconBook, IconEdit, IconClose } from "../../assets/icons/Index";
// import { any } from "../../layouts/UserLayout";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import { useNavigate } from "react-router-dom";
import NavbarActions from "../NavbarActions/NavbarActions";
import Button from "../Button/Button";

export type TNavbarBreadcrumb = {
  label: string;
  onClick?: () => void;
  actionType?: "danger" | "success" | "warning";
  icon?: JSX.Element;
  look?: string;
};

export type TNavbarProjectData = {
  name: string | undefined;
  desc: string | undefined;
}

export type TProps = {
  actions?: TNavbarBreadcrumb[] | null;
  breadcrumbs?: TNavbarBreadcrumb[] | null;
  user?: TUserModel | undefined;
  sideBarData: any;
  isSetupPage?: boolean;
  isLayoutEmpty?: boolean;
  navProjectData?: TNavbarProjectData | null;
  closeCallBackUrl?: string | null;
  onExpandSideBar: Dispatch<SetStateAction<any>>;
};

const MemoizedNavbar = (props: TProps) => {
  const { sideBarData, isSetupPage, isLayoutEmpty, navProjectData, closeCallBackUrl, onExpandSideBar } = props;
  const [isShowListNotification, setIsShowListNotification] = useState(false);
  const [isShowMenu, setMenuShow] = useState(false);
  const [isShowSwitchOrganizationModal, setIsShowSwitchOrganizationModal] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const dropdownNotificationRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  const getUserRole = useMemo(() => {
    switch (true) {
      case props.user?.is_compute_supplier:
        return "Compute supplier";
      case props.user?.is_model_seller:
        return "Model Seller";
      default:
        return "Model Developer";
    }
  }, [props.user?.is_compute_supplier, props.user?.is_model_seller]);

  const handleExpandSideBar = () => {
    onExpandSideBar({
      ...sideBarData,
      isExpand: !sideBarData.isExpand,
      sideBarW: sideBarData.isExpand ? 67 : 300,
    });
  };

  // const account = React.useMemo(() => {
  //   if (!props.user) {
  //     return null;
  //   }

  //   return <div className="c-navbar__account">{props.user.avatar ? "" : props.user.initials}</div>;
  // }, [props.user]);

  // const handleDropdownClick = () => {
  //   setMenuShow(!isShowMenu);
  // };

  const handleClickOutside = useCallback(() => {
    if (!dropdownRef.current || !isShowMenu) return false;
    setMenuShow(false);
  }, [isShowMenu]);

  // const goToAccountSettings = () => {
  //   navigate('/user/account');
  //   setMenuShow(false);
  // }

  useOnClickOutside(dropdownRef, handleClickOutside);

  // const handleShowListNotification = () => {
  //   setIsShowListNotification(!isShowListNotification);
  // };

  const handleClickOutsideListNotification = useCallback(() => {
    if (!dropdownNotificationRef.current || !isShowListNotification) return false;
    setIsShowListNotification(false);
  }, [isShowListNotification]);
  useOnClickOutside(dropdownNotificationRef, handleClickOutsideListNotification);
  
  return (
    <div className="c-navbar">
      <div className="c-navbar__wrapper">
        <div className="c-navbar__left">
          <div className="c-navbar__logo">
            <img className="c-navbar__logo-image" src={require("../../assets/images/logo.png")} height={30} alt="Logo" />
            <div className="c-navbar__logo-info">
              <div className={`c-navbar__user-info ${isSetupPage ? "settings" : ""}`}>
                <span>{(navProjectData && isSetupPage) ? navProjectData.name : getUserRole}</span>
                <strong>{(navProjectData && isSetupPage) ? navProjectData.desc : props.user?.email}</strong>
              </div>
              {!isSetupPage &&
                <button
                  className="c-navbar__icon-hamburger"
                  onClick={() => handleExpandSideBar()}
                >
                  {sideBarData.isExpand ? <IconExpand color={'#5050FF'} /> : <IconUnExpand />}
                </button>
              }
              {isSetupPage && 
                <button
                  className="c-navbar__icon-settings-edit"
                  onClick={() => handleExpandSideBar()}
                >
                  <IconEdit width={16} height={16} />
                </button>
              }
            </div>
          </div>
          {!isLayoutEmpty && !isSetupPage &&
            <>
              <div className="line"/>
              <div className="c-navbar__breadcrumbs">
                <ul className="c-navbar__breadcrumbs-items">
                  <Breadcrumbs data={props.breadcrumbs} />
                </ul>
              </div>
            </>
          }
        </div>
        <div className="c-navbar__right">
        {!isLayoutEmpty && 
          <div className="c-navbar__actions">
            <Button className="c-navbar__icon-book" type="secondary" icon={<IconBook />} onClick={() => navigate("/document")}>
              Tutorial
            </Button>
            {props.actions && props.actions.length > 0 &&
              <ul className="c-navbar__actions-items">
                <NavbarActions data={props.actions}/>
              </ul>
            }
            {closeCallBackUrl &&
              <>
                <div className="line"/>
                <button 
                  className="c-navbar__icon-close-callback" 
                  onClick={() => navigate(closeCallBackUrl)}
                >
                  <IconClose />
                </button>
              </>
            }
          </div>
        }
        </div>
      </div>
    </div>
  );
}

export const Navbar = React.memo(MemoizedNavbar);
