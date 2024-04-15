import React from "react";
import FormTemplateItem from "./FormTemplateItem";
import "./FormTemplateCreate.scss";
import {
  IconAddCircle,
  IconSmallCaps,
  IconGalleryAdd,
  IconVideoAdd,
  IconRowVertical,
} from "@Assets/icons/Index";
import RightToolItem from "./RightToolItem";

const RIGHT_TOOL_ITEMS = [
  {
    icon: <IconAddCircle />,
    tooltip: "Add question",
    id: "add-question",
  },
  {
    icon: <IconSmallCaps />,
    tooltip: "Add title and description",
    id: "add-title-description",
  },
  {
    icon: <IconGalleryAdd />,
    tooltip: "Add image",
    id: "add-image",
  },
  {
    icon: <IconVideoAdd />,
    tooltip: "Add video",
    id: "add-video",
  },
  {
    icon: <IconRowVertical />,
    tooltip: "Add part",
    id: "add-part",
  },
];

const FormTemplateCreate = () => {
  const handleClickRightToolItem = (id: string) => {
    switch (id) {
      case "add-question":
        console.log("add-question");
        break;
      case "add-title-description":
        console.log("add-title-description");
        break;
      case "add-image":
        console.log("add-image");
        break;
      case "add-video":
        console.log("add-video");
        break;
      case "add-part":
        console.log("add-part");
        break;
      default:
        break;
    }
  };

  return (
    <div id="form-template-create">
      <FormTemplateItem />
      <div className="right-tool">
        {RIGHT_TOOL_ITEMS.map((item) => (
          <RightToolItem
            key={item.id}
            icon={item.icon}
            tooltip={item.tooltip}
            onClick={handleClickRightToolItem}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default FormTemplateCreate;
