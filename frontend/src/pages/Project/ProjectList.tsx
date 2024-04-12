import { useUserLayout } from "@/layouts/UserLayout";
import React from "react";
import { ProjectAttribute } from "./Filter/ProjectAttribute";
import { ProjectType } from "./Filter/ProjectType";
import "./ProjectList.scss";
import ProjectItem from "./ProjectItem";
import { useNavigate, useParams } from "react-router-dom";
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
const ProjectList = ({ isProjectsUser = false }) => {
  const userLayout = useUserLayout();
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);
  
  React.useEffect(() => {
    userLayout.setBreadcrumbs([{ label: "Projects" }]);

    return () => {
      userLayout.clearBreadcrumbs();
    };
  }, [userLayout]);

  const handleOnclick = (id: number) => {
    navigate(`/projects/${params.type}/${id}`);
  };

  const handleOnClickButton = (id: number, e: any) => {
    e.stopPropagation();
    navigate(`/projects/${params.type}/${id}/payment`);
  };

  return (
    <div className="containerProjectList">
      <div className="headerProject">
        <ProjectType isProjectsUser={isProjectsUser} />
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
                onclickButton={handleOnClickButton}
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
