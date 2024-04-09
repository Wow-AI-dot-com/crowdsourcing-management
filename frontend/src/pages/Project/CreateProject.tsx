import "./CreateProject.scss";
import IconCircleSuccess from "@/assets/icons/IconCircleSuccess";
import IconNextStep from "@/assets/icons/IconNextStep";
import IconCircleChecked from "@/assets/icons/IconCircleChecked";
import InputBase from "@/components/InputBase/InputBase";
import Checkbox from "@/components/Checkbox/Checkbox";
import Upload from "@/components/Upload/Upload";
import IconBack from "@/assets/icons/IconBack";
import IconNext from "@/assets/icons/IconNext";
import Button from "@/components/Button/Button";
import HtmlEditor from "@/components/HtmlEditor/HtmlEditor";
import IconClockCreatePJ from "@/assets/icons/IconClockCreatePJ";
import IconCalendarCreatePJ from "@/assets/icons/IconCalendarCreatePJ";
import IconDownload from "@/assets/icons/IconDownload";

const listOption = [
    { id: 1, name: "Data collection" },
];

const CreateProject = () => {
    return (
        <div className="create-project">
            <div className="menu-step">
                <div className="menu-step__tab menu-step__tab--active">
                    <IconCircleSuccess />
                    <span>1. Project detail</span>
                </div>
                <IconNextStep />
                <div className="menu-step__tab">
                    <IconCircleChecked />
                    <span>2. Registration form</span>
                </div>
                <IconNextStep />
                <div className="menu-step__tab">
                    <IconCircleChecked />
                    <span>3. Email</span>
                </div>
            </div>
            <div className="create-container__wrapper">
                <div className="project-name">
                    <InputBase label="Project’s name" placeholder="Input text" />
                    <div className="project-name--field-id">
                        <span>ID: 123456</span>
                    </div>
                </div>

                <div className="project-timeline">
                    <div className="project-timeline--block">
                        <div className="project-timeline--block__title">
                            <IconClockCreatePJ />
                            One-time task
                        </div>
                        <input name="tickInputRadio" type="radio" id="bankTransfer" />
                    </div>
                    <div className="project-timeline--block">
                        <div className="project-timeline--block__title">
                            <IconCalendarCreatePJ />
                            Long term task
                        </div>
                        <input name="tickInputRadio" type="radio" id="bankTransfer" />
                    </div>
                </div>

                <div className="project-category">
                    <InputBase
                        listOption={listOption}
                        label="Project category"
                        placeholder="Input text"
                    />
                    <div className="project-category--wrapper">
                        <div className="project-category--wrapper__columns">
                            <Checkbox label="Image collection" classNameLabel='label-category' />
                            <Checkbox label="Audio collection" classNameLabel='label-category' />
                            <Checkbox label="Video collection" classNameLabel='label-category' />
                        </div>
                        <div className="project-category--wrapper__columns">
                            <Checkbox label="Text collection" classNameLabel='label-category' />
                            <Checkbox label="OTS datasets collection" classNameLabel='label-category' />
                            <Checkbox label="Other data collection" classNameLabel='label-category' />
                        </div>
                        <div className="project-category--wrapper__columns">
                            <Checkbox label="Document collection" classNameLabel='label-category' />
                        </div>
                    </div>
                </div>

                <div className="project-description">
                    <div className="project-description__title">
                        <span>Job discription</span>
                        <HtmlEditor />
                    </div>
                </div>

                <div className="project-contract">
                    <div className="project-contract--contract-box">
                        <span className="project-contract--contract-box__title">Contract for vendors</span>
                        <Upload describe="JPG, GIF or PNG. Max size of 800K" />
                        <div className="project-contract--contract-box--download">
                            <IconDownload />
                            <span className="txt">Download contract template</span>
                        </div>
                    </div>
                </div>
                <div className="project-upload">
                    <div className="project-upload--upload-box">
                        <span>
                            Upload all project-related docs here (for internal storage)
                        </span>
                        <div className="project-upload--upload-box__input">
                            <Upload describe="JPG, GIF or PNG. Max size of 800K" />
                        </div>
                    </div>
                </div>

                <div className="project-rate">
                    <div className="project-rate__title">
                        <p>Rate Unit</p>
                        <span>Total amount the applier will see</span>
                    </div>
                    <div className="project-rate__price">
                        <InputBase placeholder="$20.00" />
                        <span>/task</span>
                    </div>
                </div>

                <div className="project-terms">
                    <div>
                        <Checkbox label="Terms & Consent" classNameLabel='project-terms__label' />
                    </div>
                </div>
            </div>

            <div className="footer">
                <div className="footer--back">
                    <IconBack />
                    <span>Back</span>
                </div>
                <div className="footer--next">

                    <Button size="small" className="btn-next">
                        Next
                        <IconNext />
                    </Button>
                </div>
            </div>
        </div>

    );
};

export default CreateProject;
