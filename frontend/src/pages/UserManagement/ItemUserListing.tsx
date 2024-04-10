import IconFolderUserListing from "@/assets/icons/IconFolderUserListing";
import Button from "@/components/Button/Button";
import React, { useCallback, useEffect, useRef, useState } from "react";
import "./ItemUserListing.scss";
import ConfirmModal from "@/components/Modal/ConfirmModal";
import useOnClickOutside from "@/hooks/useOnClickOutside";
import Modal from "@/components/Modal/Modal";
import InputBase from "@/components/InputBase/InputBase";
import MoreActionDetail from "./MoreActionDetail";

export interface TypeItemUserListing {
  title: string;
  content: string;
}

export default function ItemUserListing({
  title,
  content,
}: TypeItemUserListing) {
  const detailRef = useRef(null);
  const [isDetail, setIsDetail] = useState(false);
  const [isConfirmModal, setIsConfirmModal] = useState(false);

  const handleClickOutside = useCallback(() => {
    if (!detailRef.current || !isDetail) return false;
    console.log(detailRef);
    setIsDetail(false);
  }, [isDetail]);

  useOnClickOutside(detailRef, handleClickOutside);

  const clickRightDetail = () => {
    if (isDetail) {
      setIsDetail(false);
    } else {
      setIsDetail(true);
    }
  };
  const clickRemoveModal = () => {
    console.log("object");
  };
  const clickRightDelete = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setIsConfirmModal(true);
  };

  const arrlistItemDetail = [
    { id: 1, name: "export" },
    { id: 2, name: "Delete" },
  ];
  return (
    <div className="i-item-user-listing">
      <ConfirmModal
        open={isConfirmModal}
        onClickCancel={() => setIsConfirmModal(false)}
        onClose={() => setIsConfirmModal(false)}
        onClickRemove={clickRemoveModal}
        title="Are you sure to delete your folder?"
      />
      <div className="header-item__user-listing">
        <div className="left">
          <div>
            <IconFolderUserListing />
          </div>
          <div className="left__text">{title}</div>
        </div>
        <MoreActionDetail listItemDetail={arrlistItemDetail} />
      </div>
      <div className="body-item__user-listing">{content}</div>
      <Button className="btn-item__user-listing" type="gray" size="medium">
        Open
      </Button>
    </div>
  );
}
