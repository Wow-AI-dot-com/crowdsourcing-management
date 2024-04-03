import React, { useState } from "react";
import "./ProjectDetail.scss";
import IconPrice from "@/assets/icons/IconPrice";
import Button from "@/components/Button/Button";
import Apply from "@Pages//Project/FormApply/apply";
export default function ProjectDetail() {
  const [formApply, setFormApply] = useState(false);

  const clickBtnApply = () => {
    setFormApply(true);
  };

  return (
    <div className="containerProjectDetail">
      <Apply open={formApply} onClose={() => setFormApply(false)} />
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
        <div>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
      </div>
    </div>
  );
}
