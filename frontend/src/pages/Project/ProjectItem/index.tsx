import IconClockProject from "@/assets/icons/IconClockProject";
import IconDeleteAnnotation from "@/assets/icons/IconDeleteAnnotation";
import IconImageProject from "@/assets/icons/IconImageProject";
import IconPrice from "@/assets/icons/IconPrice";
import "./index.scss";
import IconCalendarProject from "@/assets/icons/IconCalendarProject";
interface TypeItemProject {
  isOneTime: boolean;
  title: string;
  information: string;
  handleOnclick: () => void;
  price: string;
}

function Index(props: TypeItemProject) {
  const { isOneTime, title, information, handleOnclick, price } = props;
  return (
    <div className="containerProjectItem">
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
      <button className="button" onClick={handleOnclick}>
        <IconPrice isWhite />
        {price}
      </button>
    </div>
  );
}

export default Index;
