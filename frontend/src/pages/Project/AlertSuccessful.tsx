import IconAlertSuccessful from "@/assets/icons/IconAlertSuccessful";
import React from "react";
import "./AlertSuccessful.scss";

export interface TypeAlertSuccessful {
  open: boolean;
}

export default function AlertSuccessful({ open }: TypeAlertSuccessful) {
  return open ? (
    <div className={`container--alert-successful`}>
      <IconAlertSuccessful />
      <span>The project is canceled successfully</span>
    </div>
  ) : null;
}
