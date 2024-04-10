import IconCircleChecked from "@/assets/icons/IconCircleChecked"
import IconCircleSuccess from "@/assets/icons/IconCircleSuccess"
import IconNextStep from "@/assets/icons/IconNextStep"
import "./Step.scss";

type TStep = {
    isActive?: boolean;
    className?: string;
    parentClass?: string;
};

export default function Step({ isActive, className, parentClass }: TStep) {
    return (
        <div className={parentClass}>
            <div className={`${className} menu-step__tab${isActive && '--active'}`}>
                <IconCircleSuccess />
                <span>1. Project detail</span>
            </div>
            <IconNextStep />
            <div className={className}>
                <IconCircleChecked />
                <span>2. Registration form</span>
            </div>
            <IconNextStep />
            <div className={className}>
                <IconCircleChecked />
                <span>3. Email</span>
            </div>
        </div>
    )
    
}