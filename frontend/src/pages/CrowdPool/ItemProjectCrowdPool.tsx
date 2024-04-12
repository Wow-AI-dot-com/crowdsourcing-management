import Button from "@/components/Button/Button";
import Checkbox from "@/components/Checkbox/Checkbox";
import React from "react";
import "./ItemProjectCrowdPool.scss";

export interface TypeListLanguage {}

export interface TypeItemProjectCrowdPool {
  nameUser: string;
  nameProject: string;
  content: string;
  listLanguage: string;
  checkInput?: (checked: boolean) => void;
  checked: boolean;
}
export default function ItemProjectCrowdPool({
  nameUser,
  nameProject,
  content,
  listLanguage,
  checkInput,
  checked,
}: TypeItemProjectCrowdPool) {
  return (
    <div className="item-project-crowdPool">
      <div className="left">
        <Checkbox size="sm" onChange={checkInput} checked={checked} />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPfO37MK81JIyR1ptwqr_vYO3w4VR-iC2wqQ&s"
          alt="avatar"
        />
        <div className="information">
          <div className="name">
            <span className="name-user">{nameUser}</span>
            <span className="name-project">{nameProject}</span>
          </div>
          <div className="content">
            <span className="content-text">{content}</span>
          </div>
          <div className="language">
            <div>{listLanguage}</div> / <div>United States</div>
          </div>
        </div>
      </div>
      <div className="right">
        <Button type="secondary" className="btn-profile">
          Profile
        </Button>
        <Button>Invite to Apply</Button>
      </div>
    </div>
  );
}
