import IconAlertSuccessful from "@/assets/icons/IconAlertSuccessful";
import React from "react";
import "./AlertSuccessful.scss";

export interface TypeAlertSuccessful {
  open: boolean;
  title: string;
}

export default function AlertSuccessful({ open, title }: TypeAlertSuccessful) {
  return open ? (
    <div className={`container--alert-successful`}>
      <IconAlertSuccessful />
      <span>{title}</span>
    </div>
  ) : null;
}
