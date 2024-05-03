import Button from "@Components/Button/Button";
import { useApi } from "@Providers/ApiProvider";
import { useAuth } from "@Providers/AuthProvider";
import { createAlert } from "@Utils/createAlert";
import { ReactNode, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import InputBase from "@/components/InputBase/InputBase";
import "./Signup.scss";
import SelectDropdown from "@/components/Dropdown/SelectDropdown";

export const SIGN_UP = "SIGN_UP";
export const ROLES = "ROLES";

const dataSelect = [
  { id: 0, name: "National" },
  { id: 1, name: "United Kingdom" },
  { id: 2, name: "Viet Nam" },
];
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
          <div className="sign-up-content__title">Freelancer Sign Up</div>
          {errorNode}
          <div className="sign-up-content__input group-extend-input">
            <div className="row-input">
              <InputBase
                type="text"
                placeholder="Name"
                value={email}
                onChange={(event) =>
                  setData({ ...data, email: event.target.value })
                }
              />
            </div>
            <div className="row-input">
              <InputBase
                type="text"
                placeholder="Email"
                value={email}
                onChange={(event) =>
                  setData({ ...data, email: event.target.value })
                }
              />
            </div>
            <div className="row-input">
              <InputBase
                type="password"
                placeholder="Password"
                value={pass}
                onChange={(event) =>
                  setData({ ...data, pass: event.target.value })
                }
              />
            </div>
            <div className="row-input">
              <InputBase
                type="password"
                placeholder="Confirm Password"
                value={confirmPass}
                onChange={(event) =>
                  setData({ ...data, confirmPass: event.target.value })
                }
              />
            </div>
          </div>
          <div className="sign-up-content__or" />
          <div className="group-extend-input">
            <div className="row-input">
              <SelectDropdown options={dataSelect} value={2} />
            </div>
            <div className="row-input">
              <SelectDropdown
                options={dataSelect}
                placeholder="First language"
              />
              <SelectDropdown
                options={dataSelect}
                placeholder="Proficiency level"
              />
            </div>
            <div className="row-input">
              <SelectDropdown
                options={dataSelect}
                placeholder="Second languge"
              />
              <SelectDropdown
                options={dataSelect}
                placeholder="Proficiency level"
              />
            </div>
            <div className="row-input">
              <SelectDropdown
                options={dataSelect}
                placeholder="Are you a freelancer or an agency?"
              />
            </div>
          </div>
          <div className="text-link">
            Please make sure to only choose agency if you have a valid tax ID
            for your entity
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
        </div>
      </div>
    </div>
  );
}
