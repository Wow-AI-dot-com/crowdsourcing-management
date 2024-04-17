import React, { useRef, useEffect } from "react";
import SimpleEditor from "@Components/HtmlEditor/SimpleEditor";
import "./Title.scss";

type TitleProps = {
  title: string;
  onchangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  description: string;
  onchangeDescription: (e: any) => void;
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
        <SimpleEditor
          placeholder="Description"
          value={description}
          onChange={(text) =>
            onchangeDescription({
              target: { name: "description", value: text },
            })
          }
        />
      </div>
    </div>
  );
};

export default Title;
