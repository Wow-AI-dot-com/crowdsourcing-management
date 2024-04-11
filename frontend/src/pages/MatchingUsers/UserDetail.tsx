import IconCameraProfile from "@/assets/icons/IconCameraProfile";
import IconEarthProfile from "@/assets/icons/IconEarthProfile";
import IconLanguagesProfile from "@/assets/icons/IconLanguagesProfile";
import Button from "@/components/Button/Button";
import InputBase from "@/components/InputBase/InputBase";
import Upload from "@/components/Upload/Upload";
import "./UserDetail.scss";
import IconLine from "@/assets/icons/IconLine";
import Modal from "@/components/Modal/Modal";
import { useState } from "react";

const arrayLanguages = ["Vietnamese", " English"];

const listOption = [
  { id: 1, name: "VietName" },
  { id: 2, name: "US" },
];

const UserDetail = () => {
  const [modalCreate, setModalCreate] = useState(false);

  const handleSubmitModal = () => {
    console.log("object");
  };

  return (
    <div className="c-profile">
      <Modal
        open={modalCreate}
        title="Invite to project"
        submitText="Send Invitation"
        className="content-modal"
        onClose={() => setModalCreate(false)}
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
      </Modal>
      <div
        className="header-profile"
        style={{
          display: "flex",
          gap: "0",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "27px",
          }}
        >
          <div className="header-avatar">
            <img
              src={require(`@Assets/images/avt-user.png`)}
              alt=""
              className="header-avatar-img"
            />
            <div className="header-avatar-icon">
              <IconCameraProfile />
            </div>
          </div>
          <div className="header-information">
            <div className="header-information__name">Cristita Michael</div>
            <div className="header-information__email">user@wow-ai.com </div>
            <div className="header-information__box-nationality">
              <div className="nationality">
                <IconEarthProfile />
                <span>Viet Nam</span>
              </div>
              <div className="languages">
                <IconLanguagesProfile />
                <span>{arrayLanguages.toString()}</span>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            minWidth: "100px",
          }}
        >
          <Button
            onClick={() => setModalCreate(true)}
            type="success"
            className="btn-profile btn-invite"
          >
            Invite to Aplly
          </Button>
        </div>
      </div>
      <div className="body-profile">
        <div className="left">
          <InputBase label="First Name" placeholder="Input text" />
          <InputBase label="Last name" placeholder="Input text" />
          <InputBase
            label="Phone number"
            placeholder="Input text"
            type="number"
          />
          <InputBase
            label="About your self"
            placeholder="Input text"
            value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
            isMultipleLine
          />
        </div>
        <div className="right">
          <InputBase
            label="Nation"
            placeholder="Input text"
            listOption={listOption}
          />
          <div style={{ display: "flex", gap: "24px" }}>
            <InputBase label="First language" listOption={listOption} />
            <InputBase label="Proficiency level" listOption={listOption} />
          </div>
          <div style={{ display: "flex", gap: "24px" }}>
            <InputBase label="Second language" listOption={listOption} />
            <InputBase label="Proficiency level" listOption={listOption} />
          </div>
          <div className="upload-cv">
            <span className="upload-cv__title">Attach your CV</span>
            <div className="upload-cv__input">
              <Upload describe="JPG, GIF or PNG. Max size of 800K" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
