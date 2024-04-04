import React from "react";
import "./AssetLabel.scss";

export interface TypeAssetLabel {
  name: string;
  value: string;
  color?: "blue" | "pink" | "purple";
}
export default function AssetLabel({ name, value, color }: TypeAssetLabel) {
  return (
    <div className={`container--asset-label ${color}`}>
      <div className="container--asset-label__name">{name}</div>
      <div className="container--asset-label__value">{value}</div>
    </div>
  );
}
