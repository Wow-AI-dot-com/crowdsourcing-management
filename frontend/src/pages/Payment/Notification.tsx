import React from "react";
import "./Notification.scss";
import IconNotification from "@/assets/icons/IconNotification";
import Button from "@/components/Button/Button";
import { Link } from "react-router-dom";
import IconArrowRight from "@/assets/icons/IconArrowRight";
import IconClose from "@/assets/icons/IconClose";
import IconArrowLearnMore from "@/assets/icons/IconArrowLearnMore";
export interface TypeNotification {
  price: number | string;
  onClickClose: () => void;
  open: boolean;
  //   linkLearn: string;
  //   linkDismiss: string;
}

export default function Notification({
  price,
  onClickClose,
  open,
}: TypeNotification) {
  return open ? (
    <div className="container">
      <div style={{ flexShrink: "0" }}>
        <IconNotification />
      </div>
      <div className="container-content">
        <div className="container-content-title">Notification text</div>
        <div className="container-content-information">
          Withdraw successfully <span>{price}</span> to your bank account
        </div>
        <div className="container-content-buttons">
          <Link to="#" style={{ padding: "4px 0 0 0", textDecoration: "none" }}>
            <div className="container-content-buttons__learn">
              Learn more
              <div>
                <IconArrowLearnMore />
              </div>
            </div>
          </Link>
          <Link to="#" style={{ textDecoration: "none" }}>
            <div className="container-content-buttons__dismiss">Dismiss</div>
          </Link>
        </div>
      </div>
      <div className="container-content-close" onClick={onClickClose}>
        <IconClose />
      </div>
    </div>
  ) : null;
}
