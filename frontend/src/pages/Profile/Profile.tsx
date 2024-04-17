import "./Profile.scss";
import Button from "@/components/Button/Button";
import Information from "./components/Information";
import EnterInformation from "./components/EnterInformation";
import { useLocation } from "react-router-dom";

export default function Profile() {
  const location = useLocation();
  const isMatchingUserScreen = location?.state?.isMatchingUser || false;

  return (
    <div className="c-profile">
      <Information
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPfO37MK81JIyR1ptwqr_vYO3w4VR-iC2wqQ&s"
        email="user@wow-ai.com"
        name="User01"
        language="VietNamese, English"
        nation="VietNam"
        occupation="Freelancer"
        isButton={isMatchingUserScreen}
      />
      <div className="line"></div>
      <EnterInformation />
      {
        !isMatchingUserScreen && <div className="c-btn">
          <Button type="success" className="btn-profile">
            Save
          </Button>
        </div>
      }

    </div>
  );
}
