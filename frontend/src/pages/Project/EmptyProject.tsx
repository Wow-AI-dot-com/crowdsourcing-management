import { IconPlus } from "../../assets/icons/Index";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

const EmptyProject = () => {
  const navigate = useNavigate();

  return (
    <div className="page-projects empty">
      <div className="page-projects__wrapper">
        <p className="page-projects__title">
          No projects here? <br /> Create one and start building your AI models
        </p>
        <Button
          size="small"
          className="btn-create-project"
          icon={<IconPlus width={16} height={16} />}
          onClick={() => navigate("/create-project")}
        >
          CREATE PROJECT
        </Button>
      </div>
    </div>
  );
};

export default EmptyProject;
