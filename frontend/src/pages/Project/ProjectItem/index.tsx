import React from "react";
import { TProjectModel } from "../../../models/project";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./index.scss";
import {
  IconChecked,
  IconLightBulb,
  IconMinus,
  IconThreeDot,
} from "../../../assets/icons/Index";
import { formatDateTime } from "../../../utils/formatDate";
import Dropdown from "../../../components/Dropdown/Dropdown";
import { useCallback } from "react";
import DropdownItem, {
  TDropdownItem,
} from "../../../components/DropdownItem/DropdownItem";
import { confirmDialog } from "../../../components/Dialog";

type TProjectItemProps = {
  data: TProjectModel;
  deleteProject: (projectID: number) => void;
};

const ProjectItem = (props: TProjectItemProps) => {
  const { data } = props;
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const currentPage = { state: { currentPage: searchParams.get("page") } };

  const handleDropdownClick = useCallback(
    (e: React.MouseEvent<HTMLElement, MouseEvent>, handler: () => void) => {
      e.stopPropagation();
      handler();
    },
    []
  );

  const dataProjectItem: TDropdownItem[] = [
    {
      label: "Demo Environment",
      handler: (e: React.MouseEvent<HTMLElement, MouseEvent>) =>
        handleDropdownClick(e, () =>
          navigate(`/projects/${data.id}/demo`, currentPage)
        ),
    },
    {
      label: "Settings",
      handler: (e: React.MouseEvent<HTMLElement, MouseEvent>) =>
        handleDropdownClick(e, () =>
          navigate(`/projects/${data.id}/settings/general`, currentPage)
        ),
    },
    {
      label: "Labels",
      handler: (e: React.MouseEvent<HTMLElement, MouseEvent>) =>
        handleDropdownClick(e, () =>
          navigate(`/projects/${data.id}/settings/labels`, currentPage)
        ),
    },
    {
      label: "Delete",
      handler: (e: React.MouseEvent<HTMLElement, MouseEvent>) =>
        handleDropdownClick(e, () => {
          confirmDialog({
            message: "Are you sure you want to delete this project?",
            onSubmit() {
              props.deleteProject(props.data.id);
            },
          });
        }),
    },
  ];

  return (
    <div
      className="projects__item"
      key={"project-" + data.id}
      onClick={() => navigate(`/projects/${data.id}/data`, currentPage)}
      style={data.color ? { borderColor: data.color } : {}}
    >
      <div className="projects__item-top">
        <div className="projects__item-content">
          <span className="projects__item-title">{data.title}</span>
          <Dropdown
            icon={<IconThreeDot />}
            placement="right"
            arrow={true}
            style={{ right: 0, top: "30px" }}
          >
            <DropdownItem data={dataProjectItem} />
          </Dropdown>
        </div>
        <div className="projects__item-content">
          <span>
            {props.data.finished_task_number} / {props.data.task_number}
          </span>
          <div className="projects__item-content__right">
            <div className="projects__item-content__icon">
              <span className="green">
                <IconChecked />
              </span>
              <span>{props.data.total_annotations_number}</span>
            </div>
            <div className="projects__item-content__icon">
              <span className="pink">
                <IconMinus />
              </span>
              <span>{props.data.skipped_annotations_number}</span>
            </div>
            <div className="projects__item-content__icon">
              <span className="blue">
                <IconLightBulb />
              </span>
              <span>{props.data.total_predictions_number}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="projects__item-bot">
        <span className="projects__item-created">
          {formatDateTime(data.created_at)}
        </span>
      </div>
    </div>
  );
};

export default ProjectItem;
