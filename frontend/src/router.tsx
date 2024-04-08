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
import Profile from "./pages/Profile/Profile";

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
          path="/projects/:type"
          element={<ProjectList />}
          handle={{ title: "Projects" }}
        />
        <Route
          path="/profile"
          element={<Profile />}
          handle={{ title: "Profile" }}
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
      </Route>
    </Route>
  )
);

export default router;
