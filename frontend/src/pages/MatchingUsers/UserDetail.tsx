import IconCameraProfile from "@/assets/icons/IconCameraProfile";
import IconEarthProfile from "@/assets/icons/IconEarthProfile";
import IconLanguagesProfile from "@/assets/icons/IconLanguagesProfile";
import Button from "@/components/Button/Button";
import InputBase from "@/components/InputBase/InputBase";
import Upload from "@/components/Upload/Upload";
import './UserDetail.scss'

const arrayLanguages = ["Vietnamese", " English"];

const listOption = [
    { id: 1, name: "VietName" },
    { id: 2, name: "US" },
];

const UserDetail = () => {
    return (
        <div className="c-profile">
            <div className="header-profile" style={{
                display: "flex",
                gap: '0',
                justifyContent:'space-between'
            }}>
                <div style={{
                    display: "flex",
                    gap: '27px'
                }}>
                    <div className="header-avatar">
                        <img
                            src={require(`@Assets/images/avt-user.png`)}
                            alt=""
                            className="header-avatar-img"
                        />
                        <div className="header-avatar-icon">
                            <IconCameraProfile />
                        </div>
                    </div>
                    <div className="header-information">
                        <div className="header-information__name">Cristita Michael</div>
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
                
                <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        minWidth: "100px",
                    }}
                >
                    <Button type="success" className="btn-profile btn-invite">
                        Invite to Aplly
                    </Button>
                </div>
            </div>
            <div className="body-profile">
                <div className="left">
                    <InputBase label="First Name" placeholder="Input text" />
                    <InputBase label="Last name" placeholder="Input text" />
                    <InputBase
                        label="Phone number"
                        placeholder="Input text"
                        type="number"
                    />
                    <InputBase
                        label="About your self"
                        placeholder="Input text"
                        value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
                        isMultipleLine
                    />
                </div>
                <div className="right">
                    <InputBase
                        label="Nation"
                        placeholder="Input text"
                        listOption={listOption}
                    />
                    <div style={{ display: "flex", gap: "24px" }}>
                        <InputBase label="First language" listOption={listOption} />
                        <InputBase label="Proficiency level" listOption={listOption} />
                    </div>
                    <div style={{ display: "flex", gap: "24px" }}>
                        <InputBase label="Second language" listOption={listOption} />
                        <InputBase label="Proficiency level" listOption={listOption} />
                    </div>
                    <div className="upload-cv">
                        <span className="upload-cv__title">Attach your CV</span>
                        <div className="upload-cv__input">
                            <Upload describe="JPG, GIF or PNG. Max size of 800K" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetail;