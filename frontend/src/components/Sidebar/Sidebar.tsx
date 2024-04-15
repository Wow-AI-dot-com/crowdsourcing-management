import {
  IconBook,
  IconLogout,
  IconHeadPhone,
  IconGlobal,
  IconProfile,
  IconMatchingUser,
  IconInvoices,
} from "@Assets/icons/Index";
import { SIDEBAR_ITEM_LABELS } from "../../constants/projectConstants";
import { useAuth } from "@Providers/AuthProvider";
import "./Sidebar.scss";
import ItemSidebar from "./SidebarItem/Index";

type TSidebarProps = {
  isExpand: boolean;
};

type BaseItem = {
  path: string;
  icon?: JSX.Element;
  label: string;
  activeChecker?: (path: string) => boolean;
};

export type SidebarItem = BaseItem & {
  children?: BaseItem[];
};

const sidebarItems: SidebarItem[] = [
  {
    path: "/projects/available",
    icon: <IconBook />,
    label: SIDEBAR_ITEM_LABELS.YOUR_PROJECTS,
    activeChecker: (path: string) => {
      return path.startsWith("/projects") || path.startsWith("/create-project");
    },
    children: [
      {
        path: "/projects/available",
        label: SIDEBAR_ITEM_LABELS.PROJECT_AVAILABLE,
      },
      {
        path: "/projects/my-project",
        label: SIDEBAR_ITEM_LABELS.PROJECT_MY_PROJECT,
      },
      {
        path: "/projects/applied",
        label: SIDEBAR_ITEM_LABELS.PROJECT_APPLIED,
      },
      {
        path: "/projects/create",
        label: SIDEBAR_ITEM_LABELS.CREATE_PROJECT,
      },
      {
        path: "/projects/email-template",
        label: SIDEBAR_ITEM_LABELS.EMAIL_TEMPLATE,
      },
      {
        path: "/projects/form-template",
        label: SIDEBAR_ITEM_LABELS.FORM_TEMPLATE,
      },
      {
        path: "/projects/sent-email",
        label: SIDEBAR_ITEM_LABELS.SENT_EMAIL,
      },
      {
        path: "/projects/draft-email",
        label: SIDEBAR_ITEM_LABELS.DRAFT_EMAIL,
      },
    ],
  },
  {
    path: "/profile/information",
    icon: <IconProfile />,
    label: SIDEBAR_ITEM_LABELS.PROFILE,
    activeChecker: (path: string) => {
      return path.startsWith("/profile");
    },
    children: [
      {
        path: "/profile/information",
        label: SIDEBAR_ITEM_LABELS.PROFILE_INFORMATION,
      },
      {
        path: "/profile/translation",
        label: SIDEBAR_ITEM_LABELS.PROFILE_TRANSLATION,
      },
      {
        path: "/profile/settings",
        label: SIDEBAR_ITEM_LABELS.PROFILE_SETTING,
      },
    ],
  },
  {
    path: "/user-management",
    icon: <IconProfile />,
    label: SIDEBAR_ITEM_LABELS.USER_MANAGEMENT,
    activeChecker: (path: string) => {
      return path.startsWith("/user-management");
    },
    children: [
      {
        path: "/user-management/user-listing",
        label: SIDEBAR_ITEM_LABELS.USER_LISTING,
      },
      {
        path: "/user-management/tab-file",
        label: SIDEBAR_ITEM_LABELS.TAB_FILE,
      },
    ],
  },
  {
    path: "/invoices",
    icon: <IconInvoices />,
    label: SIDEBAR_ITEM_LABELS.INVOICES,
  },
  {
    path: "/networking",
    icon: <IconGlobal />,
    label: SIDEBAR_ITEM_LABELS.NETWORKING,
  },
  {
    path: "/support",
    icon: <IconHeadPhone />,
    label: SIDEBAR_ITEM_LABELS.SUPPORT,
  },
  {
    path: "/matching-users",
    icon: <IconMatchingUser />,
    label: SIDEBAR_ITEM_LABELS.MATCHING_USERS,
  },

  // { path: "/computes/", icon: <IconYourCompute />, label: SIDEBAR_ITEM_LABELS.COMPUTES },
  // { path: "/computes-supplier/", icon: <IconYourCompute />, label: SIDEBAR_ITEM_LABELS.COMPUTES_SUPPLIER },
  // { path: "/models-seller", icon: <IconModelSeller />, label: SIDEBAR_ITEM_LABELS.MODELS_SELLER },
  // { path: "/notebook/", icon: <IconBook />, label: SIDEBAR_ITEM_LABELS.NOTEBOOK },
  // { path: "/wallet", icon: <IconWallet />, label: SIDEBAR_ITEM_LABELS.WALLET },
  // {
  //   path: "/admin/organization",
  //   icon: <IconSetting width={20} height={20} />,
  //   label: SIDEBAR_ITEM_LABELS.ADMIN,
  //   activeChecker: (path: string) => {
  //     return path.startsWith("/admin");
  //   },
  // },
  // {
  //   path: "/document",
  //   icon: <IconDocument />,
  //   label: SIDEBAR_ITEM_LABELS.DOCUMENT,
  // },
  // {
  //   path: "/",
  //   icon: <IconUser />,
  //   label: SIDEBAR_ITEM_LABELS.ACCOUNT,
  //   children: [
  //     {
  //       path: "/user/account",
  //       icon: <IconDocument />,
  //       label: SIDEBAR_ITEM_LABELS.ACCOUNT_SETTINGS,
  //     },
  //     {
  //       path: "/switch",
  //       icon: <IconDocument />,
  //       label: SIDEBAR_ITEM_LABELS.SWITCH,
  //     },
  //   ],
  // },
];

