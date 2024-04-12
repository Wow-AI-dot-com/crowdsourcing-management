import "./Profile.scss";
import Button from "@/components/Button/Button";
import IconCameraProfile from "@/assets/icons/IconCameraProfile";
import IconEarthProfile from "@/assets/icons/IconEarthProfile";
import IconLanguagesProfile from "@/assets/icons/IconLanguagesProfile";
import InputBase from "@/components/InputBase/InputBase";
import Upload from "@/components/Upload/Upload";
import Modal from "@/components/Modal/Modal";
import IconLine from "@/assets/icons/IconLine";
import { LIST_LANGUAGES, PATH_EMAIL_TEMPLATE } from "@/constants/MatchingUsers";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import ProfileTitle from "./ProfileTitle";
import ProfileForm from "./ProfileForm";

export default function Profile() {
  const arrayLanguages = ["Vietnamese", " English"];
  const listOption = [
    { id: 1, name: "VietName" },
    { id: 2, name: "US" },
  ];

  const [modalInvite, setModalInvite] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isMatchingUserScreen = location?.state?.isMatchingUser||false;

  const handleSubmitModal = () => {
    navigate(`${PATH_EMAIL_TEMPLATE}`)
  };

  return (
    <div className="c-profile">
      <ProfileTitle classNameHeader='wrapper' isMatchingUserScreen={isMatchingUserScreen} onHandleOpenModalInvite={() => setModalInvite(true)} />

      <ProfileForm isMatchingUserScreen={isMatchingUserScreen} />
      
      {isMatchingUserScreen && <Modal
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
