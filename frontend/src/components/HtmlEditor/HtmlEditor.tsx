import React from "react";
import {Editor} from '@tinymce/tinymce-react';

export default function HtmlEditor({onChange, value}: {
  onChange?: (v: string) => void,
  value?: string,
}) {
  const content = React.useRef<string>(value ?? "");

  return (
    <Editor
      apiKey='ovkwin5ecsf54i7ytv1elco6w1bl6t24fbdmsura4qjm47ow'
      initialValue={content.current}
      init={{
        height: 500,
        menubar: false,
        plugins: [
          'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
          'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
          'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
        ],
        toolbar: 'undo redo | h2 h3 h4 h5 h6 | ' +
          'bold italic forecolor | alignleft aligncenter ' +
          'alignright alignjustify | image | bullist numlist outdent indent | ' +
          'removeformat | help',
        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
      }}
      onChange={(_, editor) => {
        onChange?.(editor.getContent());
      }}
    />
  );
}
