import useOnClickOutside from "@/hooks/useOnClickOutside";
import React, { RefObject, useCallback, useRef, useState } from "react";
import "./MoreActionDetail.scss";

export interface TypeListItemDetail {
  id: number;
  name: string;
}
export interface TypeMoreActionDetail {
  listItemDetail: TypeListItemDetail[];
}
export default function MoreActionDetail({
  listItemDetail,
}: TypeMoreActionDetail) {
  const detailRef = useRef(null);
  const [isDetail, setIsDetail] = useState(false);

  const handleClickOutside = useCallback(() => {
    if (!detailRef.current || !isDetail) return false;
    setIsDetail(false);
  }, [isDetail]);

  useOnClickOutside(detailRef, handleClickOutside);

  return (
    <div className="m-action" onClick={() => setIsDetail(true)}>
      <div className="m-action__ellipse"></div>
      <div className="m-action__ellipse"></div>
      <div className="m-action__ellipse"></div>
      {isDetail ? (
        <div className="m-action-detail" ref={detailRef}>
          {listItemDetail.map((m) => {
            return <div className="m-action-detail__item">{m.name}</div>;
          })}
        </div>
      ) : null}
    </div>
  );
}
