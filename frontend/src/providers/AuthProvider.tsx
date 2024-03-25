import React from "react";
import { TLoginDTO, TSignupDTO, validateLoginResponse } from "../dtos/auth";
import validateUserModel, { TUserModel } from "../models/user";
import { useApi } from "./ApiProvider";
import { useLoader } from "./LoaderProvider";
import { confirmDialog } from "../components/Dialog";

export type TAuthProvider = {
  error: string | null;
  errors: { [k: string]: string[] };
  errorSignup: { [k: string]: string[] } | string | null;
  login: (
    credentials: TLoginDTO,
    abortController?: AbortController | undefined
  ) => Promise<Response>;
  signup: (
    credentials: TSignupDTO,
    abortController?: AbortController | undefined
  ) => Promise<Response>;
  logout: (showConfirm: boolean) => void;
  user: null | TUserModel;
  loginWithGoogle: () => Promise<void>;
  refreshUser: () => void;
};

export const AuthContext = React.createContext<TAuthProvider>({
  error: null,
  errors: {},
  errorSignup: null,
  login: () => Promise.resolve<Response>(new Response()),
  signup: () => Promise.resolve<Response>(new Response()),
  logout: () => void 0,
  user: null,
  loginWithGoogle: async () => {},
  refreshUser: () => void 0,
});

export function AuthProvider(props: React.PropsWithChildren) {
  const [user, setUser] = React.useState<TUserModel | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [errors, setErrors] = React.useState<{ [k: string]: string[] }>({});
  const [errorSignup, setErrorSignup] = React.useState<
    { [k: string]: string[] } | string | null
  >(null);
  const [showLogoutConfirm, setShowLogoutConfirm] =
    React.useState<boolean>(false);
  const [initialized, setInitialized] = React.useState<boolean>(false);
  const [latestCheck, setLatestCheck] = React.useState(new Date().getTime());
  const { call } = useApi();
  const { createLoader } = useLoader();

  const login = React.useCallback(
    async (
      credentials: TLoginDTO,
      abortController?: AbortController | undefined
    ): Promise<Response> => {
      const closeLoader = createLoader("Authenticating...");
      setErrors({});

      try {
        const f = new FormData();
        f.set("email", credentials.email);
        f.set("password", credentials.password);
        f.set("csrfmiddlewaretoken", credentials.csrfmiddlewaretoken);

        const result = call("login", {
          abortController,
          body: f,
          headers: {
            Accept: "application/json",
          },
        });

        let response = await result.promise;
        const data = await response.json();

        if (data.errors) {
          setErrors(data.errors);
        } else {
          const vr = validateLoginResponse(data);

          if (!vr.isValid) {
            setError(
              "Invalid user data received from the server. Please try again!"
            );
          } else {
            setLatestCheck(new Date().getTime());
          }
        }

        closeLoader();
        return response;
      } catch (r2) {
        if (r2 instanceof Error) {
          setError(r2.message);
        }

        closeLoader();
        throw r2;
      }
    },
    [call, createLoader]
  );

  const loginWithGoogle = async () => {
    const oauthUrl = window.APP_SETTINGS.hostname + "redirect/";
    window.location.href = oauthUrl;
  };

  const signup = React.useCallback(
    async (
      credentials: TSignupDTO,
      abortController?: AbortController | undefined
    ): Promise<Response> => {
      const closeLoader = createLoader("Authenticating...");
      setErrorSignup(null);

      try {
        const result = call("signup", {
          abortController,
          body: credentials,
        });

        let response = await result.promise;
        const data = await response.json();

        if (data.validation_errors || data.error) {
          setErrorSignup(data.validation_errors || data.error);
        } else if (response.ok) {
          setLatestCheck(new Date().getTime());
        }

        closeLoader();
        return response;
      } catch (r2) {
        if (r2 instanceof Error) {
          setErrorSignup(r2.message);
        }

        closeLoader();
        throw r2;
      }
    },
    [call, createLoader]
  );

  const terminateSession = React.useCallback(() => {
    setUser(null);
    // navigate("/user/login");
    window.location.href = window.APP_SETTINGS.hostname + "logout";
  }, []);

  const logout = React.useCallback(
    (showConfirm: boolean = true) => {
      if (showConfirm) {
        setShowLogoutConfirm(true);
        return;
      }

      terminateSession();
    },
    [terminateSession]
  );

  const refreshUser = React.useCallback(() => {
    setLatestCheck(new Date().getTime());
  }, []);

  React.useEffect(() => {
    if (!showLogoutConfirm) {
      return;
    }

    confirmDialog({
      message: "Are you sure you want to logout?",
      onSubmit() {
        terminateSession();
      },
      onCancel() {
        setShowLogoutConfirm(false);
      },
    });
  }, [showLogoutConfirm, terminateSession]);

  React.useEffect(() => {
    const closeLoader = createLoader("Checking credentials...");
    const abortController = new AbortController();

    call("whoami", { abortController })
      .promise.then(async (r) => {
        if (!(r instanceof Response) || !r.ok) {
          return;
        }

        const data = await r.json();
        const vr = validateUserModel(data);

        if (vr.isValid) {
          setUser(vr.data);
        } else {
          console.error(vr);
        }
      })
      .catch(() => {
        if (abortController.signal.aborted) {
          return;
        }
      })
      .finally(() => {
        closeLoader();

        if (abortController.signal.aborted) {
          return;
        }

        setInitialized(true);
      });

    return () => {
      abortController.abort();
    };
  }, [call, latestCheck, createLoader]);

  const providerValue = React.useMemo(
    () => ({
      error,
      errors,
      errorSignup,
      login,
      logout,
      signup,
      user,
      loginWithGoogle,
      refreshUser,
    }),
    [error, errors, errorSignup, login, logout, signup, user, refreshUser]
  );

  if (!initialized) {
    return null;
  }

  return (
    <>
      <AuthContext.Provider value={providerValue}>
        {props.children}
      </AuthContext.Provider>
    </>
  );
}

export function useAuth(): TAuthProvider {
  return React.useContext(AuthContext);
}
