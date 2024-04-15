import React from "react";
import { useNavigate } from "react-router-dom";

interface ItemTypeProject {
    id: string;
    name: string;
    ClickActive: () => void;
    isActive: boolean;
}

const ListItemTypeProject = ({ id, name, isActive, ClickActive }: ItemTypeProject) => {
    return (
        <div
            className={`projectTypeItem ${isActive  ? "active" : ""}`}
            onClick={ClickActive}
            key={id}
        >
            {name}
        </div>
    );
}

export default ListItemTypeProject