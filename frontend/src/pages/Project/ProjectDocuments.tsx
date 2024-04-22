import React from "react";
import "./ProjectDocuments.scss";
import {
  IconFileProjectDocuments,
  IconFolderProjectDocuments,
  IconImageProjectDocuments,
  IconBack,
} from "@/assets/icons/Index";
import { useUserLayout } from "@/layouts/UserLayout";

const FAKE_DATA = [
  {
    id: 1,
    title: "user-journey-01.pdf",
    fileSize: "604KB",
    time: "2m ago",
    type: "file",
  },
  {
    id: 2,
    title: "Stock Photos",
    fileSize: "604KB",
    time: "3m ago",
    type: "folder",
  },
  {
    id: 3,
    title: "user-journey-01.pdf",
    fileSize: "604KB",
    time: "2 days ago",
    type: "image",
  },
  {
    id: 4,
    title: "user-journey-01.pdf",
    fileSize: "604KB",
    time: "2m ago",
    type: "file",
  },
  {
    id: 5,
    title: "user-journey-01.pdf",
    fileSize: "604KB",
    time: "2m ago",
    type: "file",
  },
  {
    id: 6,
    title: "user-journey-01.pdf",
    fileSize: "604KB",
    time: "2m ago",
    type: "image",
  },
  {
    id: 7,
    title: "user-journey-01.pdf",
    fileSize: "604KB",
    time: "2m ago",
    type: "image",
  },
  {
    id: 8,
    title: "user-journey-01.pdf",
    fileSize: "604KB",
    time: "2m ago",
    type: "file",
  },
  {
    id: 9,
    title: "user-journey-01.pdf",
    fileSize: "604KB",
    time: "2m ago",
    type: "folder",
  },
  {
    id: 10,
    title: "user-journey-01.pdf",
    fileSize: "604KB",
    time: "2m ago",
    type: "image",
  },
  {
    id: 11,
    title: "user-journey-01.pdf",
    fileSize: "604KB",
    time: "2m ago",
    type: "file",
  },
  {
    id: 12,
    title: "user-journey-01.pdf",
    fileSize: "604KB",
    time: "2m ago",
    type: "folder",
  },
];

export default function ProjectDocuments() {
  const userLayout = useUserLayout();
  React.useEffect(() => {
    userLayout.setBreadcrumbs([
      { label: "Compleyed Projects" },
      { label: "Project Documents" },
    ]);

    return () => {
      userLayout.clearBreadcrumbs();
    };
  }, [userLayout]);
  const handleIcon = (value: string) => {
    switch (value) {
      case "file":
        return <IconFileProjectDocuments />;
      case "folder":
        return <IconFolderProjectDocuments />;
      case "image":
        return <IconImageProjectDocuments />;
    }
  };
  return (
    <div className="c-project-documents">
      <div className="c-project-documents-content">
        {FAKE_DATA.map((m) => {
          return (
            <div
              key={m.id}
              className={`c-project-documents-content__row ${
                m.type === "image" ? "padding" : "border "
              }`}
            >
              <div className="content-row-left">
                {handleIcon(m.type)}
                <div className="information">
                  <div className="information-title">{m.title}</div>
                  <div className="information-time">{m.time}</div>
                </div>
              </div>
              <div className="content-row-right">{m.fileSize}</div>
            </div>
          );
        })}
      </div>
      <div className="c-project-documents-footer">
        <div className="btn-back">
          <IconBack />
          Back
        </div>
      </div>
    </div>
  );
}
