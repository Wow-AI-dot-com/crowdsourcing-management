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
import UserListing from "@Pages/UserManagement/UserListing";
import UserManagementDetail from "@Pages/UserManagement/UserManagementDetail";
import UserDetail from "./pages/MatchingUsers/UserDetail";
import EmailTemplate from "./pages/MatchingUsers/EmailTemplate";

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
          path="/projects/:type"
          element={<ProjectList />}
          handle={{ title: "Projects" }}
        />
        <Route
          path="/projects/:type/:projectId"
          element={<ProjectDetail />}
          handle={{ title: "Projects" }}
        />
        <Route
          path="/projects/:type/:projectId/payment"
          element={<Payment />}
          handle={{ title: "Payment" }}
        />
        {/* profile */}
        <Route
          path="/profile/information"
          element={<Profile />}
          handle={{ title: "Profile Personal" }}
        />
        <Route
          path="/profile/translation"
          element={<ProfileTranslation />}
          handle={{ title: "Profile Translation" }}
        />
        <Route
          path="/profile/settings"
          element={<ProfileSettings />}
          handle={{ title: "Profile Settings" }}
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
          element={<UserDetail />}
          handle={{ title: "Profile Information" }}
        />
        <Route
          path="/matching-users/email-template"
          element={<EmailTemplate />}
          handle={{ title: "Choose email template" }}
        />
      </Route>
    </Route>
  )
);

export default router;
