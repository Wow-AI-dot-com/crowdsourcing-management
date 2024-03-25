import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import { useApi } from "../providers/ApiProvider";
import { useAuth } from "../providers/AuthProvider";
import "./Signup.scss";
import {createAlert} from "../utils/createAlert";

export default function Login() {
  const api = useApi();
  const auth = useAuth();
  const navigate = useNavigate();
  const [isSubmit, setSubmit] = React.useState(false);
  const [form] = React.useState<{[k: string]: string}>({
    email: "",
    password: "",
  });

  function handleInput(ev: React.FormEvent<HTMLInputElement>, name: string) {
    form[name] = ev.currentTarget.value;
  }

  const handleGoogleLogin = () => {
    auth.loginWithGoogle()
      .then(() => {
        // redirect after auth
      });
  }

  React.useEffect(() => {
    if (!isSubmit) {
      return;
    }

    const abortController = new AbortController();

    auth
      .login(
        {
          email: form.email,
          password: form.password,
          csrfmiddlewaretoken: api.getCsrfToken(),
        },
        abortController
      )
      .finally(() => {
        if (abortController.signal.aborted) {
          return;
        }

        setSubmit(false);
      });

    return () => {
      setSubmit(false);
      abortController.abort();
    };
    // eslint-disable-next-line
  }, [isSubmit]);

  const errorNode = React.useMemo(() => {
    return createAlert(auth.error, undefined, false, {marginBottom: 16});
  }, [auth.error]);

  const errorValidationNode = React.useMemo(() => {
    if (!auth.errors["__all__"] || auth.errors["__all__"].length === 0) {
      return null;
    }

    return createAlert(auth.errors["__all__"][0], undefined, false, {marginBottom: 16});
  }, [auth.errors]);

  return (
    <div className="sign-up">
      <div className="sign-up-left">
        <div className="sign-up-left-content">
          <img src={require("../assets/images/logo.png")} alt="Logo" />
          <span className="sign-up-left-text">
            An End-to-End AI Platform that integrates with Decentralized
            Computing Resources
          </span>
        </div>
      </div>
      <div className="sign-up-right">
        <div className="sign-up-content">
          <div className="sign-up-content__title">Sign In</div>
          {errorNode}
          {errorValidationNode}
          <div className="sign-up-content__input">
            <input
              className="email"
              placeholder="Email"
              onChange={(ev) => handleInput(ev, "email")}
              disabled={isSubmit}
            />
            <input
              type="password"
              className="password"
              placeholder="Password"
              onChange={(ev) => handleInput(ev, "password")}
              disabled={isSubmit}
            />
          </div>
          <div className="sign-up-content__group-btn">
          <Button type="white" onClick={() => navigate("/user/signup")}>
              Sign Up
            </Button>
            <Button
              htmlType="submit"
              type="gradient"
              onClick={() => setSubmit(true)}
            >
              Sign In
            </Button>
          </div>
          <div className="sign-up-content__or">Or</div>
          <Button
            type="white"
            className="signup-google"
            onClick={handleGoogleLogin}
          >
            <img
              src={require("../assets/images/icon_google.png")}
              alt="icon google"
            />
            Sign In With Google
          </Button>
        </div>
      </div>
    </div>
  );
}
