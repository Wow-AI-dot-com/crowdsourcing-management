import Switch from "@/components/Switch/Switch";
import React from "react";
import "./ConfirmSwitch.scss";

export interface TypeConfirmSwitch {
  title: string;
  content: string;
}
export default function ConfirmSwitch({ title, content }: TypeConfirmSwitch) {
  return (
    <div className="c-confirm-switch">
      <div className="c-confirm-switch-title">{title}</div>
      <div className="c-confirm-switch-content">{content}</div>
      <Switch label="Email" />
    </div>
  );
}
