import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProjectType.scss";

const ListNameItemProject = [
  { id: "available", name: "Available" },
  { id: "my-project", name: "Applied" },
  { id: "applied", name: "My Projects" },
];
export const ProjectType = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = React.useState("available");
  const ClickActive = (type: string) => {
    setIsActive(type);
    navigate("/projects/" + type);
  };
  return (
    <div className="containerProjectType">
      {ListNameItemProject.map((m) => {
        return (
          <div
            className={`projectTypeItem ${isActive === m.id ? "active" : ""}`}
            onClick={() => ClickActive(m.id)}
            key={m.id}
          >
            {m.name}
          </div>
        );
      })}
    </div>
  );
};
