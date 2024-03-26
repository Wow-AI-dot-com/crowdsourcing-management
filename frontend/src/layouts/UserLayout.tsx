import React, { useRef } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import "./UserLayout.scss";
import {
  Navbar,
  TNavbarBreadcrumb,
  TNavbarProjectData,
} from "../components/Navbar/Navbar";
import { Sidebar } from "../components/Sidebar/Sidebar";
// import { AccountSettingProvider } from "../providers/AccountSettingProvider";
import { useLoader } from "../providers/LoaderProvider";
import { useScrollbarVisibility } from "../hooks/useScrollbarVisibility";

export type TUserLayoutHook = {
  clearActions: () => void;
  setActions: (breadcrumbs: TNavbarBreadcrumb[]) => void;
  setCloseCallback: (callbaclUrl: string) => void;
  clearCloseCallback: () => void;
  setNavDataProject: (data: TNavbarProjectData | null) => void;
  clearNavDataProject: () => void;
  setIsLayoutEmpty: (isEmpty: boolean) => void;
  clearLayoutEmpty: () => void;
  clearBreadcrumbs: () => void;
  setBreadcrumbs: (breadcrumbs: TNavbarBreadcrumb[]) => void;
  loaderFitContent: () => void;
  loaderFullWidth: () => void;
};

export type TSidebar = {
  isExpand: boolean;
  sideBarW: number;
};

const UserLayoutContext = React.createContext<TUserLayoutHook>({
  clearActions: () => void 0,
  setActions: () => void 0,
  setCloseCallback: () => void 0,
  clearCloseCallback: () => void 0,
  setNavDataProject: () => void 0,
  clearNavDataProject: () => void 0,
  setIsLayoutEmpty: () => void 0,
  clearLayoutEmpty: () => void 0,
  clearBreadcrumbs: () => void 0,
  setBreadcrumbs: () => void 0,
  loaderFitContent: () => void 0,
  loaderFullWidth: () => void 0,
});

export default function UserLayout() {
  // const location = useLocation();
  const [breadcrumbs, setBreadcrumbsState] = React.useState<
    TNavbarBreadcrumb[] | null
  >(null);
  const [actions, setActionsState] = React.useState<TNavbarBreadcrumb[] | null>(
    null
  );
  const [closeCallBackUrl, setShowCloseCallBack] = React.useState<
    string | null
  >(null);
  const [isLayoutEmpty, setIsLayoutEmptyState] = React.useState<boolean>(false);
  const [navProjectData, setNavProjectData] =
    React.useState<TNavbarProjectData | null>(null);
  const { setLeft, setTop } = useLoader();
  const [sideBarData, setExpandSideBar] = React.useState<TSidebar>({
    isExpand: true,
    sideBarW: 300,
  });

  const outletRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isScrollbarVisible = useScrollbarVisibility(contentRef, outletRef);

  const { user } = useAuth();
  // const navigate = useNavigate();

  const clearActions = React.useCallback(() => {
    setActionsState(null);
  }, []);

  const setActions = React.useCallback((actions: TNavbarBreadcrumb[]) => {
    setActionsState(actions);
  }, []);

  const clearCloseCallback = React.useCallback(() => {
    setShowCloseCallBack(null);
  }, []);

  const setCloseCallback = React.useCallback((callBackUrl: string) => {
    setShowCloseCallBack(callBackUrl);
  }, []);

  const clearNavDataProject = React.useCallback(() => {
    setActionsState(null);
  }, []);

  const setNavDataProject = React.useCallback(
    (data: TNavbarProjectData | null) => {
      setNavProjectData(data);
    },
    []
  );

  const clearLayoutEmpty = React.useCallback(() => {
    setIsLayoutEmptyState(false);
  }, []);

  const setIsLayoutEmpty = React.useCallback((isEmpty: boolean) => {
    setIsLayoutEmptyState(isEmpty);
  }, []);

  const clearBreadcrumbs = React.useCallback(() => {
    setBreadcrumbsState(null);
  }, []);

  const setBreadcrumbs = React.useCallback(
    (breadcrumbs: TNavbarBreadcrumb[]) => {
      setBreadcrumbsState(breadcrumbs);
    },
    []
  );

  // Update position layout user: top, left, right, bottom  => 12px
  const loaderFitContent = React.useCallback(() => {
    setLeft(sideBarData.sideBarW + 12 + 2);
    setTop(70 + 13);
  }, [setLeft, setTop, sideBarData.sideBarW]);

  const loaderFullWidth = React.useCallback(() => {
    setLeft(14);
    setTop(70 + 13);
  }, [setLeft, setTop]);

  const providerValue = React.useMemo<TUserLayoutHook>(() => {
    return {
      clearActions,
      setActions,
      setCloseCallback,
      clearCloseCallback,
      clearNavDataProject,
      setNavDataProject,
      setIsLayoutEmpty,
      clearLayoutEmpty,
      clearBreadcrumbs,
      setBreadcrumbs,
      loaderFitContent,
      loaderFullWidth,
    };
  }, [
    clearActions,
    setActions,
    setCloseCallback,
    clearCloseCallback,
    clearNavDataProject,
    setNavDataProject,
    setIsLayoutEmpty,
    clearLayoutEmpty,
    clearBreadcrumbs,
    setBreadcrumbs,
    loaderFitContent,
    loaderFullWidth,
  ]);

  //todo: uncomment this code
  // React.useEffect(() => {
  //   if (!user) navigate("/user/login");
  // }, [navigate, user]);

  // if (!user) {
  //   return null;
  // }

  return (
    <UserLayoutContext.Provider value={providerValue}>
      <div className={`layout-user ${isLayoutEmpty ? "empty" : ""}`}>
        <Navbar
          actions={actions}
          breadcrumbs={breadcrumbs}
          // user={user}
          sideBarData={sideBarData}
          onExpandSideBar={setExpandSideBar}
          isLayoutEmpty={isLayoutEmpty}
          navProjectData={navProjectData}
          closeCallBackUrl={closeCallBackUrl}
        />
        <div
          className={`layout-user__split ${
            sideBarData.isExpand ? "expand" : "close"
          }`}
        >
          <div
            className="layout-user__sidebar"
            style={{ width: sideBarData.sideBarW }}
          >
            <Sidebar isExpand={sideBarData.isExpand} />
          </div>
          {/* <AccountSettingProvider> */}
          <div
            className={`layout-user__content ${
              isScrollbarVisible ? "scrollbar" : "auto"
            } fit`}
            style={{
              marginLeft: sideBarData.sideBarW,
              width: `calc(100% - ${sideBarData.sideBarW + 27}px)`,
            }}
            ref={contentRef}
          >
            <div className="layout-user__outlet" ref={outletRef}>
              <Outlet />
            </div>
          </div>
          {/* </AccountSettingProvider> */}
        </div>
      </div>
    </UserLayoutContext.Provider>
  );
}

export function useUserLayout() {
  return React.useContext(UserLayoutContext);
}
