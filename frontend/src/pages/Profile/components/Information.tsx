import {
  IconCameraProfile,
  IconEarthProfile,
  IconLanguagesProfile,
  IconLine,
} from "@/assets/icons/Index";
import { useState } from "react";
import "./Information.scss";
import Button from "@/components/Button/Button";
import { useNavigate } from "react-router-dom";
import { PATH_EMAIL_TEMPLATE } from "@/constants/MatchingUsers";
import Modal from "@/components/Modal/Modal";
import InputBase from "@/components/InputBase/InputBase";

export interface TypeProfileInformation {
  img: string;
  name: string;
  email: string;
  nation: string;
  language: string;
  isButton?: boolean;
  occupation: string;
}
export default function ProfileInformation({
  img,
  name,
  email,
  nation,
  language,
  isButton,
  occupation,
}: TypeProfileInformation) {

  const [modalInvite, setModalInvite] = useState(false);
  const navigate = useNavigate();

  const handleSubmitModal = () => {
    navigate(`${PATH_EMAIL_TEMPLATE}`)
  };


  return (
    <div className="p-information">
      <div className="left">
        <div className="avatar">
          <img src={img} alt="avatar" className="avatar-img" />
          <div className="avatar-icon">
            <IconCameraProfile />
          </div>
        </div>
        <div className="information">
          <div className="information__name">
            {name} ({occupation})
          </div>
          <div className="information__email">{email}</div>
          <div className="information__box-nationality">
            <div className="nationality">
              <IconEarthProfile />
              <span>{nation}</span>
            </div>
            <div className="languages">
              <IconLanguagesProfile />
              <span>{language}</span>
            </div>
          </div>
        </div>
      </div>
      {isButton ? (
        <div className="right">
          <Button onClick={() => setModalInvite(true)}>Invite to Aplly</Button>
        </div>
      ) : null}

      {isButton && <Modal
        open={modalInvite}
        title="Invite to project"
        submitText="Send Invitation"
        className="content-modal"
        onClose={() => setModalInvite(false)}
        onSubmit={handleSubmitModal}
      >
        <div className="modal-invite">
          <div className="box-info">
            <img src={require(`@Assets/images/avt-user.png`)} alt="avt-user" />
            <div className="box-info__content">
              <p className="box-info__row">
                <span className="box-info__row--name">Cristita Michael</span>
                <IconLine />
                <span className="box-info__row--type">Freelancer</span>
              </p>
              <p className="box-info__row--email">
                cristitamuchael@wow-ai.com{" "}
              </p>
            </div>
          </div>
          <InputBase label="Project’s ID" placeholder="Type here" />
        </div>
      </Modal>}
    </div>
  );
}
