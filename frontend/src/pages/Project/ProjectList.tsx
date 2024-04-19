import { useUserLayout } from "@/layouts/UserLayout";
import React from "react";
import { ProjectAttribute } from "./Filter/ProjectAttribute";
import { ProjectType } from "./Filter/ProjectType";
import "./ProjectList.scss";
import ProjectItem from "./ProjectItem";
import { useNavigate, useParams } from "react-router-dom";
import ListItemTypeProject from "./ListItemTypeProject/ListItemTypeProject";
const FAKE_PROJECTS = [
  {
    id: 1,
    status: false,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    information:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis hendrerit ex ac convallis Lorem ipsum dolor ...",
    price: "0.01 per task",
    type: "available",
  },
  {
    id: 2,
    status: false,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    information:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis hendrerit ex ac convallis Lorem ipsum dolor ...",
    price: "0.01 per task",
    type: "my-project",
  },
  {
    id: 3,
    status: false,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    information:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis hendrerit ex ac convallis Lorem ipsum dolor ...",
    price: "0.01 per task",
    type: "applied",
  },
  {
    id: 4,
    status: true,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    information:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis hendrerit ex ac convallis Lorem ipsum dolor ...",
    price: "0.01 per task",
  },
  {
    id: 5,
    status: false,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    information:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis hendrerit ex ac convallis Lorem ipsum dolor ...",
    price: "0.01 per task",
  },
];

const ListNameItemProject = [
  { id: "available", name: "Available" },
  { id: "applied", name: "Applied" },
  { id: "my-projects", name: "My Projects" },
];

const ProjectList = ({ isProjectsUser = false }) => {
  const userLayout = useUserLayout();
  const navigate = useNavigate();
  const params = useParams();

  React.useEffect(() => {
    userLayout.setBreadcrumbs([{ label: "Projects" }]);

    return () => {
      userLayout.clearBreadcrumbs();
    };
  }, [userLayout]);

  const handleOnclick = (id: number) => {
    navigate(`/projects/${params.type}/${id}`);
  };

  const clickActive = (type: string) => {
    navigate(
      `${isProjectsUser ? "/matching-users/my-projects/" : "/projects/"}${type}`
    );
  };

  return (
    <div className="containerProjectList">
      <div className="headerProject">
        <ProjectType
          active={params.type}
          isProjectsUser={isProjectsUser}
          ListItemName={ListNameItemProject}
          clickActive={(type) => clickActive(type)}
        />
        <ProjectAttribute />
      </div>
      <div className="listItemProject">
        {FAKE_PROJECTS.map((m) => {
          return (
            <div className="ItemProject" key={m.id}>
              <ProjectItem
                onClick={handleOnclick}
                key={m.id}
                isOneTime={m.status}
                title={m.title}
                information={m.information}
                price={m.price}
                id={m.id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectList;
