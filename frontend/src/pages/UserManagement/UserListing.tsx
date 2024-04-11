import React, { useState } from "react";
import ItemUserListing from "./components/ItemUserListing";
import Button from "@/components/Button/Button";
import IconPlus from "@/assets/icons/IconPlus";
import "./UserListing.scss";
import Modal from "@/components/Modal/Modal";
import InputBase from "@/components/InputBase/InputBase";
import { useLocation, useNavigate } from "react-router-dom";

const arrayListItemUser = [
  {
    id: 1,
    title: "UserKorean",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis hendrerit ex ac convallis Lorem ipsum dolor ...",
  },
  {
    id: 2,
    title: "UserKorean",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis hendrerit ex ac convallis Lorem ipsum dolor ...",
  },
  {
    id: 3,
    title: "UserKorean",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis hendrerit ex ac convallis Lorem ipsum dolor ...",
  },
  {
    id: 4,
    title: "UserKorean",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis hendrerit ex ac convallis Lorem ipsum dolor ...",
  },
  {
    id: 5,
    title: "UserKorean",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis hendrerit ex ac convallis Lorem ipsum dolor ...",
  },
  {
    id: 6,
    title: "UserKorean",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis hendrerit ex ac convallis Lorem ipsum dolor ...",
  },
];

export default function UserListing() {
  const navigate = useNavigate();
  const path = useLocation().pathname;
  const [modalCreate, setModalCreate] = useState(false);
  const arrListSelect = [
    { id: 1, name: "User" },
    { id: 2, name: "Select" },
  ];
  const handleSubmitModal = () => {
    console.log("object");
  };

  return (
    <div className="u-user-listing">
      <Modal
        open={modalCreate}
        title="Add new sheet"
        submitText="Create"
        className="content-modal"
        onClose={() => setModalCreate(false)}
        onSubmit={handleSubmitModal}
      >
        <div className="modal-create-sheet">
          <InputBase label="Sheer name" placeholder="Email" />
          <InputBase
            label="Project manager (PM)"
            placeholder="Select PM"
            listOption={arrListSelect}
          />
          <InputBase label="Type of sheet" listOption={arrListSelect} />
          <InputBase
            label="Description"
            isMultipleLine
            placeholder="Type here"
          />
        </div>
      </Modal>
      <div className="u-user-listing__btn">
        <Button
          iconPosition="left"
          icon={<IconPlus />}
          onClick={() => setModalCreate(true)}
        >
          Create new sheet
        </Button>
      </div>
      <div className="u-user-listing__list">
        {arrayListItemUser.map((m) => {
          return (
            <ItemUserListing
              title={m.title}
              content={m.content}
              key={m.id}
              id={m.id}
              onClickOpen={(id) => navigate(`${path}/${id}`)}
            />
          );
        })}
      </div>
    </div>
  );
}
