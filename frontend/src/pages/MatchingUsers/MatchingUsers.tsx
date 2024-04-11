import Checkbox from "@/components/Checkbox/Checkbox";
import "./MatchingUsers.scss";
import IconLanguagesUsers from "@/assets/icons/IconLanguagesUsers";
import IconNations from "@/assets/icons/IconNations";
import IconArrowLeft from "@/assets/icons/IconArrowLeft";
import IconSearch from "@/assets/icons/iconSearch";
import IconLine from "@/assets/icons/IconLine";
import Pagination from "@/components/Pagination/Pagination";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Modal from "@/components/Modal/Modal";
import InputBase from "@/components/InputBase/InputBase";

const FAKE_USERS = [
  {
    id: 1,
    name: "Cristita Michael",
    type: "Freelancer",
    skills: "Adobe Inc., CorelDRAW, Drawing...",
    position: "Project Management",
    address: "English, Vietnamese / United States",
    avt: 'avt-user.png'
  },
  {
    id: 2,
    name: "Cristita Michael",
    type: "Freelancer",
    skills: "Adobe Inc., CorelDRAW, Drawing...",
    position: "Project Management",
    address: "English, Vietnamese / United States",
    avt: 'avt-user.png'
  },
  {
    id: 3,
    name: "Cristita Michael",
    type: "Freelancer",
    skills: "Adobe Inc., CorelDRAW, Drawing...",
    position: "Project Management",
    address: "English, Vietnamese / United States",
    avt: 'avt-user.png'
  },
  {
    id: 4,
    name: "Cristita Michael",
    type: "Freelancer",
    skills: "Adobe Inc., CorelDRAW, Drawing...",
    position: "Project Management",
    address: "English, Vietnamese / United States",
    avt: 'avt-user.png'
  },
  {
    id: 5,
    name: "Cristita Michael",
    type: "Freelancer",
    skills: "Adobe Inc., CorelDRAW, Drawing...",
    position: "Project Management",
    address: "English, Vietnamese / United States",
    avt: 'avt-user.png'
  },
  {
    id: 6,
    name: "Cristita Michael",
    type: "Freelancer",
    skills: "Adobe Inc., CorelDRAW, Drawing...",
    position: "Project Management",
    address: "English, Vietnamese / United States",
    avt: 'avt-user.png'
  },
  {
    id: 7,
    name: "Cristita Michael",
    type: "Freelancer",
    skills: "Adobe Inc., CorelDRAW, Drawing...",
    position: "Project Management",
    address: "English, Vietnamese / United States",
    avt: 'avt-user.png'
  },
  {
    id: 8,
    name: "Cristita Michael",
    type: "Freelancer",
    skills: "Adobe Inc., CorelDRAW, Drawing...",
    position: "Project Management",
    address: "English, Vietnamese / United States",
    avt: 'avt-user.png'
  },
  {
    id: 9,
    name: "Cristita Michael",
    type: "Freelancer",
    skills: "Adobe Inc., CorelDRAW, Drawing...",
    position: "Project Management",
    address: "English, Vietnamese / United States",
    avt: 'avt-user.png'
  },
  {
    id: 10,
    name: "Cristita Michael",
    type: "Freelancer",
    skills: "Adobe Inc., CorelDRAW, Drawing...",
    position: "Project Management",
    address: "English, Vietnamese / United States",
    avt: 'avt-user.png'
  },
];

