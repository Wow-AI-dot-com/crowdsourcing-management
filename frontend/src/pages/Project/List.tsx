import React from "react";
import Pagination from "@Components/Pagination/Pagination";
import "./List.scss";
import { useUserLayout } from "../../layouts/UserLayout";
import EmptyProject from "./EmptyProject";
import ProjectItem from "./ProjectItem";
import Button from "@Components/Button/Button";
import IconArrowRight from "@Assets/icons/IconArrowRight";
import { useApi } from "@Providers/ApiProvider";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useBooleanLoader } from "@Providers/LoaderProvider";
import useProjectsHook from "@Hooks/projects/useProjectsHook";

export default function List() {
  const [searchParams] = useSearchParams();
  const currentPage = searchParams.get("page");
  const navigate = useNavigate();
  const projects = useProjectsHook({
    page: currentPage ? Number(currentPage) : 1,
  });
  const userLayout = useUserLayout();
  const { call } = useApi();
  const refreshTimeoutRef = React.useRef<NodeJS.Timeout>();
  useBooleanLoader(projects.loading, "Loading projects...");

  const refreshProjects = React.useCallback(() => {
    clearTimeout(refreshTimeoutRef.current);
    refreshTimeoutRef.current = setTimeout(projects.refresh, 500);
  }, [projects.refresh]);

  const deleteProject = React.useCallback(
    (projectID: number) => {
      const ar = call("deleteProject", {
        params: { id: projectID.toString() },
      });
      ar.promise.then(refreshProjects);
    },
    [call, refreshProjects]
  );

  const projectsList = React.useMemo(() => {
    return (
      <div className="page-projects__list">
        {projects.list?.map((p) => (
          <ProjectItem
            key={"project-" + p.id}
            data={p}
            deleteProject={deleteProject}
          />
        ))}
      </div>
    );
  }, [deleteProject, projects.list]);

  React.useEffect(() => {
    userLayout.setBreadcrumbs([{ label: "Projects" }]);

    return () => {
      userLayout.clearBreadcrumbs();
    };
  }, [userLayout]);

  if (projects.loading) {
    return <>Loading...</>;
  }

  if (projects.loadingError) {
    return <>{projects.loadingError}</>;
  }

  if (Array.isArray(projects.list) && projects?.list.length === 0) {
    return <EmptyProject />;
  }

  return (
    <div className="page-projects">
      {projects.loadingError && <div>{projects.loadingError}</div>}
      {projects.loading && <div>Loading...</div>}
      <div className="page-projects--create">
        <Button
          size="medium"
          className="btn-create-project"
          icon={<IconArrowRight />}
          onClick={() => navigate("/create-project")}
        >
          Create a project
        </Button>
      </div>
      {projectsList}
      {projects.list && (
        <Pagination
          disabled={projects.loading}
          page={projects.page}
          pageSize={projects.pageSize}
          total={projects.total}
          setPage={projects.setPage}
          target={"projects"}
        />
      )}
    </div>
  );
}
