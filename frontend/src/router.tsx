import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  useMatches,
  // Link,
} from "react-router-dom";
import PageLogin from "@Pages/Login/Login";
import NotFound from "@Pages/NotFound/NotFound";
// import ApiProvider from "@Providers/ApiProvider";
// import { AuthProvider } from "@Providers/AuthProvider";
import composeProviders from "@Utils/composeProviders";
import LoaderProvider from "@Providers/LoaderProvider";
import Signup from "@Pages/Signup/Signup";
import GuestLayout from "./layouts/GuestLayout";
import UserLayout from "./layouts/UserLayout";
import ProjectList from "./pages/Project/ProjectList";
import ProjectDetail from "@Pages/Project/ProjectDetail";
import Payment from "@Pages/Payment";
import Profile from "@Pages/Profile/Profile";
import ProfileTranslation from "@Pages/Profile/ProfileTranslation";
import ProfileSettings from "@Pages/Profile/ProfileSettings";
import MatchingUsers from "./pages/MatchingUsers/MatchingUsers";
import CreateProject from "@Pages/Project/CreateProject";
import ProjectEmailTemplate from "@Pages/Project/ProjectEmailTemplate";
import ProjectFormTemplate from "@Pages/Project/ProjectFormTemplate";
import ProjectFormTemplateCreate from "@Pages/Project/ProjectFormTemplateCreate";
import UserListing from "@Pages/UserManagement/UserListing";
import UserManagementDetail from "@Pages/UserManagement/UserManagementDetail";
import EmailTemplate from "./pages/MatchingUsers/EmailTemplate";
import MyProjects from "./pages/MatchingUsers/MyProjectsUser";
import MyProjectsUser from "./pages/MatchingUsers/MyProjectsUser";
import CrowdPool from "./pages/CrowdPool/CrowdPool";
import Invoices from "@Pages/Invoices";

const Providers = composeProviders([
  { provider: LoaderProvider },
  // { provider: ApiProvider },
  // { provider: AuthProvider },
]).provider;

function TitleChanger() {
  const matches = useMatches();

  React.useLayoutEffect(() => {
    const list = matches.filter((r) => r.handle);
    let title = "";

    if (list.length > 0) {
      const item = list.pop();

      // @ts-ignore
      if (item && item.handle?.title) {
        // @ts-ignore
        title = item.handle.title;
      }
    }

    if (title.length > 0) {
      document.title = title + " - " + window.APP_SETTINGS.title;
    } else {
      document.title = window.APP_SETTINGS.title ?? "";
    }
  }, [matches]);

  return null;
}

function RootElement() {
  return (
    <>
      <Providers>
        <Outlet />
      </Providers>
      <TitleChanger />
    </>
  );
}

const PageHome = () => {
  return <div>Home</div>;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootElement />}>
      <Route element={<GuestLayout />}>
        <Route
          path="/user/login"
          element={<PageLogin />}
          handle={{ title: "Login" }}
        />
        <Route
          path="/user/signup"
          element={<Signup />}
          handle={{ title: "Sign Up" }}
        />
        <Route
          path="*"
          element={<NotFound />}
          handle={{ title: "Page not found" }}
        />
      </Route>
      <Route element={<UserLayout />}>
        <Route path="/" element={<PageHome />} />
        <Route
          path="/crowd-pool"
          element={<CrowdPool />}
          handle={{ title: "Crowd pool" }}
        />
        {/* project */}
        <Route
          path="/projects/create"
          element={<CreateProject />}
          handle={{ title: "Create a new project" }}
        />
        <Route
          path="/projects/email-template"
          element={<ProjectEmailTemplate />}
          handle={{ title: "Projects" }}
        />

        <Route
          path="/projects/form-template"
          element={<ProjectFormTemplate />}
          handle={{ title: "Projects form template" }}
        />

        <Route
          path="/projects/form-template/create"
          element={<ProjectFormTemplateCreate />}
          handle={{ title: "Projects form template create" }}
        />

        <Route
          path="/projects/:type"
          element={<ProjectList />}
          handle={{ title: "Projects" }}
        />
        <Route
          path="/projects/:type/:projectId"
          element={<ProjectDetail />}
          handle={{ title: "Projects" }}
        />
        {/* profile */}
        <Route
          path="/profile/information"
          element={<Profile />}
          handle={{ title: "My profile" }}
        />
        <Route
          path="/profile/balance"
          element={<Payment />}
          handle={{ title: "My Balance" }}
        />
        <Route
          path="/profile/translation"
          element={<ProfileTranslation />}
          handle={{ title: "Profile Translation" }}
        />
        <Route
          path="/profile/settings"
          element={<ProfileSettings />}
          handle={{ title: "Settings" }}
        />
        <Route
          path="/matching-users"
          element={<MatchingUsers />}
          handle={{ title: "Matching Users" }}
        />
        <Route
          path="/user-management/user-listing"
          element={<UserListing />}
          handle={{ title: "User Listing" }}
        />
        <Route
          path="/user-management/user-listing/:id"
          element={<UserManagementDetail />}
          handle={{ title: "User Listing" }}
        />
        <Route
          path="/matching-users/user/:id"
          element={<Profile />}
          handle={{ title: "Profile Information" }}
        />
        <Route
          path="/matching-users/email-template"
          element={<EmailTemplate />}
          handle={{ title: "Choose email template" }}
        />
        <Route
          path="/matching-users/my-projects/:type"
          element={<MyProjectsUser />}
          handle={{ title: "My Projects" }}
        />
        <Route
          path="/invoices"
          element={<Invoices />}
          handle={{ title: "Invoices" }}
        />
      </Route>
    </Route>
  )
);

export default router;
