import Checkbox from "@/components/Checkbox/Checkbox";
import "./MatchingUsers.scss";
import Pagination from "@/components/Pagination/Pagination";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Modal from "@/components/Modal/Modal";
import InputBase from "@/components/InputBase/InputBase";
import {
  FAKE_USERS,
  PATH_EMAIL_TEMPLATE,
  PATH_USER,
} from "@/constants/MatchingUsers";
import {
  IconNations,
  IconLine,
  IconArrowLeft,
  IconLanguagesUsers,
  IconSearch,
  IconWarningModal,
} from "@Assets/icons/Index";

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
      setModalInvite(true);
    } else {
      handleCloseModalInvite();
    }
  };

  const handleOpenUser = (id: number) => {
    navigate(`${PATH_USER}${id}`, {
      replace: true,
      state: { isMatchingUser: true },
    });
  };

  const handleCloseModalInvite = () => {
    setModalInvite(false);
    setSelectedUsers([]);
  };

  const handleCloseModalInviteAll = () => {
    setModalConfirmInviteAll(false);
    setSelectedUsers([]);
  };

  const isAllSelected = selectedUsers.length === FAKE_USERS.length;

  const handleSubmitModal = () => {
    if (isAllSelected) {
      setModalInvite(false);
      setModalConfirmInviteAll(true);
    } else {
      navigate(`${PATH_EMAIL_TEMPLATE}`);
    }
  };

  const handleInviteEveryone = () => {
    navigate(`${PATH_EMAIL_TEMPLATE}`);
  };

  const handleNotInviteEveryone = () => {
    handleCloseModalInviteAll();
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
          {!isAllSelected && (
            <div className="box-info">
              <img
                src={require(`@Assets/images/avt-user.png`)}
                alt="avt-user"
              />
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
          )}
          <InputBase label="Project’s ID" placeholder="Type here" />
        </div>
      </Modal>

      <Modal
        open={modalConfirmInviteAll}
        title="Are you certain you want to invite all of the selected people?"
        submitText="Yes"
        iconTitle={<IconWarningModal />}
        className="content-modal"
        onClose={handleCloseModalInviteAll}
        onSubmit={handleInviteEveryone}
        cancelText="No"
        onCancel={handleNotInviteEveryone}
        closeOnOverlayClick={modalConfirmInviteAll}
      ></Modal>

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
            const { id, avt, name, type, position, skills, address } = user;
            return (
              <div key={id} className="content-rows">
                <div className="content-rows--select">
                  <Checkbox
                    size="sm"
                    label=""
                    checked={selectedUsers.includes(id)}
                    onChange={() => handleSelectUser(id)}
                  />
                </div>
                <div className="content-rows--info">
                  <div className="content-rows--info__avt">
                    <img src={require(`@Assets/images/${avt}`)} alt="Logo" />
                  </div>
                  <div className="content-rows--info__detail">
                    <div className="name-wrap">
                      <p className="content-rows--info__detail--name">{name}</p>
                      <IconLine />
                      <span className="content-rows--info__detail--position">
                        {type}
                      </span>
                    </div>

                    <p className="content-rows--info__detail--skill">
                      {position} | {skills}
                    </p>
                    <p className="content-rows--info__detail--address">
                      {address}
                    </p>
                  </div>
                </div>
                <div className="content-rows--action">
                  <div
                    onClick={() => handleOpenUser(id)}
                    className="content-rows--action__profile"
                  >
                    <p>Profile</p>
                  </div>
                  <div
                    onClick={() => setModalInvite(true)}
                    className="content-rows--action__invite"
                  >
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
