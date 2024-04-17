import React, { useEffect, useRef } from "react";
import "./TextAreaAutoHeight.scss";

type TextAreaAutoHeightProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  placeholder?: string;
  name?: string;
};

const TextAreaAutoHeight = ({
  value,
  onChange,
  className,
  placeholder,
  name,
}: TextAreaAutoHeightProps) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  }, []);

  const onChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    event.target.style.height = "auto";
    event.target.style.height = `${event.target.scrollHeight}px`;
    onChange(event);
  };

  return (
    <textarea
      id="textarea-auto-height"
      name={name}
      className={className}
      value={value}
      onChange={onChangeHandler}
      placeholder={placeholder}
    />
  );
};

export default TextAreaAutoHeight;
