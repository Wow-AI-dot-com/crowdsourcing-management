import "./ProjectType.scss";
import ListItemTypeProject from "../ListItemTypeProject/ListItemTypeProject";

const ListNameItemProject = [
  { id: 1, name: "Available" },
  { id: 2, name: "Applied" },
  { id: 3, name: "My Projects" },
];

const LIST_TYPE_PROJECT = [
  { id: 1, name: "My Projects" },
  { id: 2, name: "Shared With Me" },
];

export const ProjectType = ({ isProjectsUser = false }) => {
  return (
    <div className="containerProjectType">
      <ListItemTypeProject data={isProjectsUser ? LIST_TYPE_PROJECT : ListNameItemProject} isProjectsUser={isProjectsUser } />
    </div>
  );
};
