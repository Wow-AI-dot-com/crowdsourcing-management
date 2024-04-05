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
  onclickButton: (id: number, e: any) => void;
  onClick: (id: number) => void;
  price: string;
  id: number;
}

function ProjectItem(props: TypeItemProject) {
  const { isOneTime, title, information, onclickButton, price, id, onClick } =
    props;
  return (
    <div className="containerProjectItem" onClick={() => onClick(id)}>
      <div>
        <div className="header">
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
        onClick={(e) => onclickButton(id, e)}
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
