import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@Components/Button/Button";
import { useApi } from "@Providers/ApiProvider";
import { useAuth } from "@Providers/AuthProvider";
import "@/pages/Signup/Signup.scss";
import InputBase from "@/components/InputBase/InputBase";
import { createAlert } from "@Utils/createAlert";

export default function Login() {
  const api = useApi();
  const auth = useAuth();
  const navigate = useNavigate();
  const [isSubmit, setSubmit] = React.useState(false);
  const [form] = React.useState<{ [k: string]: string }>({
    email: "",
    password: "",
  });

  function handleInput(ev: React.FormEvent<HTMLInputElement>, name: string) {
    form[name] = ev.currentTarget.value;
  }

  const handleGoogleLogin = () => {
    auth.loginWithGoogle().then(() => {
      // redirect after auth
    });
  };

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
    return createAlert(auth.error, undefined, false, { marginBottom: 16 });
  }, [auth.error]);

  const errorValidationNode = React.useMemo(() => {
    if (!auth.errors["__all__"] || auth.errors["__all__"].length === 0) {
      return null;
    }

    return createAlert(auth.errors["__all__"][0], undefined, false, {
      marginBottom: 16,
    });
  }, [auth.errors]);

  return (
    <div className="sign-up">
      <div className="sign-up-left">
        <div className="sign-up-left-content">
          <img src={require("../../assets/images/logo.png")} alt="Logo" />
          <span className="sign-up-left-text">
            An End-to-End AI Platform that integrates with Decentralized
            Computing Resources
          </span>
        </div>
      </div>
      <div className="sign-up-right">
        <div className="sign-up-content">
          <div className="sign-up-content__title">Freelancer Sign In</div>
          {errorNode}
          {errorValidationNode}
          <div className="sign-up-content__input group-extend-input">
            <div className="row-input">
              <InputBase
                placeholder="Email"
                onChange={(ev) => handleInput(ev, "email")}
                disabled={isSubmit}
              />
            </div>
            <div className="row-input">
              <InputBase
                type="password"
                placeholder="Password"
                onChange={(ev) => handleInput(ev, "password")}
                disabled={isSubmit}
              />
            </div>
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
        </div>
      </div>
    </div>
  );
}