export function Sidebar({ isExpand }: TSidebarProps) {
  const { logout, user } = useAuth();
  // const [isShowSwitchOrganizationModal, setIsShowSwitchOrganizationModal] =
  //   useState<boolean>(false);

  const renderSidebarItems = (items: SidebarItem[]) => {
    if (!items) {
      return null;
    }

    const allowedItems = items
      .filter((item) => {
        switch (true) {
          case user?.is_superuser:
            return true;
          case user?.is_compute_supplier:
            return item.label === SIDEBAR_ITEM_LABELS.COMPUTES_SUPPLIER;
          case user?.is_model_seller:
            return item.label === SIDEBAR_ITEM_LABELS.MODELS_SELLER;
          default:
            return item.label !== SIDEBAR_ITEM_LABELS.ADMIN;
        }
      })
      .map((item) => {
        if (user?.is_model_seller && item.path === "/models-seller") {
          return { ...item, label: "Commercialize my models" };
        }
        if (user?.is_compute_supplier && item.path === "/computes-supplier/") {
          return { ...item, label: "Lease Computes and Earn" };
        }
        return item;
      });

    return (
      <>
        {allowedItems.map((item, index) => (
          <ItemSidebar
            key={`key-${item.label}-${index}`}
            isExpand={isExpand}
            item={item}
            // setMethod={setIsShowSwitchOrganizationModal}
          />
        ))}
      </>
    );
  };

  return (
    <div className={`c-sidebar ${isExpand ? "" : "expand"}`}>
      <div className="c-sidebar__top">
        <ul className="c-sidebar__list">
          {renderSidebarItems(sidebarItems)}
          {!isExpand && (
            <li className="c-sidebar__item logout" onClick={() => logout(true)}>
              <IconLogout />
              {isExpand ? "Logout" : ""}
            </li>
          )}
        </ul>
      </div>
      <hr />
      {isExpand && (
        <div className="c-sidebar__bottom">
          <ul className="c-sidebar__list">
            <li className="c-sidebar__item logout" onClick={() => logout(true)}>
              <div className="c-sidebar__item-content">
                <IconLogout />
                {isExpand ? "Logout" : ""}
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
