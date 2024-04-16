import "./Profile.scss";
import Button from "@/components/Button/Button";
import IconCameraProfile from "@/assets/icons/IconCameraProfile";
import IconEarthProfile from "@/assets/icons/IconEarthProfile";
import IconLanguagesProfile from "@/assets/icons/IconLanguagesProfile";

export type TProfileTitle = {
    onHandleOpenModalInvite: () => void,
    isMatchingUserScreen?: boolean,
    classNameHeader?: string
}

export default function ProfileTitle({ onHandleOpenModalInvite, isMatchingUserScreen, classNameHeader }: TProfileTitle) {
    const arrayLanguages = ["Vietnamese", " English"];

    return (
        <div
            className={`header-profile ${classNameHeader}`}
        >
            <div className={`${isMatchingUserScreen ? "hide-btn" : "show-btn"
                }`}>
                <div className="header-avatar">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPfO37MK81JIyR1ptwqr_vYO3w4VR-iC2wqQ&s"
                        alt=""
                        className="header-avatar-img"
                    />
                    <div className="header-avatar-icon">
                        <IconCameraProfile />
                    </div>
                </div>
                <div className="header-information">
                    <div className="header-information__name">User01 (Freelancer)</div>
                    <div className="header-information__email">user@wow-ai.com </div>
                    <div className="header-information__box-nationality">
                        <div className="nationality">
                            <IconEarthProfile />
                            <span>Viet Name</span>
                        </div>
                        <div className="languages">
                            <IconLanguagesProfile />
                            <span>{arrayLanguages.toString()}</span>
                        </div>
                    </div>
                </div>
            </div>

            {isMatchingUserScreen && <div
                style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    minWidth: "100px",
                }}
            >
                <Button
                    onClick={onHandleOpenModalInvite}
                    type="success"
                    className="btn-profile btn-invite"
                >
                    Invite to Aplly
                </Button>
            </div>}

        </div>
    );
}