const MatchingUsers = () => {
  const [isOpenLanguage, setIsOpenLanguage] = useState(false);
  const [isOpenNation, setIsOpenNation] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);
  const [modalInvite, setModalInvite] = useState(false);
  const [modalConfirmInviteAll, setModalConfirmInviteAll] = useState(false);
  const navigate = useNavigate();
  const path = useLocation().pathname;

  const handleSelectUser = (userId: number) => {
    setSelectedUsers((currentSelected) => {
      const isAlreadySelected = currentSelected.includes(userId);
      let newSelectedUsers = [];

      if (isAlreadySelected) {
        newSelectedUsers = currentSelected.filter((id) => id !== userId);
      } else {
        newSelectedUsers = [...currentSelected, userId];
      }

      if (newSelectedUsers.length === FAKE_USERS.length) {
        setModalInvite(true);
      } else if (modalInvite && newSelectedUsers.length < FAKE_USERS.length) {
        setModalInvite(false);
      }

      return newSelectedUsers;
    });
  };


  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedUsers(FAKE_USERS.map((user) => user.id));
      setModalInvite(true)
    } else {
      handleCloseModalInvite()
    }
  };

  const handleOpenUser = (id: any) => {
    navigate(`${path}/user/${id}`)
  }

  const handleCloseModalInvite = () => {
    console.log(123);
    setModalInvite(false)
    setSelectedUsers([]);
  }

  const handleCloseModalInviteAll = () => {
    setSelectedUsers([]);
    setModalConfirmInviteAll(false)
  }

  const isAllSelected = selectedUsers.length === FAKE_USERS.length;

  const handleSubmitModal = () => {
    if (isAllSelected) {
      setModalInvite(false)
      setModalConfirmInviteAll(true)
    } else {
      navigate(`${path}/email-template`)
    }
  };

  const handleInviteEveryone = () => {
    navigate(`${path}/email-template`)
  };

  const handleNotInviteEveryone = () => {
    handleCloseModalInviteAll()
  };

  return (
    <div className="matching-users">
      <Modal
        open={modalInvite}
        title="Invite to project"
        submitText="Send Invitation"
        className="content-modal"
        onClose={handleCloseModalInvite}
        onSubmit={handleSubmitModal}
        closeOnOverlayClick={modalInvite}
      >
        <div className="modal-invite">
          {
            !isAllSelected && <div className="box-info">
              <img src={require(`@Assets/images/avt-user.png`)} alt="avt-user" />
              <div className="box-info__content">
                <p className="box-info__row">
                  <span className="box-info__row--name">Cristita Michael</span>
                  <IconLine />
                  <span className="box-info__row--type">Freelancer</span>
                </p>
                <p className="box-info__row--email">cristitamuchael@wow-ai.com </p>
              </div>
            </div>
          }
          <InputBase
            label="Project’s ID"
            placeholder="Type here"
          />
        </div>
      </Modal>

      <Modal
        open={modalConfirmInviteAll}
        title="Are you certain you want to invite all of the selected people?"
        submitText="Yes"
        className="content-modal"
        onClose={handleCloseModalInviteAll}
        onSubmit={handleInviteEveryone}
        cancelText='No'
        onCancel={handleNotInviteEveryone}
        closeOnOverlayClick={modalConfirmInviteAll}
      >
      </Modal>

      <div className="matching-users__filter">
        <div className="matching-users__filter-search">
          <Checkbox
            size="sm"
            classNameLabel="matching-users__filter-search--checkbox"
            label="Select All"
            onChange={handleSelectAll}
            checked={isAllSelected}
          />
          <div className="matching-users__filter-search--field">
            <div className="matching-users__filter-search--field__input">
              <IconSearch />
              <input placeholder="Search here" />
            </div>
          </div>
        </div>
        <div className="matching-users__filter-option">
          <div
            onClick={() => setIsOpenLanguage((prev) => !prev)}
            className="matching-users__filter-option--language"
          >
            <IconLanguagesUsers />
            <span>Language</span>
            <IconArrowLeft
              className={`${isOpenLanguage ? "icon-dropdown" : "icon-dropup"}`}
            />
          </div>
          <div
            onClick={() => setIsOpenNation((prev) => !prev)}
            className="matching-users__filter-option--nation"
          >
            <IconNations />
            <span>Nation</span>
            <IconArrowLeft
              className={`${isOpenNation ? "icon-dropdown" : "icon-dropup"}`}
            />
          </div>
        </div>
      </div>
      <div className="matching-users__wrapper">
        <div className="content">
          {FAKE_USERS.map((user) => {
            return (
              <div key={user.id} className="content-rows">
                <div className="content-rows--select">
                  <Checkbox
                    size="sm"
                    label=""
                    checked={selectedUsers.includes(user.id)}
                    onChange={() => handleSelectUser(user.id)}
                  />
                </div>
                <div className="content-rows--info">
                  <div className="content-rows--info__avt">
                    <img
                      src={require(`@Assets/images/${user.avt}`)}
                      alt="Logo"
                    />
                  </div>
                  <div className="content-rows--info__detail">
                    <div className="name-wrap">
                      <p className="content-rows--info__detail--name">
                        {user.name}
                      </p>
                      <IconLine />
                      <span className="content-rows--info__detail--position">
                        {user.type}
                      </span>
                    </div>

                    <p className="content-rows--info__detail--skill">
                      {user.position} | {user.skills}
                    </p>
                    <p className="content-rows--info__detail--address">
                      {user.address}
                    </p>
                  </div>
                </div>
                <div className="content-rows--action">
                  <div
                    onClick={() => handleOpenUser(user.id)}
                    className="content-rows--action__profile">
                    <p>Profile</p>
                  </div>
                  <div
                    onClick={() => setModalInvite(true)} className="content-rows--action__invite">
                    <p>Invite to Aplly</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="matching-users__pagination">
        <Pagination
          page={1}
          pageSize={20}
          total={100}
          setPage={() => null}
          target={"projects"}
        />
      </div>
    </div>
  );
};

export default MatchingUsers;
