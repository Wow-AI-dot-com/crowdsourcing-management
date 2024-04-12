import Button from "@/components/Button/Button";
import "./EmailTemplate.scss";
import IconEmailTemplate from "@/assets/icons/IconEmailTemplate";
import IconPlusEmailTemplate from "@/assets/icons/IconPlusEmailTemplate";
import IconBack from "@/assets/icons/IconBack";
import IconNext from "@/assets/icons/IconNext";
import { useState } from "react";
import Modal from "@/components/Modal/Modal";
import IconMessage from "@/assets/icons/IconMessage";
import Dropdown from "@/components/Dropdown/Dropdown";
import IconApproveEmail from "@/assets/icons/IconApproveEmail";
import { Editor } from "@tinymce/tinymce-react";
import AlertSuccessful from "@/components/Alert/AlertSuccessful";
import { useNavigate } from "react-router-dom";
import {
  DEFAULT_TYPE_PROJECTS,
  FAKE_EMAIL_TEMPLATE,
  PATH_MY_PROJECTS,
} from "@/constants/MatchingUsers";

const EmailTemplate = () => {
  const [currentEmail, setCurrentEmail] = useState(1);
  const [isAddMoreEmail, setIsAddMoreEmail] = useState(false);
  const [isAlertSave, setIsAlertSave] = useState(false);
  const navigate = useNavigate();
  const clickBtnModal = () => {
    setIsAddMoreEmail(false);
    setIsAlertSave(true);
  };

  const handleInvite = () => {
    navigate(`${PATH_MY_PROJECTS}${DEFAULT_TYPE_PROJECTS}`);
  };

  return (
    <div className="email-template">
      {FAKE_EMAIL_TEMPLATE.map((email) => {
        const { id, title, subject, firstName, content } = email;
        return (
          <div
            onClick={() => setCurrentEmail(id)}
            key={id}
            className={`email-template--box ${
              currentEmail === id ? "active" : ""
            }`}
          >
            <div className="email-template--box__title">
              <div className="ellipse">
                <IconEmailTemplate />
              </div>
              <p>{title}</p>
            </div>
            <div className="email-template--box__subject">
              <p>
                Subject: <span>{subject}</span>
              </p>
            </div>
            <div className="email-template--box__content">
              <p>
                Hey <span>{firstName}</span>,
                <br />
                {content}
              </p>
            </div>
          </div>
        );
      })}

      <div className="email-template--footer">
        <Button
          className="email-template--footer__btn"
          iconPosition="right"
          icon={<IconPlusEmailTemplate />}
          onClick={() => {
            setIsAddMoreEmail(true);
          }}
        >
          Add more email
        </Button>
      </div>

      <Modal
        open={isAddMoreEmail}
        iconTitle={
          <div className="icon-modal-email-template">
            <IconMessage />
          </div>
        }
        onClose={() => setIsAddMoreEmail(false)}
        title={
          <div className="title-modal-email-template">Send Automatic Email</div>
        }
      >
        <div>
          <div className="header-modal-email-template">
            <div className="left">
              Subject: <input className="input-modal-email-template" />
            </div>
            <div className="right">
              <div>{}</div>
              <div>CC</div>
              <div>BCC</div>
            </div>
          </div>
          <div className="c-dropdow-modal-email-template">
            <Dropdown
              className="dropdow"
              label="Approve email"
              iconPosition="left"
              icon={<IconApproveEmail />}
            ></Dropdown>
          </div>
          <div className="c-editor-modal-email-template">
            <Editor></Editor>
          </div>
          <div className="btn-modal-email-template">
            <Button className="btn" onClick={clickBtnModal}>
              Save
            </Button>
          </div>
        </div>
      </Modal>

      <AlertSuccessful
        open={isAlertSave}
        title="Email is added successfully"
        autoHide={() => setIsAlertSave(false)}
      />

      <div className="footer">
        <div className="footer--back">
          <IconBack />
          <span>Back</span>
        </div>
        <div className="footer--next">
          <Button size="small" className="btn-next" onClick={handleInvite}>
            Send Invitation
            <IconNext />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EmailTemplate;
