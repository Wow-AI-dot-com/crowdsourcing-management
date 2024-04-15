import "./ProjectType.scss";
import ListItemTypeProject from "../ListItemTypeProject/ListItemTypeProject";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ListNameItemProject = [
  { id: "available", name: "Available" },
  { id: "applied", name: "Applied" },
  { id: "my-projects", name: "My Projects" },
];

const LIST_TYPE_PROJECT = [
  { id: "my-projects", name: "My Projects" },
  { id: "shared-with-me", name: "Shared With Me" },
];

export const ProjectType = ({ isProjectsUser = false }) => {
  const [isActive, setIsActive] = useState(LIST_TYPE_PROJECT[0].id);
  const navigate = useNavigate();
  const ClickActive = (type: string) => {
    setIsActive(type);
    navigate(
      `${isProjectsUser ? '/matching-users/my-projects/' : "/projects/"}${type}`
    );
  };

  return (
    <div className="containerProjectType">
      {ListNameItemProject.map((type) => (
        <ListItemTypeProject
          ClickActive={() => ClickActive(type.id)}
          id={type.id}
          name={type.name}
          isActive={isActive === type.id}
        />
      ))}
    </div>
  );
};
