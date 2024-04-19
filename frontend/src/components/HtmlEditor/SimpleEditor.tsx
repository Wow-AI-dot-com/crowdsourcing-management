import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import "./SimpleEditor.scss";

type SimpleEditorProps = {
  onChange?: (v: string) => void;
  value?: string;
  placeholder?: string;
  onClick?: () => void;
};
const SimpleEditor = ({
  onChange,
  value,
  placeholder,
  onClick,
}: SimpleEditorProps) => {
  const content = React.useRef<string>(value ?? "");

  return (
    <div className="editor-simple">
      <Editor
        apiKey="ovkwin5ecsf54i7ytv1elco6w1bl6t24fbdmsura4qjm47ow"
        initialValue={content.current}
        init={{
          menubar: false,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "help",
            "wordcount",
            "autoresize",
          ],
          toolbar:
            "bold italic forecolor underline link" +
            "bullist numlist| " +
            "removeformat",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px; margin:0; } p { margin: 0; }",
          placeholder: placeholder ?? "",
          statusbar: false,
          toolbar_location: "bottom",
          autoresize_bottom_margin: 0,
        }}
        onChange={(_, editor) => {
          onChange?.(editor.getContent());
        }}
        onClick={onClick}
      />
    </div>
  );
};

export default SimpleEditor;
