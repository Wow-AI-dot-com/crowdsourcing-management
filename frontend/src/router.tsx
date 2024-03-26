import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  useMatches,
  Link,
} from "react-router-dom";
import PageLogin from "./pages/Login";
import NotFound from "./pages/NotFound";
import ApiProvider from "./providers/ApiProvider";
import { AuthProvider } from "./providers/AuthProvider";
import composeProviders from "./utils/composeProviders";
import LoaderProvider from "./providers/LoaderProvider";
import Signup from "./pages/Signup";
import GuestLayout from "./layouts/GuestLayout";
import UserLayout from "./layouts/UserLayout";
import ProjectsList from "./pages/Project/List";
import { ProjectType } from "./pages/Project/Filter/ProjectType";
import { ProjectAttribute } from "./pages/Project/Filter/ProjectAttribute";

const Providers = composeProviders([
  { provider: LoaderProvider },
  { provider: ApiProvider },
  { provider: AuthProvider },
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

const TempHomeRedirect = () => {
  return (
    <div>
      <ProjectType />
      <ProjectAttribute />
    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootElement />}>
      <Route path="/" element={<TempHomeRedirect />} />
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
        <Route
          path="/projects"
          element={<ProjectsList />}
          handle={{ title: "Projects" }}
        />
      </Route>
    </Route>
  )
);

export default router;
