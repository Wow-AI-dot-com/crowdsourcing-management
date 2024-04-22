import React, { useState } from "react";
import "./ProjectDetail.scss";
import IconPrice from "@/assets/icons/IconPrice";
import Button from "@/components/Button/Button";
import Apply from "@Pages//Project/FormApply/apply";
import SignConsent from "./FormSignConsent/SignConsent";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ConfirmModal from "@/components/Modal/ConfirmModal";
import AlertSuccessful from "../../components/Alert/AlertSuccessful";
import AssetLabel from "./AssetLabel";
import AddPayment from "./FormAddPayment/AddPayment";

export default function ProjectDetail() {
  const [formApply, setFormApply] = useState(false);
  const [formSignConsent, setFormSignConsent] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const [alertSuccessful, setAlertSuccessful] = useState(false);
  const [addPayment, setAddPayment] = useState(false);
  const param = useParams();
  const navigate = useNavigate();
  const pathName = useLocation().pathname;

  const clickBtnApply = () => {
    setFormApply(true);
  };
  const onClickSendApply = () => {
    setFormApply(false);
    setFormSignConsent(true);
  };
  const onSubmitSignConsent = () => {
    console.log("object");
  };

  const clickBtnCancel = () => {
    setConfirmModal(true);
  };

  const confirmRemove = () => {
    setConfirmModal(false);
    setAlertSuccessful(true);
  };

  const addPaymentSubmit = () => {
    console.log("object");
  };

  const renderButtons = () => {
    switch (param.type) {
      case "available":
        return (
          <Button
            type="secondary"
            size="small"
            className="header__btn--apply"
            onClick={clickBtnApply}
          >
            Apply
          </Button>
        );
      case "applied":
        return (
          <Button
            type="hot"
            size="small"
            className="header__btn--cancel"
            onClick={clickBtnCancel}
          >
            Cancel
          </Button>
        );
      case "guideline":
        return (
          <Button size="small" onClick={clickBtnCancel}>
            Guideline
          </Button>
        );

      case "my-projects":
        return (
          <Button
            size="small"
            onClick={() => navigate(`${pathName}/guideline`)}
          >
            Guideline
          </Button>
        );

      case "completed":
        return (
          <Button
            size="small"
            onClick={() => navigate(`${pathName}/documents`)}
          >
            Documents
          </Button>
        );

      default:
        break;
    }
  };

  return (
    <div className="containerProjectDetail">
      <Apply
        open={formApply}
        onClose={() => setFormApply(false)}
        onSubmit={onClickSendApply}
      />
      <SignConsent
        open={formSignConsent}
        onClose={() => setFormSignConsent(false)}
        onSubmit={onSubmitSignConsent}
      />
      <ConfirmModal
        open={confirmModal}
        onClose={() => setConfirmModal(false)}
        onClickCancel={() => setConfirmModal(false)}
        onClickRemove={confirmRemove}
        title="Are you certain you want to withdraw
        from this project?"
      />
      <div className="containerProjectDetail--box">
        <div className="header-project-detail">
          <div className="header__project-name">Project Name</div>
          <div className="header__price">
            <div className="header__price-information">
              <IconPrice />
              36.15 cents/task
            </div>
            {renderButtons()}
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
        {/* <AlertSuccessful open={alertSuccessful} /> */}
      </div>
      {/* <AddPayment
        open={addPayment}
        onClose={() => setAddPayment(false)}
        onSubmit={addPaymentSubmit}
      /> */}
    </div>
  );
}
