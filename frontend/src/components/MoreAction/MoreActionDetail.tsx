import useOnClickOutside from "@/hooks/useOnClickOutside";
import React, { RefObject, useCallback, useRef, useState } from "react";
import "./MoreActionDetail.scss";

export interface TypeListItemDetail {
  id: number;
  name: string;
}
export interface TypeMoreActionDetail {
  listItemDetail: TypeListItemDetail[];
  onClick: (id: number) => void;
}
export default function MoreActionDetail({
  listItemDetail,
  onClick,
}: TypeMoreActionDetail) {
  const detailRef = useRef(null);
  const [isDetail, setIsDetail] = useState(false);

  const handleClickOutside = useCallback(() => {
    if (!detailRef.current || !isDetail) return false;
    setIsDetail(false);
  }, [isDetail]);

  useOnClickOutside(detailRef, handleClickOutside);

  return (
    <div className="m-action">
      <div onClick={() => setIsDetail(true)} className="wrap-dots">
        <div className="m-action__ellipse"></div>
        <div className="m-action__ellipse"></div>
        <div className="m-action__ellipse"></div>
      </div>

      {isDetail ? (
        <div className="m-action-detail" ref={detailRef}>
          {listItemDetail.map((m) => {
            return (
              <div
                key={m.id}
                className="m-action-detail__item"
                onClick={() => {
                  onClick(m.id);
                  setIsDetail(false);
                }}
              >
                {m.name}
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
