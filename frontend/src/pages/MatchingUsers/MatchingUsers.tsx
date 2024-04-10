import Checkbox from "@/components/Checkbox/Checkbox";
import "./MatchingUsers.scss";
import IconLanguagesUsers from "@/assets/icons/IconLanguagesUsers";
import IconNations from "@/assets/icons/IconNations";
import IconArrowLeft from "@/assets/icons/IconArrowLeft";
import IconSearch from "@/assets/icons/iconSearch";
import IconLine from "@/assets/icons/IconLine";
import Pagination from "@/components/Pagination/Pagination";
import { useState } from "react";

const FAKE_USERS = [
  {
    id: 1,
    name: "Cristita Michael",
    type: "Freelancer",
    skills: "Adobe Inc., CorelDRAW, Drawing...",
    position: "Project Management",
    address: "English, Vietnamese / United States",
  },
  {
    id: 2,
    name: "Cristita Michael",
    type: "Freelancer",
    skills: "Adobe Inc., CorelDRAW, Drawing...",
    position: "Project Management",
    address: "English, Vietnamese / United States",
  },
  {
    id: 3,
    name: "Cristita Michael",
    type: "Freelancer",
    skills: "Adobe Inc., CorelDRAW, Drawing...",
    position: "Project Management",
    address: "English, Vietnamese / United States",
  },
  {
    id: 4,
    name: "Cristita Michael",
    type: "Freelancer",
    skills: "Adobe Inc., CorelDRAW, Drawing...",
    position: "Project Management",
    address: "English, Vietnamese / United States",
  },
  {
    id: 5,
    name: "Cristita Michael",
    type: "Freelancer",
    skills: "Adobe Inc., CorelDRAW, Drawing...",
    position: "Project Management",
    address: "English, Vietnamese / United States",
  },
  {
    id: 6,
    name: "Cristita Michael",
    type: "Freelancer",
    skills: "Adobe Inc., CorelDRAW, Drawing...",
    position: "Project Management",
    address: "English, Vietnamese / United States",
  },
  {
    id: 7,
    name: "Cristita Michael",
    type: "Freelancer",
    skills: "Adobe Inc., CorelDRAW, Drawing...",
    position: "Project Management",
    address: "English, Vietnamese / United States",
  },
  {
    id: 8,
    name: "Cristita Michael",
    type: "Freelancer",
    skills: "Adobe Inc., CorelDRAW, Drawing...",
    position: "Project Management",
    address: "English, Vietnamese / United States",
  },
  {
    id: 9,
    name: "Cristita Michael",
    type: "Freelancer",
    skills: "Adobe Inc., CorelDRAW, Drawing...",
    position: "Project Management",
    address: "English, Vietnamese / United States",
  },
  {
    id: 10,
    name: "Cristita Michael",
    type: "Freelancer",
    skills: "Adobe Inc., CorelDRAW, Drawing...",
    position: "Project Management",
    address: "English, Vietnamese / United States",
  },
];

const MatchingUsers = () => {
  const [isOpenLanguage, setIsOpenLanguage] = useState(false);
  const [isOpenNation, setIsOpenNation] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);

  const handleSelectUser = (userId: number) => {
    setSelectedUsers((currentSelected) =>
      currentSelected.includes(userId)
        ? currentSelected.filter((id) => id !== userId)
        : [...currentSelected, userId]
    );
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedUsers(FAKE_USERS.map((user) => user.id));
    } else {
      setSelectedUsers([]);
    }
  };

  const isAllSelected = selectedUsers.length === FAKE_USERS.length;

  return (
    <div className="matching-users">
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
                      src={require("@Assets/images/avt-user.png")}
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
                  <div className="content-rows--action__profile">
                    <p>Profile</p>
                  </div>
                  <div className="content-rows--action__invite">
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
