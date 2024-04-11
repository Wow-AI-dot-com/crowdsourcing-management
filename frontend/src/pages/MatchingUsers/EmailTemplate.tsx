import Button from "@/components/Button/Button";
import "./EmailTemplate.scss";
import IconEmailTemplate from "@/assets/icons/IconEmailTemplate";
import IconPlusEmailTemplate from "@/assets/icons/IconPlusEmailTemplate";
import IconBack from "@/assets/icons/IconBack";
import IconNext from "@/assets/icons/IconNext";
import { useState } from "react";

const FAKE_EMAIL_TEMPLATE = [
  {
    title: "Invitation Email",
    subject: "Reaching Out",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum...",
    firstName: "First Name",
    id: 1,
  },
  {
    title: "Invitation Email 1",
    subject: "Reaching Out",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum...",
    firstName: "First Name 1",
    id: 2,
  },
  {
    title: "Invitation Email 2",
    subject: "Reaching Out",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum...",
    firstName: "First Name 2",
    id: 3,
  },
];

const EmailTemplate = () => {
  const [currentEmail, setCurrentEmail] = useState(1);

  return (
    <div className="email-template">
      {FAKE_EMAIL_TEMPLATE.map((email) => {
        return (
          <div
            onClick={() => setCurrentEmail(email.id)}
            key={email.id}
            className={`email-template--box ${
              currentEmail === email.id ? "active" : ""
            }`}
          >
            <div className="email-template--box__title">
              <div className="ellipse">
                <IconEmailTemplate />
              </div>
              <p>{email.title}</p>
            </div>
            <div className="email-template--box__subject">
              <p>
                Subject: <span>{email.subject}</span>
              </p>
            </div>
            <div className="email-template--box__content">
              <p>
                Hey <span>{email.firstName}</span>,
                <br />
                {email.content}
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
        >
          Add more email
        </Button>
      </div>

      <div className="footer">
        <div className="footer--back">
          <IconBack />
          <span>Back</span>
        </div>
        <div className="footer--next">
          <Button size="small" className="btn-next">
            Send Invitation
            <IconNext />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EmailTemplate;
