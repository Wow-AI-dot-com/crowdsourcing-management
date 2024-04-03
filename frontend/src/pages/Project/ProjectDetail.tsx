import React, { useState } from "react";
import "./ProjectDetail.scss";
import IconPrice from "@/assets/icons/IconPrice";
import Button from "@/components/Button/Button";

export default function ProjectDetail() {
  const formApply = useState(false);
  const clickBtnApply = () => {
    console.log("object");
  };
  return (
    <div className="containerProjectDetail">
      <div className="containerProjectDetail--box">
        <div className="header">
          <div className="header__project-name">Project Name</div>
          <div className="header__price">
            <div className="header__price-information">
              <IconPrice />
              36.15 cents/task
            </div>
            <Button
              type="secondary"
              size="small"
              className="header__btn"
              onClick={clickBtnApply}
            >
              Apply
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
