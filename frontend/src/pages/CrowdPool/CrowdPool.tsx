import IconMessageCrowdPool from "@/assets/icons/IconMessageCrowdPool";
import IconNationCrowdPool from "@/assets/icons/IconNationCrowdPool";
import Checkbox from "@/components/Checkbox/Checkbox";
import Dropdown from "@/components/Dropdown/Dropdown";
import InputBase from "@/components/InputBase/InputBase";
import React, { useState } from "react";
import "./CrowdPool.scss";
import IconSearch from "@/assets/icons/iconSearch";
import ItemProjectCrowdPool from "./ItemProjectCrowdPool";
import Pagination from "@/components/Pagination/Pagination";

export default function CrowdPool() {
  const [listItemChecked, setListItemChecked] = useState<number[]>([]);
  const listItemProjectCrowdPool = [
    {
      id: 1,
      nameUser: "Cristita Michael",
      nameProject: "Project Manager",
      content: "Project Manager |Adobe Inc., CorelDRAW, Drawing",
    },
    {
      id: 2,
      nameUser: "Cristita Michael2",
      nameProject: "Project Manager",
      content: "Project Manager |Adobe Inc., CorelDRAW, Drawing",
    },
    {
      id: 3,
      nameUser: "Cristita Michael3",
      nameProject: "Project Manager",
      content: "Project Manager |Adobe Inc., CorelDRAW, Drawing",
    },
    {
      id: 4,
      nameUser: "Cristita Michael4",
      nameProject: "Project Manager",
      content: "Project Manager |Adobe Inc., CorelDRAW, Drawing",
    },
    {
      id: 5,
      nameUser: "Cristita Michael5",
      nameProject: "Project Manager",
      content: "Project Manager |Adobe Inc., CorelDRAW, Drawing",
    },
    {
      id: 6,
      nameUser: "Cristita Michael6",
      nameProject: "Project Manager",
      content: "Project Manager |Adobe Inc., CorelDRAW, Drawing",
    },
  ];
  const arrLanguage = ["VietNamese", "English"];
  const actionCheck = (e: boolean, id: number) => {
    if (e) {
      setListItemChecked((state) => [...state, id]);
    } else {
      // setListItemChecked((state) => [...state, state])
    }
  };
  return (
    <div className="c-pool">
      <div className="c-pool__header">
        <div className="c-pool__header-left">
          <Checkbox
            size="sm"
            label="Select all"
            classNameLabel="c-pool__header-left-label"
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
            className=""
          />
          <Dropdown
            iconPosition="left"
            label="Nation"
            icon={<IconNationCrowdPool />}
            className=""
          />
        </div>
      </div>
      <div className="list-project-crowdPool">
        {listItemProjectCrowdPool.map((m) => {
          return (
            <ItemProjectCrowdPool
              checkInput={(e) => actionCheck(e, m.id)}
              checked={listItemChecked.includes(m.id)}
              key={m.id}
              content={m.content}
              nameUser={m.nameUser}
              nameProject={m.nameProject}
              listLanguage={arrLanguage}
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
