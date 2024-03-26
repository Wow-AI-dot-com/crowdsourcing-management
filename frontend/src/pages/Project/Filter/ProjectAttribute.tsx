import React from "react";
import Dropdown from "../../../components/Dropdown/Dropdown";
import "./ProjectAttribute.scss";
import IconDeleteAnnotation from "../../../assets/icons/IconDeleteAnnotation";
import IconLongTerm from "../../../assets/icons/IconLongTerm";
import IconPrice from "../../../assets/icons/IconPrice";
const ListAttribute = [
  { id: 1, name: "Annotation", icon: <IconDeleteAnnotation /> },
  { id: 2, name: "Long Term", icon: <IconLongTerm /> },
  { id: 3, name: "Price", icon: <IconPrice /> },
];
export const ProjectAttribute = () => {
  return (
    <div className="container">
      {ListAttribute.map((m) => {
        return (
          <div className="box">
            {m.icon}
            <div className="projectTitle">{m.name}</div>
            <Dropdown>
              {ListAttribute.map((m) => {
                return <div className="itemDropdown">{m.name}</div>;
              })}
            </Dropdown>
          </div>
        );
      })}
    </div>
  );
};
