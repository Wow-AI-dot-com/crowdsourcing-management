import React from "react";
import Dropdown from "@Components/Dropdown/Dropdown";
import "./ProjectAttribute.scss";
import IconDeleteAnnotation from "@Assets/icons/IconDeleteAnnotation";
import IconLongTerm from "@Assets/icons/IconLongTerm";
import IconPrice from "@Assets/icons/IconPrice";
const ListAttribute = [
  { id: 1, name: "Annotation", icon: <IconDeleteAnnotation /> },
  { id: 2, name: "Long Term", icon: <IconLongTerm /> },
  // { id: 3, name: "Price", icon: <IconPrice isWhite={false} /> },
];
export const ProjectAttribute = () => {
  return (
    <div className="containerProjectAttribute">
      {ListAttribute.map((m) => {
        return (
          <div className="boxProjectAttribute" key={m.id}>
            {m.icon}
            <div className="title">{m.name}</div>
            <Dropdown>
              {ListAttribute.map((m) => {
                return (
                  <div className="itemDropdown" key={m.id}>
                    {m.name}
                  </div>
                );
              })}
            </Dropdown>
          </div>
        );
      })}
    </div>
  );
};
