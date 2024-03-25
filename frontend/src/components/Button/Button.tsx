import React, { CSSProperties, MouseEventHandler, ReactNode } from "react";
import "./Button.scss";

export type TButtonProps = {
  className?: string;
  htmlType?: "button" | "submit" | "reset";
  type?: "primary" | "secondary" | "dark" | "hot" | "gradient" | "white";
  children?: ReactNode;
  size?: "small" | "medium" | "large";
  iconPosition?: "left" | "right";
  disabled?: boolean;
  loading?: boolean;
  icon?: ReactNode;
  style?: CSSProperties;
  onClick?: MouseEventHandler;
  isBlock?: boolean,
};

const Button: React.FC<TButtonProps> = ({
  className,
  htmlType = "button",
  type = "primary",
  children,
  size = "small",
  iconPosition = "right",
  disabled,
  loading,
  icon,
  style,
  onClick,
  isBlock,
  ...props
}) => {
  let customClass = "btn";

  switch (type) {
    case "primary":
      customClass += " btn-primary";
      break;
    case "secondary":
      customClass += " btn-secondary";
      break;
    case "dark":
      customClass += " btn-dark";
      break;
    case "hot":
      customClass += " btn-hot";
      break;
    case "gradient":
      customClass += " btn-gradient";
      break;
    case "white":
      customClass += " btn-white";
      break;
    default:
      break;
  }

  const buttonStyle: React.CSSProperties = {
    ...isBlock ? {display: "flex", width: "100%"} : {},
    ...style,
  };

  return (
    <button
      type={htmlType}
      className={`${className ? className : ""} ${customClass} btn-${size} ${
        disabled ? "disabled" : ""
      }`}
      style={buttonStyle}
      {...props}
      onClick={onClick}
      disabled={disabled}
    >
      {iconPosition === "left" && icon}
      {children}
      {iconPosition === "right" && icon}
    </button>
  );
};

export default Button;
