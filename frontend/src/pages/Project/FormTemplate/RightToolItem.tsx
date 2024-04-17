import React from "react";

type RightToolItemProps = {
  icon: React.ReactNode;
  tooltip: string;
  onClick: (id: string) => void;
  id: string;
};

const RightToolItem = ({ icon, tooltip, onClick, id }: RightToolItemProps) => {
  return (
    <div className="item" onClick={() => onClick(id)}>
      {icon}
      <div className="tooltip">{tooltip}</div>
    </div>
  );
};

export default RightToolItem;
