import React from "react";
import "./Title.scss";

type TitleProps = {
  title: string;
  onchangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  description: string;
  onchangeDescription: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Title = ({
  title,
  onchangeTitle,
  description,
  onchangeDescription,
}: TitleProps) => {
  return (
    <div id="title-form-template">
      <div className="title">
        <input
          className="input-text"
          value={title}
          onChange={onchangeTitle}
          name="title"
          placeholder="Title"
        />
      </div>
      <div className="description">
        <input
          name="description"
          className="input-text"
          value={description}
          onChange={onchangeDescription}
          placeholder="Description"
        />
      </div>
    </div>
  );
};

export default Title;
