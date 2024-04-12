import React from "react";
import { useNavigate } from "react-router-dom";

interface ItemTypeProject {
    data: { id: number; name: string; }[];
    isProjectsUser:boolean;
}

const ListItemTypeProject = ({ data = [], isProjectsUser }: ItemTypeProject) => {
    const [isActive, setIsActive] = React.useState(1);
    const navigate = useNavigate();
    const ClickActive = (type: number) => {
        setIsActive(type);
        navigate(`${isProjectsUser ? "/matching-users/my-projects/" : "/projects/"}${type}`);
    };

    return (
        <>
            {data.map((m) => (
                <div
                    className={`projectTypeItem ${isActive === m.id ? "active" : ""}`}
                    onClick={() => ClickActive(m.id)}
                    key={m.id}
                >
                    {m.name}
                </div>
            ))}
        </>
    );
}

export default ListItemTypeProject