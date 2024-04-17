import React from "react";
import { useNavigate } from "react-router-dom";

export interface ItemTypeProject {
  id: string;
  name: string;
  clickActive: () => void;
  isActive: boolean | undefined;
}

const ListItemTypeProject = ({
  id,
  name,
  isActive,
  clickActive,
}: ItemTypeProject) => {
  return (
    <div
      className={`projectTypeItem ${isActive ? "active" : ""}`}
      onClick={clickActive}
      key={id}
    >
      {name}
    </div>
  );
};

export default ListItemTypeProject;
