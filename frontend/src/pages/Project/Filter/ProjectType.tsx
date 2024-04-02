import React from "react";
import "./ProjectType.scss";

const ListNameItemProject = [
  { id: 1, name: "Available" },
  { id: 2, name: "Applied" },
  { id: 3, name: "My Projects" },
];
export const ProjectType = () => {
  const [isActive, setIsActive] = React.useState<number>(1);
  const ClickActive = (number: number) => {
    setIsActive(number);
  };
  return (
    <div className="containerProjectType">
      {ListNameItemProject.map((m) => {
        return (
          <div
            className={`projectTypeItem ${isActive === m.id ? "active" : ""}`}
            onClick={() => ClickActive(m.id)}
          >
            {m.name}
          </div>
        );
      })}
    </div>
  );
};
