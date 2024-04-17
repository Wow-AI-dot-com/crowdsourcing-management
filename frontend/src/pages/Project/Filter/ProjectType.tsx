import "./ProjectType.scss";
import ListItemTypeProject from "../ListItemTypeProject/ListItemTypeProject";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export interface TypeNames {
  id: string;
  name: string;
}
export interface TypeProjectType {
  isProjectsUser: boolean;
  ListItemName: TypeNames[];
  clickActive: (type: string) => void;
  active: string | undefined;
}

const LIST_TYPE_PROJECT = [
  { id: "my-projects", name: "My Projects" },
  { id: "shared-with-me", name: "Shared With Me" },
];

export const ProjectType = ({
  ListItemName,
  clickActive,
  active,
}: TypeProjectType) => {
  return (
    <div className="containerProjectType">
      {ListItemName.map((type) => (
        <ListItemTypeProject
          key={type.id}
          clickActive={() => clickActive(type.id)}
          id={type.id}
          name={type.name}
          isActive={active === type.id}
        />
      ))}
    </div>
  );
};
