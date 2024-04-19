import React, { useState } from "react";
import "./ProjectFormTemplate.scss";
import Button from "@/components/Button/Button";
import { useLocation, useNavigate } from "react-router-dom";
import IconPlusEmailTemplate from "@/assets/icons/IconPlusEmailTemplate";
import AlertSuccessful from "../../components/Alert/AlertSuccessful";
import ProjectTemplateFormItem from "./components/ProjectTemplateFormItem";
import { useUserLayout } from "@/layouts/UserLayout";

const LIST_FORM_TEMPLATE = [
  { name: "Form template name 1", createdDate: "2021-09-01", id: 1 },
  { name: "Form template name 2", createdDate: "2021-09-02", id: 2 },
  { name: "Form template name 3", createdDate: "2021-09-03", id: 3 },
];

export default function ProjectFormTemplate() {
  const navigate = useNavigate();
  const userLayout = useUserLayout();
  React.useEffect(() => {
    userLayout.setBreadcrumbs([{ label: "Form Template" }]);

    return () => {
      userLayout.clearBreadcrumbs();
    };
  }, [userLayout]);
  const path = useLocation().pathname;
  const [isAlertSuccess, setIsAlertSuccess] = useState(false);
  const [isAlertSave, setIsAlertSave] = useState(false);

  return (
    <div className="p-form-template">
      <AlertSuccessful
        open={isAlertSuccess}
        title="Form is deleted successfully"
        autoHide={() => setIsAlertSuccess(false)}
      />
      <AlertSuccessful
        open={isAlertSave}
        title="Form is added successfully"
        autoHide={() => setIsAlertSave(false)}
      />

      <div className="list_form_template">
        {LIST_FORM_TEMPLATE.map((item) => (
          <ProjectTemplateFormItem
            {...item}
            onDelete={() => null}
            onEdit={(id) => navigate(`${path}/${item.id}`)}
            key={item.id}
          />
        ))}
      </div>

      <div className="p-form-template__btn">
        <Button
          iconPosition="right"
          icon={<IconPlusEmailTemplate />}
          type="secondary"
          className="button"
          onClick={() => navigate(`${path}/create`)}
        >
          Add more form
        </Button>
      </div>
    </div>
  );
}
