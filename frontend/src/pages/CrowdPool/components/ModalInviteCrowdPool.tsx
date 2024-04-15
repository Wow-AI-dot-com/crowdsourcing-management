import InputBase from "@/components/InputBase/InputBase";
import Modal from "@/components/Modal/Modal";
import React from "react";

import "./ModalInviteCrowdPool.scss";

export interface TypeModalCrowdPool {
  open: boolean;
  onSubmit: () => void;
  onClose: () => void;
  img: string;
  name: string;
  nameProject: string;
  email: string;
}
export default function ModalCrowdPool({
  open,
  onSubmit,
  onClose,
  img,
  name,
  nameProject,
  email,
}: TypeModalCrowdPool) {
  return (
    <Modal
      open={open}
      title="Invite to project"
      submitText="Send invitation"
      onSubmit={onSubmit}
      onClose={onClose}
    >
      <div className="c-modal-invite-crowdPool">
        <div className="information-user">
          <img src={img} alt="avatar" />
          <div>
            <div className="box-name">
              <span className="name">{name}</span>
              <span className="name-project">{nameProject}</span>
            </div>
            <div className="email">{email}</div>
          </div>
        </div>
        <InputBase label="Project’s ID" />
      </div>
    </Modal>
  );
}
