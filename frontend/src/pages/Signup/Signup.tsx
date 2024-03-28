import Button from "@Components/Button/Button";
import { useApi } from "@Providers/ApiProvider";
import { useAuth } from "@Providers/AuthProvider";
import { createAlert } from "@Utils/createAlert";
import { ReactNode, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.scss";

export const SIGN_UP = "SIGN_UP";
export const ROLES = "ROLES";

export default function Signup() {
  const navigate = useNavigate();
  const api = useApi();
  const auth = useAuth();
  const [error, setError] = useState<{ [k: string]: string[] } | string | null>(
    null
  );
  const [data, setData] = useState({ email: "", pass: "", confirmPass: "" });
  const { email, pass, confirmPass } = data;

  useEffect(() => {
    if (pass && confirmPass && pass !== confirmPass) {
      setError("Password and confirm password don't match.");
    } else {
      setError(null);
    }
  }, [pass, confirmPass]);

  useEffect(() => {
    setError(auth.errorSignup);
  }, [auth.errorSignup]);

  const checkDisableBtnSignUp = () =>
    !email || !pass || !confirmPass || pass !== confirmPass;

  const handleSubmit = () => {
    const abortController = new AbortController();
    auth
      .signup(
        {
          email,
          password: pass,
          role: 1,
          csrfmiddlewaretoken: api.getCsrfToken(),
        },
        abortController
      )
      .finally(() => {
        if (abortController.signal.aborted) {
          return;
        }
      });
    return () => {
      abortController.abort();
    };
  };

  const handleSignupGoogle = () => {
    auth.loginWithGoogle();
  };

  const errorNode = useMemo(() => {
    if (error && typeof error === "string") {
      return createAlert(error, undefined, false, { marginBottom: 16 });
    }

    if (error && typeof error === "object") {
      const msg: ReactNode[] = [];
      const fields = Object.keys(error);

      for (let i = 0; i < fields.length; i++) {
        const name = fields[i];

        if (!Array.isArray(error[name]) || error[name].length === 0) {
          continue;
        }

        msg.push(
          <div style={{ marginBottom: 8 }}>
            <strong>{name.toUpperCaseFirst()}</strong>: {error[name][0]}
          </div>
        );
      }

      return createAlert(msg, undefined, false, { marginBottom: 16 });
    }

    return null;
  }, [error]);

  return (
    <div className="sign-up">
      <div className="sign-up-left">
        <div className="sign-up-left-content">
          <img src={require("@Assets/images/logo.png")} alt="Logo" />
          <span className="sign-up-left-text">
            An End-to-End AI Platform that integrates with Decentralized
            Computing Resources
          </span>
        </div>
      </div>
      <div className="sign-up-right">
        <div className="sign-up-content">
          <div className="sign-up-content__title">Sign Up</div>
          {errorNode}
          <div className="sign-up-content__input">
            <input
              type="text"
              placeholder="Email"
              className="email"
              value={email}
              onChange={(event) =>
                setData({ ...data, email: event.target.value })
              }
            />
            <input
              type="password"
              placeholder="Password"
              className="password_signup"
              value={pass}
              onChange={(event) =>
                setData({ ...data, pass: event.target.value })
              }
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="password"
              value={confirmPass}
              onChange={(event) =>
                setData({ ...data, confirmPass: event.target.value })
              }
            />
          </div>
          <div className="sign-up-content__group-btn">
            <Button type="white" onClick={() => navigate("/user/login")}>
              Sign In
            </Button>
            <Button
              type="gradient"
              disabled={checkDisableBtnSignUp()}
              onClick={handleSubmit}
            >
              Sign Up
            </Button>
          </div>
          <div className="sign-up-content__or">Or</div>
          <Button
            type="white"
            size="large"
            className="signup-google"
            onClick={handleSignupGoogle}
          >
            <img
              src={require("@Assets/images/icon_google.png")}
              alt="icon google"
            />
            Sign Up With Google
          </Button>
        </div>
      </div>
    </div>
  );
}
