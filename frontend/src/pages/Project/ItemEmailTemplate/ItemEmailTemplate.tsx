import {
  IconMessage,
  IconEditPayment,
  IconTrashEmailTemplate,
} from "@/assets/icons/Index";
import React from "react";
import "./ItemEmailTemplate.scss";

export interface TypeItemEmailTemplate {
  id: number;
  subject: string;
  name: string;
  content: string;
  clickIconEdit: (id: number) => void;
  clickIconTrash: () => void;
}

export default function Index({
  id,
  subject,
  name,
  content,
  clickIconEdit,
  clickIconTrash,
}: TypeItemEmailTemplate) {
  return (
    <div className="i-email-template__box">
      <div className="i-email-template__box-header">
        <div className="left">
          <div className="icon">
            <IconMessage />
          </div>
          <span>Approve Email</span>
        </div>
        <div className="right">
          <div className="icon edit" onClick={() => clickIconEdit(id)}>
            <IconEditPayment />
          </div>
          <div className="icon delete" onClick={clickIconTrash}>
            <IconTrashEmailTemplate />
          </div>
        </div>
      </div>
      <div className="i-email-template__box-body">
        Subject: <span>{subject}</span>
      </div>
      <div className="i-email-template__box-footer">
        <div className="title">
          Hey <span className="text">{name} ,</span>
        </div>
        <span>{content}</span>
      </div>
    </div>
  );
}
