import IconAlertSuccessful from "@/assets/icons/IconAlertSuccessful";
import React, { useEffect } from "react";
import "./AlertSuccessful.scss";

export interface TypeAlertSuccessful {
  open: boolean;
  title: string;
  autoHide?:() => void;
}

export default function AlertSuccessful({ open, title,autoHide }: TypeAlertSuccessful) {
  useEffect(() => {
    if (open && autoHide) {
      setTimeout(() => {
        autoHide();
      }, 3000);
    }
  }
  , [open,autoHide]);

  return open ? (
    <div className={`container--alert-successful`}>
      <IconAlertSuccessful />
      <span>{title}</span>
    </div>
  ) : null;
}
