import IconClockProject from "@/assets/icons/IconClockProject";
import IconDeleteAnnotation from "@/assets/icons/IconDeleteAnnotation";
import IconImageProject from "@/assets/icons/IconImageProject";
import IconPrice from "@/assets/icons/IconPrice";
import "./index.scss";
import IconCalendarProject from "@/assets/icons/IconCalendarProject";
import Button from "@/components/Button/Button";

interface TypeItemProject {
  isOneTime: boolean;
  title: string;
  information: string;
  onClick: (id: number) => void;
  price: string;
  id: number;
}

function ProjectItem(props: TypeItemProject) {
  const { isOneTime, title, information, price, id, onClick } = props;
  return (
    <div className="containerProjectItem">
      <div>
        <div className="header-project-item">
          <div className="svgHeader">
            <IconImageProject />
          </div>
          <div className="title">{title}</div>
        </div>
        <div className="status">
          <div className="statusItem">
            <IconDeleteAnnotation />
            Annotation
          </div>
          {isOneTime ? (
            <div className="statusItem">
              <IconClockProject />
              One-time Task
            </div>
          ) : (
            <div className="statusItem">
              <IconCalendarProject />
              Long term Task
            </div>
          )}
        </div>
        <div className="text">{information}</div>
      </div>
      <Button
        type="gray"
        onClick={() => onClick(id)}
        icon={<IconPrice />}
        iconPosition="left"
        isBlock
      >
        {price}
      </Button>
    </div>
  );
}

export default ProjectItem;
