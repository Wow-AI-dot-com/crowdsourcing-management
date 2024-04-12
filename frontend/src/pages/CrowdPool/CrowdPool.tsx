import {
  IconMessageCrowdPool,
  IconNationCrowdPool,
  IconSearch,
} from "@/assets/icons/Index";
import Checkbox from "@/components/Checkbox/Checkbox";
import Dropdown from "@/components/Dropdown/Dropdown";
import React, { ChangeEvent, useState } from "react";
import ItemProjectCrowdPool from "./ItemProjectCrowdPool";
import Pagination from "@/components/Pagination/Pagination";
import "./CrowdPool.scss";
import ModalInviteCrowdPool from "./components/ModalInviteCrowdPool";

const listItemProjectCrowdPool = [
  {
    id: 1,
    languages: "Vietnamese, English",
    nameUser: "Cristita Michael",
    nameProject: "Project Manager",
    content: "Project Manager |Adobe Inc., CorelDRAW, Drawing",
  },
  {
    id: 2,
    languages: "Vietnamese, English",
    nameUser: "Cristita Michael2",
    nameProject: "Project Manager",
    content: "Project Manager |Adobe Inc., CorelDRAW, Drawing",
  },
  {
    id: 3,
    languages: "Vietnamese, English",
    nameUser: "Cristita Michael3",
    nameProject: "Project Manager",
    content: "Project Manager |Adobe Inc., CorelDRAW, Drawing",
  },
  {
    id: 4,
    languages: "Vietnamese, English",
    nameUser: "Cristita Michael4",
    nameProject: "Project Manager",
    content: "Project Manager |Adobe Inc., CorelDRAW, Drawing",
  },
  {
    id: 5,
    languages: "Vietnamese, English",
    nameUser: "Cristita Michael5",
    nameProject: "Project Manager",
    content: "Project Manager |Adobe Inc., CorelDRAW, Drawing",
  },
  {
    id: 6,
    languages: "Vietnamese, English",
    nameUser: "Cristita Michael6",
    nameProject: "Project Manager",
    content: "Project Manager |Adobe Inc., CorelDRAW, Drawing",
  },
];
export default function CrowdPool() {
  const [listItemChecked, setListItemChecked] = useState<number[]>([]);
  const [openModalInvite, setOpenModalInvite] = useState(false);
  const checkItemInputProject = (e: boolean, id: number) => {
    if (e) {
      setListItemChecked((state) => [...state, id]);
    } else {
      setListItemChecked(listItemChecked.filter((f) => f !== id));
    }
  };

  const checkSelectAll = (e: boolean) => {
    if (e) {
      setListItemChecked(
        listItemProjectCrowdPool.map((m) => {
          return m.id;
        })
      );
    } else {
      setListItemChecked([]);
    }
  };
  const handleModalSubmit = () => {
    console.log("object");
  };
  return (
    <div className="c-pool">
      <ModalInviteCrowdPool
        open={openModalInvite}
        email="cristitamuchael@wow-ai.com"
        name="Cristita Michael"
        nameProject="Project Manager"
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPfO37MK81JIyR1ptwqr_vYO3w4VR-iC2wqQ&s"
        onClose={() => setOpenModalInvite(false)}
        onSubmit={handleModalSubmit}
      />
      <div className="c-pool__header">
        <div className="c-pool__header-left">
          <Checkbox
            size="sm"
            label="Select all"
            classNameLabel="c-pool__header-left-label"
            onChange={(e) => checkSelectAll(e)}
            checked={listItemChecked.length === listItemProjectCrowdPool.length}
          />
          <div className="c-pool__header-left-input">
            <input placeholder="Search here" className="input" />
            <div className="icon">
              <IconSearch />
            </div>
          </div>
        </div>
        <div className="c-pool__header-right">
          <Dropdown
            iconPosition="left"
            label="Language"
            icon={<IconMessageCrowdPool />}
            className="listDropdow"
          >
            {listItemProjectCrowdPool.map((m) => {
              return <li key={m.id}>{m.nameUser}</li>;
            })}
          </Dropdown>
          <Dropdown
            iconPosition="left"
            label="Nation"
            icon={<IconNationCrowdPool />}
            className="listDropdow"
          >
            {listItemProjectCrowdPool.map((m) => {
              return <li key={m.id}>{m.nameUser}</li>;
            })}
          </Dropdown>
        </div>
      </div>
      <div className="list-project-crowdPool">
        {listItemProjectCrowdPool.map((m) => {
          return (
            <ItemProjectCrowdPool
              checkInput={(e) => checkItemInputProject(e, m.id)}
              checked={listItemChecked.includes(m.id)}
              key={m.id}
              content={m.content}
              nameUser={m.nameUser}
              nameProject={m.nameProject}
              listLanguage={m.languages}
              clickInvite={() => setOpenModalInvite(true)}
            />
          );
        })}
      </div>
      <div>
        <Pagination
          page={1}
          pageSize={20}
          total={100}
          setPage={() => null}
          target={"crowd-pool"}
        />
      </div>
    </div>
  );
}
